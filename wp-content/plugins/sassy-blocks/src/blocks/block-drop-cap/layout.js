import classnames from "classnames";
const Layout = props => {
	const {
		attributes: { buttonAlignment, drop_cap_position },
		children
	} = props;
	return (
		<div
			className={classnames(
				drop_cap_position === "dropped" ? "sassy_dc_content" : null,
				drop_cap_position === "in_margin" ? "sassy_dc_content_in_margin" : null,
				drop_cap_position === "normal" ? "sassy_dc_content_normal" : null
			)}
			style={{ textAlign: buttonAlignment }}
		>
			{children}
		</div>
	);
};

export default Layout;
