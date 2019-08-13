import classnames from "classnames";
import Layout from "../layout";
import makeStyles from "../assets/js/makeStyles";

const { RichText } = wp.editor;

const SassySaveClass = props => {
	const {
		btnTxt,
		buttonUrl,
		buttonBackgroundColor,
		btnTextColor,
		buttonSize,
		btnShape,
		buttonTarget,
		buttonAlignment,
		ctaText,
		ctaTextFontSize,
		ctaTextColor
	} = props.attributes;
	return (
		<Layout {...props}>
			<div className="sassy-cta">
				<div className="sassy-text-cta">
					<RichText.Content
						tagName="p"
						value={ctaText}
						className="sassy-cta-text"
						style={makeStyles({
							color: ctaTextColor,
							fontSize:
								ctaTextFontSize === "" || ctaTextFontSize === undefined
									? ""
									: ctaTextFontSize + "px",
							textAlign: buttonAlignment
						})}
					/>
				</div>
				<div className="sassy-cta-button">
					<a href={buttonUrl} target={buttonTarget ? "_blank" : "_self"}>
						<div
							className="sassy-btn"
							style={makeStyles({
								borderRadius: btnShape,
								backgroundColor: buttonBackgroundColor
							})}
						>
							<RichText.Content
								tagName="p"
								value={btnTxt}
								className={classnames("sassy-button")}
								style={makeStyles({
									color: btnTextColor,
									fontSize:
										buttonSize === "" || buttonSize === undefined
											? ""
											: buttonSize
								})}
							/>
						</div>
					</a>
				</div>
			</div>
		</Layout>
	);
};

export default SassySaveClass;
