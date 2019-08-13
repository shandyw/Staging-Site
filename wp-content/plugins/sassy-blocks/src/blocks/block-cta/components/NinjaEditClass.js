const { __ } = wp.i18n;

import classnames from "classnames";
import Inspector from "./Inspector";
import Layout from "../Layout";

const { AlignmentToolbar, URLInput, BlockControls, RichText } = wp.editor;

const { IconButton, Dashicon } = wp.components;

const { Fragment } = wp.element;

const SassyEditClass = props => {
	const {
		attributes: {
			btnTxt,
			buttonUrl,
			buttonAlignment,
			buttonBackgroundColor,
			btnTextColor,
			buttonSize,
			btnShape,
			ctaText,
			ctaTextFontSize,
			ctaTextColor
		},
		isSelected,
		setAttributes
	} = props;
	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={buttonAlignment}
					onChange={value => {
						setAttributes({ buttonAlignment: value });
					}}
				/>
			</BlockControls>

			<Inspector {...props} />

			<Layout {...props}>
				<div className="sassy-cta">
					<div className="sassy-text-cta">
						<RichText
							tagName="p"
							placeholder={__("Call To Action Text...")}
							value={ctaText}
							className="sassy-cta-text"
							style={{
								color: ctaTextColor,
								fontSize: ctaTextFontSize + "px",
								textAlign: buttonAlignment
							}}
							onChange={ctaText => setAttributes({ ctaText })}
							keepPlaceholderOnFocus
						/>
					</div>
					<div className="sassy-cta-button">
						<div
							className="sassy-btn"
							style={{
								borderRadius: btnShape,
								backgroundColor: buttonBackgroundColor
							}}
						>
							<RichText
								tagName="p"
								placeholder={__("Button text...")}
								keepPlaceholderOnFocus
								value={btnTxt}
								className={classnames("sassy-button")}
								style={{
									color: btnTextColor,

									fontSize: buttonSize
								}}
								onChange={btnTxt => setAttributes({ btnTxt })}
							/>
						</div>
						{isSelected && (
							<form
								key="form-link"
								className={`blocks-button__inline-link sassy-button-${buttonAlignment}`}
								onSubmit={event => event.preventDefault()}
								// style={{ textAlign: buttonAlignment }}
							>
								<Dashicon icon={"admin-links"} />
								<URLInput
									className="button-url"
									value={buttonUrl}
									onChange={buttonUrl => setAttributes({ buttonUrl })}
								/>
								<IconButton
									icon="editor-break"
									label={__("Apply")}
									type="submit"
								/>
							</form>
						)}
					</div>
				</div>
			</Layout>
		</Fragment>
	);
};

export default SassyEditClass;
