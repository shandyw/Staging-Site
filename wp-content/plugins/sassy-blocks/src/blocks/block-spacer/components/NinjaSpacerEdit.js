const { Fragment } = wp.element;

import Resizable from "re-resizable";
import Inspector from "./Inspector";
import Layout from "../layout";

const SassySpacerEdit = props => {
	const {
		attributes: { SpacerHeight, BorderVisibility },
		toggleSelection,
		setAttributes
	} = props;

	return (
		<Fragment>
			<Inspector {...props} />
			<Layout {...props}>
				<Resizable
					size={{ width: "100%", height: SpacerHeight }}
					minWidth={"100%"}
					maxWidth={"100%"}
					minHeight={"100%"}
					handleClasses={{ bottomLeft: "ab-spacer-control__resize-handle" }}
					enable={{ top: false, right: false, bottom: true, left: false }}
					onResizeStart={() => {
						toggleSelection(false);
					}}
					onResizeStop={(event, direction, elt, delta) => {
						setAttributes({
							SpacerHeight: parseInt(SpacerHeight + delta.height, 10)
						});
						toggleSelection(true);
					}}
					className="sassy_spacer_handle"
					style={{
						border: BorderVisibility === true ? "1px solid black" : "",
						borderStyle: BorderVisibility === true ? "dotted" : ""
					}}
				/>
			</Layout>
		</Fragment>
	);
};

export default SassySpacerEdit;
