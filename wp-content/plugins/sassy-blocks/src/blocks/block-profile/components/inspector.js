// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// import Block component
const { InspectorControls, FontSizePicker } = wp.editor;

// import Inspector components
const {
	PanelBody,
	ColorPalette,
	TextControl,
	SelectControl,
	PanelRow,
	ColorIndicator
} = wp.components;
/**
 * Create an Inspector Controls wrapper Component
 */

export default class Inspector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fb: false,
			twt: false,
			gP: false,
			ln: false,
			em: false
		};
	}

	render() {
		const {
			attributes: {
				profileBackground,
				facebook,
				facebookColor,
				twitter,
				twitterColor,
				googlePlus,
				googlePlusColor,
				linkedin,
				linkedinColor,
				email,
				emailColor,
				titleFontSize,
				titleColor,
				designationFontSize,
				designationColor,
				descriptionFontSize,
				descriptionColor,
				imageShape,
				profileLayout
			},
			setAttributes
		} = this.props;

		const colors = [
			{ color: "#00d1b2", name: "teal" },
			{ color: "#3373dc", name: "royal blue" },
			{ color: "#209cef", name: "sky blue" },
			{ color: "#22d25f", name: "green" },
			{ color: "#ffdd57", name: "yellow" },
			{ color: "#ff3860", name: "pink" },
			{ color: "#7941b6", name: "purple" },
			{ color: "#392F43", name: "black" },
			{ color: "#fff", name: "white" },
			{ color: "#ddd", name: "gray" }
		];

		// const fontSizes = [
		// 	{ shortName: "S", size: 12 },
		// 	{ shortName: "M", size: 26 }
		// ];
		const fallbackFontSize = 12;

		const profileLayouts = [
			{ label: "Horizontal", value: "" },
			{ label: "Vertical", value: "nb_AuthorProfile_Vertical" }
		];

		return (
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label="Layout"
						value={profileLayout}
						options={profileLayouts}
						onChange={value => setAttributes({ profileLayout: value })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Design")}
					initialOpen={false}
					className="profileTypography"
				>
					<PanelBody
						title={__("Title")}
						initialOpen={false}
						className="subTitle"
					>
						<FontSizePicker
							value={titleFontSize}
							fallbackFontSize={fallbackFontSize}
							onChange={value => setAttributes({ titleFontSize: value })}
						/>
						<p>
							Color: <ColorIndicator colorValue={titleColor} />
						</p>
						<ColorPalette
							label={__("Title")}
							colors={colors}
							value={titleColor}
							onChange={value => setAttributes({ titleColor: value })}
						/>
						<br />
					</PanelBody>

					<PanelBody
						title={__("Designation")}
						initialOpen={false}
						className="subTitle"
					>
						<FontSizePicker
							value={designationFontSize}
							fallbackFontSize={fallbackFontSize}
							onChange={value => setAttributes({ designationFontSize: value })}
						/>
						<p>
							Color: <ColorIndicator colorValue={designationColor} />
						</p>
						<ColorPalette
							label={__("Designation Color")}
							colors={colors}
							value={designationColor}
							onChange={value => setAttributes({ designationColor: value })}
						/>
						<br />
					</PanelBody>

					<PanelBody
						title={__("Description")}
						initialOpen={false}
						className="subTitle"
					>
						<FontSizePicker
							value={descriptionFontSize}
							fallbackFontSize={fallbackFontSize}
							onChange={value => setAttributes({ descriptionFontSize: value })}
						/>

						<p>
							Color: <ColorIndicator colorValue={descriptionColor} />
						</p>
						<ColorPalette
							label={__("Description Color")}
							colors={colors}
							value={descriptionColor}
							onChange={value => setAttributes({ descriptionColor: value })}
						/>
						<br />
					</PanelBody>

					<PanelBody
						title={__("Background Color")}
						colorValue={profileBackground}
						initialOpen={false}
						className="subTitle"
					>
						<ColorPalette
							label={__("Background Color")}
							colors={colors}
							value={profileBackground}
							onChange={value => setAttributes({ profileBackground: value })}
						/>
					</PanelBody>
				</PanelBody>

				<PanelBody title={__("Profile Photo")} initialOpen={false}>
					<SelectControl
						label={__("Shape")}
						value={imageShape}
						options={[
							{ label: "Round", value: "50%" },
							{ label: "Square", value: "0%" }
						]}
						onChange={value => setAttributes({ imageShape: value })}
					/>
				</PanelBody>

				<PanelBody title={__("Social Media")} initialOpen={false}>
					<p>
						{__(
							"Add links to your social media site and they will appear in the bottom of the profile box."
						)}
					</p>

					<PanelRow className="profileSocialItem">
						<TextControl
							label={__("Facebook")}
							type="url"
							value={facebook}
							onChange={value => setAttributes({ facebook: value })}
							placeholder="https://www.facebook.com"
						/>
						<div className="profileSocialIconIndicator">
							<ColorIndicator
								colorValue={facebookColor}
								className="iconIndicator"
								onClick={() => {
									this.setState({ fb: !this.state.fb });
								}}
							/>
						</div>
					</PanelRow>

					{this.state.fb === true ? (
						<PanelRow className="profileIconColor">
							<ColorPalette
								colors={colors}
								value={facebookColor}
								onChange={value => setAttributes({ facebookColor: value })}
							/>
							<br />
						</PanelRow>
					) : null}

					<PanelRow className="profileSocialItem">
						<TextControl
							label={__("Twitter")}
							type="url"
							value={twitter}
							onChange={value => setAttributes({ twitter: value })}
							placeholder="https://twitter.com/"
						/>
						<div className="profileSocialIconIndicator">
							<ColorIndicator
								colorValue={twitterColor}
								className="iconIndicator"
								onClick={() => {
									this.setState({ twt: !this.state.twt });
								}}
							/>
						</div>
					</PanelRow>

					{this.state.twt === true ? (
						<PanelRow className="profileIconColor">
							<ColorPalette
								colors={colors}
								value={twitterColor}
								onChange={value => setAttributes({ twitterColor: value })}
							/>
							<br />
						</PanelRow>
					) : null}

					<PanelRow className="profileSocialItem">
						<TextControl
							label={__("Google Plus")}
							type="url"
							value={googlePlus}
							onChange={value => setAttributes({ googlePlus: value })}
							placeholder="https://plus.google.com"
						/>
						<div className="profileSocialIconIndicator">
							<ColorIndicator
								colorValue={googlePlusColor}
								className="iconIndicator"
								onClick={() => {
									this.setState({ gp: !this.state.gp });
								}}
							/>
						</div>
					</PanelRow>

					{this.state.gp === true ? (
						<PanelRow className="profileIconColor">
							<ColorPalette
								colors={colors}
								value={googlePlusColor}
								onChange={value => setAttributes({ googlePlusColor: value })}
							/>
							<br />
						</PanelRow>
					) : null}

					<PanelRow className="profileSocialItem">
						<TextControl
							label={__("LinkedIn")}
							type="url"
							value={linkedin}
							onChange={value => setAttributes({ linkedin: value })}
							placeholder="https://www.linkedin.com/"
						/>
						<div className="profileSocialIconIndicator">
							<ColorIndicator
								colorValue={linkedinColor}
								className="iconIndicator"
								onClick={() => {
									this.setState({ ln: !this.state.ln });
								}}
							/>
						</div>
					</PanelRow>

					{this.state.ln === true ? (
						<PanelRow className="profileIconColor">
							<ColorPalette
								colors={colors}
								value={linkedinColor}
								onChange={value => setAttributes({ linkedinColor: value })}
							/>
							<br />
						</PanelRow>
					) : null}

					<PanelRow className="profileSocialItem">
						<TextControl
							label={__("Email")}
							type="url"
							value={email}
							onChange={value => setAttributes({ email: value })}
							placeholder="https://www.gmail.com"
						/>
						<div className="profileSocialIconIndicator">
							<ColorIndicator
								colorValue={emailColor}
								className="iconIndicator"
								onClick={() => {
									this.setState({ em: !this.state.em });
								}}
							/>
						</div>
					</PanelRow>

					{this.state.em === true ? (
						<PanelRow className="profileIconColor">
							<ColorPalette
								colors={colors}
								value={emailColor}
								onChange={value => setAttributes({ emailColor: value })}
							/>
							<br />
						</PanelRow>
					) : null}
				</PanelBody>
			</InspectorControls>
		);
	}
}
