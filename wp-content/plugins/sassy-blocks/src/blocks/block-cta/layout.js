import classnames from "classnames";
import makeStyles from "./assets/js/makeStyles";

const Layout = props => {
	const {
		attributes: { buttonAlignment, ctaBackgroundColor },
		className,
		children
	} = props;

	return (
		<div
			style={makeStyles({
				backgroundColor: ctaBackgroundColor
				//textAlign: buttonAlignment
			})}
			className={classnames(className, "sassy-block-cta")}
		>
			{children}
		</div>
	);
};

export default Layout;
