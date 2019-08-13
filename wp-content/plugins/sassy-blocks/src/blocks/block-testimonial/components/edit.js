//  Import Block Dependency component
import Inspector from "./inspector.js";

// react-slick carousel
import Slider from "react-slick";

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

// Register editor components
const {
	RichText,
	AlignmentToolbar,
	MediaUpload,
	BlockControls
	//BlockAlignmentToolbar,
} = wp.editor;

// Register components
const { Dashicon, IconButton, Button, Toolbar } = wp.components;

export default class SBTestimonialEdit extends Component {
	render() {
		const sliderSettings = {
			draggable: false,
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			accessibility: false,
			arrows: false
			// autoplay: true
		};

		const {
			attributes: {
				testimonialAlignment,
				testimonialFontSize,
				testimonialBackgound,
				testimonialTextColor,
				testimonialImgRadius,
				lineHeight,
				paddingLeft,
				paddingRight,
				paddingTop,
				paddingBottom,
				marginLeft,
				marginRight,
				marginTop,
				marginBottom,
				letterSpacing,
				autohorInfoLayout,
				testimonialImgDiplay,
				sliderLimit
			},
			attributes,
			className,
			setAttributes,
			isSelected
		} = this.props;

		// main div
		const styleRootDiv = {
			backgroundColor: testimonialBackgound,
			marginLeft: marginLeft != "" ? marginLeft + "px" : undefined,
			marginRight: marginRight != "" ? marginRight + "px" : "",
			marginTop: marginTop != "" ? marginTop + "px" : "",
			marginBottom: marginBottom != "" ? marginBottom + "px" : ""
		};
		//testimonial-content
		const styleTestimonialContent = {
			textAlign: testimonialAlignment,
			fontSize: testimonialFontSize != "" ? testimonialFontSize + "px" : "",
			color: testimonialTextColor,
			lineHeight: lineHeight,
			paddingLeft: paddingLeft != "" ? paddingLeft + "px" : "",
			paddingRight: paddingRight != "" ? paddingRight + "px" : "",
			paddingTop: paddingTop != "" ? paddingTop + "px" : "",
			paddingBottom: paddingBottom != "" ? paddingBottom + "px" : "",
			letterSpacing: letterSpacing != "" ? letterSpacing + "px" : ""
		};
		//TestimonialImage
		const styleTestimonialImage = {
			borderRadius: testimonialImgRadius,
			display: testimonialImgDiplay ? "" : "none"
		};
		// Name, Title
		const styleTestimonialTextColor = {
			color: testimonialTextColor
		};
		// Uplaod button
		const styleTestimonialButton = {
			borderRadius: testimonialImgRadius
		};

		const createTestimonial = () => {
			let arrayTestimonial = [];

			for (var i = 0; i < sliderLimit; i++) {
				let testimonialContents = "testimonialContent" + i;
				let testimonialNames = "testimonialName" + i;
				let testimonialTitles = "testimonialTitle" + i;
				let testimonialAlts = "testimonialAlt" + i;
				let testimonialImageUrls = "testimonialImageUrl" + i;
				let testimonialImgIds = "testimonialImgId" + i;

				let nbContents = "nbContent" + i;
				let testimonial_images = "testimonial_image" + i;
				let nbNames = "nbName" + i;
				let nbTitles = "nbTitle" + i;

				arrayTestimonial.push(
					<div>
						<div className="sb-testimonial" style={styleRootDiv}>
							<div className="testimonial-content">
								<RichText
									tagName="p"
									className={nbContents}
									value={attributes[testimonialContents]}
									style={styleTestimonialContent}
									onChange={value =>
										setAttributes({
											[testimonialContents]: value
										})
									}
									placeholder={__("Enter Your Description")}
									keepPlaceholderOnFocus
								/>
							</div>
							<div
								className={
									autohorInfoLayout != ""
										? autohorInfoLayout
										: "testimonial-info"
								}
							>
								<div className="image" style={styleTestimonialImage}>
									{attributes[testimonialImageUrls] && isSelected && (
										<Toolbar>
											<MediaUpload
												onSelect={media => {
													setAttributes({
														[testimonialAlts]: media.alt,
														[testimonialImageUrls]: media.url,
														[testimonialImgIds]: media.id
													});
												}}
												type="image"
												value={attributes[testimonialImgIds]}
												render={({ open }) => (
													<IconButton
														className="components-toolbar__control tesEditBtn"
														label={__("Edit image")}
														icon="edit"
														onClick={open}
													/>
												)}
											/>
											<IconButton
												className="components-toolbar__control"
												label={__("Remove image")}
												icon="trash"
												onClick={() =>
													setAttributes({
														[testimonialImageUrls]: "",
														[testimonialImgIds]: ""
													})
												}
											/>
										</Toolbar>
									)}
									<MediaUpload
										onSelect={media => {
											setAttributes({
												[testimonialAlts]: media.alt,
												[testimonialImageUrls]: media.url,
												[testimonialImgIds]: media.id
											});
										}}
										type="image"
										value={attributes[testimonialImgIds]}
										render={({ open }) => (
											<Button onClick={open}>
												{!attributes[testimonialImgIds] ? (
													<Dashicon
														icon="format-image"
														className="defaultImgIcon"
													/>
												) : (
													<img
														src={attributes[testimonialImageUrls]}
														alt={attributes[testimonialAlts]}
														className={[testimonial_images]}
														style={styleTestimonialButton}
													/>
												)}
											</Button>
										)}
									/>
								</div>

								<div className="testimonial-details">
									<RichText
										tagName="h4"
										className={[nbNames]}
										value={attributes[testimonialNames]}
										style={styleTestimonialTextColor}
										onChange={value =>
											setAttributes({ [testimonialNames]: value })
										}
										placeholder={__("Add Name")}
										keepPlaceholderOnFocus
									/>
									<RichText
										tagName="p"
										className={[nbTitles]}
										value={attributes[testimonialTitles]}
										style={styleTestimonialTextColor}
										onChange={value =>
											setAttributes({ [testimonialTitles]: value })
										}
										placeholder={__("Add Title")}
										keepPlaceholderOnFocus
									/>
								</div>
							</div>
						</div>
					</div>
				);
			}

			return arrayTestimonial;
		};
		return (
			<Fragment>
				<Inspector {...{ setAttributes, ...this.props }} />

				<BlockControls>
					<AlignmentToolbar
						value={testimonialAlignment}
						onChange={value => setAttributes({ testimonialAlignment: value })}
					/>
				</BlockControls>

				<div className="SBTestimonialSlider">
					<Slider {...sliderSettings}>{createTestimonial()}</Slider>
				</div>
			</Fragment>
		);
	}
}
