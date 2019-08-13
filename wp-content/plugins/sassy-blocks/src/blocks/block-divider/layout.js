const Layout = props => {
	const {
		attributes: {
			DividerAlignment,
			SassyDividerPaddingTop,
			SassyDividerPaddingBottom
		},
		children
	} = props;
	return (
		<div
			className="sassy-divider-container"
			align={DividerAlignment}
			style={{
				paddingTop: SassyDividerPaddingTop + "px",
				paddingBottom: SassyDividerPaddingBottom + "px"
			}}
		>
			{children}
		</div>
	);
};

export default Layout;
