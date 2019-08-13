export default function makeStyles(prop = {}) {
	var style = {};

	for (let key in prop) {
		if (prop.hasOwnProperty(key)) {
			if (prop[key] !== "") {
				style[key] = prop[key];
			}
		}
	}
	return style;
}
