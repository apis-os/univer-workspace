/**
 * Comb frame codec: official JS Comb is JSON; binary is a proto3 wrapper.
 *
 * Official `@univerjs-pro/collaboration-client` `serializeCombRequest` (vendor CJS
 * `Ke`) is `JSON.stringify` of `{ cmd, routeKey, joinReq | leaveReq | collaMsg }`.
 * `@univerjs/protocol` has CombCmd / CmdRspCode / ICollaMsg TypeScript types but NO
 * Comb protobuf encoder and no Comb `.proto` in this package. Nested ICollaMsg
 * protobuf tags are not invented here.
 *
 * `encodeCombJson` matches that serialize contract (`JSON.stringify`).
 * `encodeCombFrame` wraps the same JSON envelope as proto3: varint cmd/code,
 * length-delimited strings for reason/routeKey/routeType, and length-delimited
 * JSON for nested objects (`infoRsp`, `joinReq`, `joinRsp`, `leaveReq`, `collaMsg`)
 * because protocol has no Comb `.proto` to encode those nested messages.
 * `decodeCombFrame` accepts JSON strings/bytes (`{`) or that proto3 envelope.
 *
 * Envelope field numbers follow JSON Comb key order from serializeCombRequest —
 * not recovered nested ICollaMsg tags:
 *   1 cmd, 2 code, 3 reason, 4 routeKey, 5 routeType,
 *   6 infoRsp, 7 joinReq, 8 joinRsp, 9 leaveReq, 10 collaMsg
 */

/**
 * Copied verbatim from
 * `apps/workspace/node_modules/@univerjs/protocol/lib/types/ts/universer/v1/comb.d.ts`.
 * `@univerjs/protocol` is not a Worker root dependency; T1 must not add one.
 */
export const CombCmd = {
  UNKNOWN_CMD: 0,
  HELLO: 1,
  JOIN: 2,
  LEAVE: 3,
  INGEST: 4,
  HEARTBEAT: 5,
  RECV: 6,
  UNRECOGNIZED: -1
} as const;

/** Copied verbatim from the same `comb.d.ts` as CombCmd. */
export const CmdRspCode = {
  UNKNOWN_CODE: 0,
  OK: 1,
  FAIL: 2,
  JOIN_ROOM_FULL: 1001,
  JOIN_ROOM_NOT_EXISTS: 1002,
  JOIN_ROOM_PERMISSION_DENIED: 1003,
  GLOBAL_ROOMS_CNT_EXCEEDS: 1004,
  UNRECOGNIZED: -1
} as const;

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const JSON_OBJECT_START = 0x7b;

const FIELD = {
  cmd: 1,
  code: 2,
  reason: 3,
  routeKey: 4,
  routeType: 5,
  infoRsp: 6,
  joinReq: 7,
  joinRsp: 8,
  leaveReq: 9,
  collaMsg: 10
} as const;

const WIRE_VARINT = 0;
const WIRE_LEN = 2;

export interface CombFrame {
  cmd: number;
  code?: number;
  reason?: string;
  routeKey?: string;
  routeType?: string;
  infoRsp?: unknown;
  joinReq?: unknown;
  joinRsp?: unknown;
  leaveReq?: unknown;
  collaMsg?: unknown;
  [key: string]: unknown;
}

export function encodeCombJson(msg: CombFrame): string {
  return JSON.stringify(msg);
}

export function encodeCombFrame(msg: CombFrame): Uint8Array {
  const chunks: Uint8Array[] = [];
  writeVarintField(chunks, FIELD.cmd, msg.cmd);
  if (typeof msg.code === "number") writeVarintField(chunks, FIELD.code, msg.code);
  if (typeof msg.reason === "string") writeStringField(chunks, FIELD.reason, msg.reason);
  if (typeof msg.routeKey === "string") writeStringField(chunks, FIELD.routeKey, msg.routeKey);
  if (typeof msg.routeType === "string") writeStringField(chunks, FIELD.routeType, msg.routeType);
  writeJsonField(chunks, FIELD.infoRsp, msg.infoRsp);
  writeJsonField(chunks, FIELD.joinReq, msg.joinReq);
  writeJsonField(chunks, FIELD.joinRsp, msg.joinRsp);
  writeJsonField(chunks, FIELD.leaveReq, msg.leaveReq);
  writeJsonField(chunks, FIELD.collaMsg, msg.collaMsg);
  return concat(chunks);
}

export function decodeCombFrame(input: string | ArrayBuffer | ArrayBufferView): CombFrame {
  if (typeof input === "string") {
    return parseJsonFrame(input);
  }
  const bytes = toUint8Array(input);
  if (bytes.byteLength === 0) {
    throw new Error("decodeCombFrame: empty frame");
  }
  if (bytes[0] === JSON_OBJECT_START) {
    return parseJsonFrame(textDecoder.decode(bytes));
  }
  return decodeProtobufFrame(bytes);
}

function parseJsonFrame(raw: string): CombFrame {
  const parsed = JSON.parse(raw);
  if (parsed == null || typeof parsed !== "object" || typeof parsed.cmd !== "number") {
    throw new Error("decodeCombFrame: JSON Comb frame missing numeric cmd");
  }
  return parsed as CombFrame;
}

function decodeProtobufFrame(bytes: Uint8Array): CombFrame {
  const frame: CombFrame = { cmd: 0 };
  let offset = 0;
  while (offset < bytes.byteLength) {
    const key = readVarint(bytes, offset);
    offset = key.next;
    const field = key.value >>> 3;
    const wire = key.value & 7;
    if (wire === WIRE_VARINT) {
      const value = readVarint(bytes, offset);
      offset = value.next;
      if (field === FIELD.cmd) frame.cmd = value.value;
      else if (field === FIELD.code) frame.code = value.value;
    } else if (wire === WIRE_LEN) {
      const len = readVarint(bytes, offset);
      offset = len.next;
      const slice = bytes.subarray(offset, offset + len.value);
      offset += len.value;
      const text = textDecoder.decode(slice);
      if (field === FIELD.reason) frame.reason = text;
      else if (field === FIELD.routeKey) frame.routeKey = text;
      else if (field === FIELD.routeType) frame.routeType = text;
      else if (field === FIELD.infoRsp) frame.infoRsp = JSON.parse(text);
      else if (field === FIELD.joinReq) frame.joinReq = JSON.parse(text);
      else if (field === FIELD.joinRsp) frame.joinRsp = JSON.parse(text);
      else if (field === FIELD.leaveReq) frame.leaveReq = JSON.parse(text);
      else if (field === FIELD.collaMsg) frame.collaMsg = JSON.parse(text);
    } else {
      throw new Error(`decodeCombFrame: unsupported wire type ${wire}`);
    }
  }
  return frame;
}

function writeVarintField(chunks: Uint8Array[], field: number, value: number): void {
  chunks.push(varintBytes((field << 3) | WIRE_VARINT));
  chunks.push(varintBytes(value >>> 0));
}

function writeStringField(chunks: Uint8Array[], field: number, value: string): void {
  const payload = textEncoder.encode(value);
  chunks.push(varintBytes((field << 3) | WIRE_LEN));
  chunks.push(varintBytes(payload.byteLength));
  chunks.push(payload);
}

function writeJsonField(chunks: Uint8Array[], field: number, value: unknown): void {
  if (value === undefined) return;
  writeStringField(chunks, field, JSON.stringify(value));
}

function toUint8Array(input: ArrayBuffer | ArrayBufferView): Uint8Array {
  if (input instanceof ArrayBuffer) return new Uint8Array(input);
  return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
}

function concat(chunks: Uint8Array[]): Uint8Array {
  let total = 0;
  for (const chunk of chunks) total += chunk.byteLength;
  const out = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return out;
}

function varintBytes(value: number): Uint8Array {
  const bytes: number[] = [];
  let n = value >>> 0;
  while (n > 0x7f) {
    bytes.push((n & 0x7f) | 0x80);
    n >>>= 7;
  }
  bytes.push(n);
  return Uint8Array.from(bytes);
}

function readVarint(bytes: Uint8Array, offset: number): { value: number; next: number } {
  let result = 0;
  let shift = 0;
  let pos = offset;
  while (pos < bytes.byteLength) {
    const byte = bytes[pos++];
    result |= (byte & 0x7f) << shift;
    if ((byte & 0x80) === 0) {
      return { value: result >>> 0, next: pos };
    }
    shift += 7;
    if (shift > 35) throw new Error("decodeCombFrame: varint too long");
  }
  throw new Error("decodeCombFrame: truncated varint");
}
