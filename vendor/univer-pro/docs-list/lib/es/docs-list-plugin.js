import { BuildTextUtils, CommandType, DOC_RANGE_TYPE, DependentOn, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, JSONX, ListGlyphType, PRESET_LIST_TYPE, Plugin, Tools, UniverInstanceType, getParagraphContentStartOffset, getParagraphContentStartOffsets, merge } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { F, I, L, M, N, P, R, z } from "./docs-list-insert.js";
const q = "DOCS_LIST_PLUGIN",
  fe = "࿁,o,O,ଠ,൦,ᆼ,౦,🔴,॰,∘,੦,໐,0,࿀,ᄋ,೦,૦,〇,०,ཕ,↤,↥,↦,↧,↨,↩,↪,↫,↬,↭,↮,↯,↰,↱,↲,↳,↴,↵,↶,↷,↸,↹,↺,↻,↼,↽,↾,↿,⇀,⇁,⇂,⇃,⇄,⇅,⇆,⇇,⇈,⇉,⇊,⇋,⇌,⇍,⇎,⇏,⇐,⇑,⇒,⇓,⇔,⇕,⇖,⇗,⇘,⇙,⇚,⇛,⇜,⇝,⇞,⇟,⇠,⇡,⇢,⇣,⇤,⇥,⇦,⇧,⇨,⇩,⇪,⇫,⇬,⇭,⇮,⇯,⇰,⇱,⇲,⇳,⇴,⇵,⇶,⇷,⇸,⇹,⇺,⇻,⇼,⇽,⇾,⇿,⍅,⍆,⍇,⍈,⍏,⍐,⍖,⍗,⏩,⏪,⏫,⏬,⏭,⏮,⏯,➔,➘,➙,➚,➛,➜,➝,➞,➟,➠,➡,➢,➣,➤,➥,➦,➧,➨,➩,➪,➫,➬,➭,➮,➯,➱,➲,➳,➴,➵,➶,➷,➸,➹,➺,➻,➼,➽,➾,⟰,⟱,⟲,⟳,⟴,⟵,⟶,⟷,⟸,⟹,⟺,⟻,⟼,⟽,⟾,⟿,⤀,⤁,⤂,⤃,⤄,⤅,⤆,⤇,⤈,⤉,⤊,⤋,⤌,⤍,⤎,⤏,⤐,⤑,⤒,⤓,⤔,⤕,⤖,⤗,⤘,⤝,⤞,⤟,⤠,⤡,⤢,⤣,⤤,⤥,⤦,⤧,⤨,⤩,⤪,⤭,⤮,⤯,⤰,⤱,⤲,⤳,⤴,⤵,⤶,⤷,⤸,⤹,⤺,⤻,⤼,⤽,⤾,⤿,⥀,⥁,⥂,⥃,⥄,⥅,⥆,⥇,⥈,⥉,⥊,⥋,⥌,⥍,⥎,⥏,⥐,⥑,⥒,⥓,⥔,⥕,⥖,⥗,⥘,⥙,⥚,⥛,⥜,⥝,⥞,⥟,⥠,⥡,⥢,⥣,⥤,⥥,⥦,⥧,⥨,⥩,⥪,⥫,⥬,⥭,⥮,⥯,⥱,⥲,⥳,⥴,⥵,⥶,⥷,⥸,⥹,⥺,⥻,⦽,⧪,⧫,⧬,⧭,⬀,⬁,⬂,⬃,⬄,⬅,⬆,⬇,⬈,⬉,⬊,⬋,⬌,⬍,⬎,⬏,⬐,⬑,⬰,⬱,⬲,⬳,⬴,⬵,⬶,⬷,⬸,⬹,⬺,⬻,⬼,⬽,⬾,⬿,⭀,⭁,⭂,⭃,⭄,⭅,⭆,⭇,⭈,⭉,⭊,⭋,⭌,🔀,🔁,🔂,🔃,🔄,🔙,🔚,🔛,🔜,🔝,🔺,🔻,🔼,🔽,￩,￪,￫,￬,͍,͎,͐,͑,͒,͓,͔,͕,͖,͢,᷾,᷿,⃔,⃕,⃖,⃗,ꜛ,ꜜ"["split"](",");
const Y = {};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654
    } = merge({}, Y, this._config);
    this._configService["setConfig"]("docs-list.config", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654);
  }
  onStarting() {
    [z, M, R, N, F, P, I, L].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => this.disposeWithMe(this._commandService["registerCommand"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468)));
  }
};
export { q as DOCS_LIST_PLUGIN, fe as DOCS_LIST_MORE_BULLETS, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 as UniverDocsListPlugin };
