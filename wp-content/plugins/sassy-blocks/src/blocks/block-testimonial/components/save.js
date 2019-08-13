// import makeStyle compoent
import makeStyle from "./makeStyle.js";

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register editor components
const { RichText } = wp.editor;

/**
 *  Save Component
 */
export default class SBTestimonialSave extends Component {
	render() {
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
			isSelected
		} = this.props;

		// main div
		const styleRootDiv = makeStyle({
			backgroundColor: testimonialBackgound,
			marginLeft:
				marginLeft === "" || marginLeft === undefined ? "" : `${marginLeft}px`,
			marginRight:
				marginRight === "" || marginRight === undefined
					? ""
					: `${marginRight}px`,
			marginTop:
				marginTop === "" || marginTop === undefined ? "" : `${marginTop}px`,
			marginBottom:
				marginBottom === "" || marginBottom === undefined
					? ""
					: `${marginBottom}px`
		});
		//testimonial-content
		const styleTestimonialContent = makeStyle({
			textAlign: testimonialAlignment,
			color: testimonialTextColor,
			lineHeight: lineHeight,
			fontSize:
				testimonialFontSize === "" || testimonialFontSize === undefined
					? ""
					: `${testimonialFontSize}px`,
			paddingLeft:
				paddingLeft === "" || paddingLeft === undefined
					? ""
					: `${paddingLeft}px`,
			paddingRight:
				paddingRight === "" || paddingRight === undefined
					? ""
					: `${paddingRight}px`,
			paddingTop:
				paddingTop === "" || paddingTop === undefined ? "" : `${paddingTop}px`,
			paddingBottom:
				paddingBottom === "" || paddingBottom === undefined
					? ""
					: `${paddingBottom}px`,
			letterSpacing:
				letterSpacing === "" || letterSpacing === undefined
					? ""
					: `${letterSpacing}px`
		});
		//TestimonialImage
		const styleTestimonialImage = {
			// borderRadius: testimonialImgRadius,
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

		const saveTesimonial = () => {
			let testimonialArray = [];

			for (let i = 0; i < sliderLimit; i++) {
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

				testimonialArray.push(
					<div className="sb-testimonial blog-item" style={styleRootDiv}>
						<div className="testimonial-content">
							<RichText.Content
								tagName="p"
								className={nbContents}
								value={attributes[testimonialContents]}
								style={styleTestimonialContent}
							/>
						</div>
						<div
							className={
								autohorInfoLayout != "" ? autohorInfoLayout : "testimonial-info"
							}
						>
							{attributes[testimonialImageUrls] && (
								<div className="image" style={styleTestimonialImage}>
									<img
										className={testimonial_images}
										src={attributes[testimonialImageUrls]}
										alt={attributes[testimonialAlts]}
										style={styleTestimonialButton}
									/>
								</div>
							)}

							<div className="testimonial-details">
								{attributes[testimonialNames] && (
									<RichText.Content
										tagName="h4"
										className={nbNames}
										value={attributes[testimonialNames]}
										style={styleTestimonialTextColor}
									/>
								)}

								{attributes[testimonialTitles] && (
									<RichText.Content
										tagName="p"
										className={nbTitles}
										value={attributes[testimonialTitles]}
										style={styleTestimonialTextColor}
									/>
								)}
							</div>
						</div>
					</div>
				);
			}
			return testimonialArray;
		};

		return (
			<div className="my-blogs owl-carousel owl-theme owl-center owl-loaded">
				{saveTesimonial()}
			</div>
		);
	}
}
