import classnames from "classnames";
import Layout from "../layout";
import makeStyles from "../assets/js/makeStyles";

const { RichText } = wp.editor;

const SassySaveClass = props => {
	const {
		attributes: { dropCapText, dcTextColor, dcFontSize }
	} = props;

	return (
		<Layout {...props}>
			{dropCapText && (
				<RichText.Content
					tagName="p"
					className={classnames(
						"sassy_drop_cap_text",
						"sassy-dc-font-size-" + dcFontSize
					)}
					value={dropCapText}
					formattingControls={["bold", "italic", "strikethrough", "link"]}
					style={makeStyles({
						color: dcTextColor !== "" ? dcTextColor : "",
						lineHeight: "26px"
					})}
				/>
			)}
		</Layout>
	);
};

export default SassySaveClass;
