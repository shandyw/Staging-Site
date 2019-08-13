//Import Component
import SocialIcons from "./social";
import makeStyle from "./makeStyle";

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

const { RichText } = wp.editor;

export default class extends Component {
	render() {
		const {
			title,
			designation,
			description,
			authorImgUrl,
			authorImgAlt,
			authorImageId,
			profileBackground,
			facebook,
			facebookColor,
			twitter,
			twitterColor,
			googlePlus,
			googlePlusColor,
			titleFontSize,
			titleColor,
			designationFontSize,
			designationColor,
			descriptionFontSize,
			descriptionColor,
			imageShape,
			descriptionAlign,
			profileLayout
		} = this.props.attributes;

		if (title && title.length) {
			return (
				<div
					className={profileLayout != "" ? profileLayout : "nb_AuthorProfile"}
					style={makeStyle({
						background: profileBackground
					})}
				>
					{authorImgUrl && !!authorImgUrl.length && (
						<div className="author_image">
							<img
								src={authorImgUrl}
								alt={authorImgAlt}
								className="authorImg"
								style={makeStyle({
									borderRadius: imageShape
								})}
							/>
						</div>
					)}

					<div className="author_information">
						<RichText.Content
							tagName="h2"
							className="title"
							value={title}
							style={makeStyle({
								fontSize:
									titleFontSize === "" || titleFontSize === undefined
										? ""
										: titleFontSize + "px",
								color: titleColor
							})}
						/>
						<RichText.Content
							tagName="p"
							className="designation"
							value={designation}
							style={makeStyle({
								fontSize:
									designationFontSize === "" ||
									designationFontSize === undefined
										? ""
										: designationFontSize + "px",
								color: designationColor
							})}
						/>
						<RichText.Content
							tagName="p"
							className="desc"
							value={description}
							style={makeStyle({
								fontSize:
									descriptionFontSize === "" ||
									descriptionFontSize === undefined
										? ""
										: descriptionFontSize + "px",
								color: descriptionColor,
								textAlign: descriptionAlign
							})}
						/>

						{/* Social  */}
						<SocialIcons {...this.props} />
					</div>
				</div>
			);
		}
		return null;
	}
}
