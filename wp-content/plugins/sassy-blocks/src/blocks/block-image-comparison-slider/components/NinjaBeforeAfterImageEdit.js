const { Fragment, Component } = wp.element;
const { MediaUpload } = wp.editor;
const { IconButton } = wp.components;

// Internalization
const { __ } = wp.i18n;

import Layout from "../layout";
import Inspector from "./Inspector";
import TwentyTwenty from "react-twentytwenty";

class SassyBeforeAfterImageEdit extends Component {
	componentDidUpdate() {
		this.checkSliderArrow();
	}

	componentDidMount() {
		this.checkSliderArrow();
	}

	checkSliderArrow = () => {
		if (
			document.getElementsByClassName("slider")[0] &&
			!document.getElementById("sassy_arrow_left_slider") &&
			!document.getElementById("sassy_arrow_right_slider")
		) {
			let arrowLeftDiv = document.createElement("div");
			arrowLeftDiv.id = "sassy_arrow_left_slider";
			arrowLeftDiv.className = "sassy-left-arrow-slider";
			document.getElementsByClassName("slider")[0].appendChild(arrowLeftDiv);

			let arrowRightDiv = document.createElement("div");
			arrowRightDiv.id = "sassy_arrow_right_slider";
			arrowRightDiv.className = "sassy-right-arrow-slider";
			document.getElementsByClassName("slider")[0].appendChild(arrowRightDiv);
		}
	};

	render() {
		const {
			attributes: {
				BeforeImageUrl,
				BeforeImageId,
				BeforeImageAlt,
				BeforeImageFilter,
				BeforeImageFilterPerc,
				AfterImageUrl,
				AfterImageId,
				AfterImageAlt
			},
			setAttributes
		} = this.props;

		let content = null;
		const handleSelectBeforeImage = img => {
			setAttributes({
				BeforeImageUrl: img.url,
				BeforeImageId: img.id,
				BeforeImageAlt: img.alt
			});
		};

		const handleSelectAfterImage = img => {
			setAttributes({
				AfterImageUrl: img.url,
				AfterImageId: img.id,
				AfterImageAlt: img.alt
			});
		};

		const displayImage = BeforeImageUrl || AfterImageUrl;
		const displayImageAlt = BeforeImageAlt || AfterImageAlt;
		const hasBothImages = BeforeImageUrl && AfterImageUrl;

		if (hasBothImages) {
			content = (
				<TwentyTwenty
					left={
						<img
							src={BeforeImageUrl}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								filter:
									BeforeImageFilter !== ""
										? BeforeImageFilter + "(" + BeforeImageFilterPerc + "%)"
										: null,
								verticalAlign: "top",
								cursor: "grab"
							}}
							id="sassyBeforeImg"
						/>
					}
					right={
						<img
							src={AfterImageUrl}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								verticalAlign: "top",
								cursor: "grab"
							}}
							id="sassyAfterImage"
						/>
					}
					slider={<div className="slider" />}
				/>
			);
		} else if (displayImage) {
			content = (
				<div>
					<img
						src={displayImage}
						alt={displayImageAlt}
						style={{
							width: "100%",
							height: "100%",
							filter:
								BeforeImageFilter !== ""
									? BeforeImageFilter + "(" + BeforeImageFilterPerc + "%)"
									: null,
							verticalAlign: "top",
							cursor: "grab"
						}}
						id={BeforeImageUrl ? "sassyBeforeImg" : "sassyAfterImage"}
					/>
				</div>
			);
		}

		return (
			<Fragment>
				<Inspector {...this.props} />
				<Layout {...this.props}>
					<div className="images_wrapper_btn" style={{ display: "flex" }}>
						<div className="images_action_before_btn" style={{ width: "50%" }}>
							<MediaUpload
								onSelect={handleSelectBeforeImage}
								type="image"
								value={BeforeImageId}
								render={({ open }) => (
									<Fragment>
										<div style={{ display: "flex" }}>
											<IconButton
												label={__("Edit Image")}
												icon="format-image"
												onClick={open}
											>
												{BeforeImageUrl && !!BeforeImageUrl.length ? (
													<span>&nbsp;Change Before Image</span>
												) : (
													<span>&nbsp;Add Before Image</span>
												)}
											</IconButton>
										</div>
									</Fragment>
								)}
							/>
						</div>

						<div className="images_action_after_btn" style={{ width: "50%" }}>
							<MediaUpload
								onSelect={handleSelectAfterImage}
								type="image"
								value={AfterImageId}
								render={({ open }) => (
									<Fragment>
										<div style={{ display: "flex" }}>
											<IconButton
												label={__("Edit Image")}
												icon="format-image"
												onClick={open}
											>
												{AfterImageUrl && !!AfterImageUrl.length ? (
													<span>&nbsp;Change After Image</span>
												) : (
													<span>&nbsp;Add After Image</span>
												)}
											</IconButton>
										</div>
									</Fragment>
								)}
							/>
						</div>
					</div>
					{content}
				</Layout>
			</Fragment>
		);
	}
}

export default SassyBeforeAfterImageEdit;
