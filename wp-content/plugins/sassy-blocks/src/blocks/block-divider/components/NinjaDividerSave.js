import makeStyles from "../assets/js/makeStyles";

const SassyDividerSave = props => {
	const {
		attributes: {
			DividerHeight,
			DividerWidth,
			DividerColor,
			DividerAlignment,
			SassyDividerPaddingTop,
			SassyDividerPaddingBottom
		}
	} = props;

	return (
		<div
			align={DividerAlignment}
			className="sassyDividerUserView"
			style={makeStyles({
				paddingTop: SassyDividerPaddingTop + "px",
				paddingBottom: SassyDividerPaddingBottom + "px"
			})}
		>
			<div
				style={makeStyles({
					border:
						DividerColor === undefined || DividerColor === ""
							? "1px solid"
							: "1px solid " + DividerColor,
					height: DividerHeight,
					width: DividerWidth + "%",
					backgroundColor: DividerColor
				})}
			/>
		</div>
	);
};

export default SassyDividerSave;
