// Including Fragment
const { Fragment } = wp.element;

// Import custom components
import Layout from "../layout";
import Inspector from "./Inspector";

const { AlignmentToolbar, BlockControls } = wp.editor;

const SassyDividerEdit = props => {
	const {
		attributes: { DividerHeight, DividerWidth, DividerColor, DividerAlignment },
		setAttributes
	} = props;
	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={DividerAlignment}
					onChange={DividerAlignment => setAttributes({ DividerAlignment })}
				/>
			</BlockControls>
			<Inspector {...props} />
			<Layout {...props}>
				<div
					style={{
						border:
							DividerColor === undefined || DividerColor === ""
								? "1px solid"
								: "1px solid " + DividerColor,
						height: DividerHeight + "px",
						width: DividerWidth + "%",
						background: DividerColor
					}}
				/>
			</Layout>
		</Fragment>
	);
};

export default SassyDividerEdit;
