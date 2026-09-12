import { createElement, forwardRef } from "react";
import { IconBase } from "./base.js";
//#region ts/shape-non-isosceles-trapezoid-icon.tsx
const element = {
	"tag": "svg",
	"attrs": {
		"xmlns": "http://www.w3.org/2000/svg",
		"fill": "none",
		"viewBox": "0 0 20 20",
		"width": "1em",
		"height": "1em"
	},
	"children": [{
		"tag": "path",
		"attrs": {
			"stroke": "currentColor",
			"d": "M6.80225 2H13.1978L16.7534 18H3.24658L6.80225 2Z",
			"strokeWidth": 1.6
		}
	}]
};
const ShapeNonIsoscelesTrapezoidIcon = forwardRef(function ShapeNonIsoscelesTrapezoidIcon(props, ref) {
	return createElement(IconBase, Object.assign({}, props, {
		id: "shape-non-isosceles-trapezoid-icon",
		ref,
		icon: element
	}));
});
ShapeNonIsoscelesTrapezoidIcon.displayName = "ShapeNonIsoscelesTrapezoidIcon";
//#endregion
export { ShapeNonIsoscelesTrapezoidIcon, ShapeNonIsoscelesTrapezoidIcon as default };
