//  Import Block Dependency component
import Inspector from "./inspector.js";
import SocialIcons from "./social.js";

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

//Register editor components
const {
	BlockControls,
	AlignmentToolbar,
	RichText,
	MediaUpload,
	PlainText
} = wp.editor;

// Register components
const { Dashicon, Toolbar, IconButton, Button } = wp.components;

export default class NBAuthorProfileEdit extends Component {
	render() {
		const {
			attributes: {
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
			},
			setAttributes,
			attributes
		} = this.props;

		return [
			<Inspector {...this.props} />,

			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={descriptionAlign}
						onChange={value => setAttributes({ descriptionAlign: value })}
					/>
					{authorImgUrl && (
						<Toolbar>
							<MediaUpload
								onSelect={media => {
									setAttributes({
										authorImgAlt: media.alt,
										authorImgUrl: media.url,
										authorImageId: media.id
									});
								}}
								type="image"
								value={authorImageId}
								render={({ open }) => (
									<IconButton
										className="components-toolbar__control"
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
									setAttributes({ authorImgUrl: "", authorImageId: "" })
								}
							/>
						</Toolbar>
					)}
				</BlockControls>
			</Fragment>,

			<div
				className={profileLayout != "" ? profileLayout : "nb_AuthorProfile"}
				style={{ background: profileBackground }}
			>
				<div className="author_image">
					<MediaUpload
						onSelect={media => {
							setAttributes({
								authorImgAlt: media.alt,
								authorImgUrl: media.url,
								authorImageId: media.id
							});
						}}
						type="image"
						value={authorImageId}
						render={({ open }) => (
							<Button
								onClick={open}
								className="button_Image"
								style={{ borderRadius: imageShape }}
							>
								{!authorImageId ? (
									<Dashicon icon="format-image" className="authorIcon" />
								) : (
									<img
										src={authorImgUrl}
										alt="avatar"
										className="authorImg"
										style={{ borderRadius: imageShape }}
									/>
								)}
							</Button>
						)}
					/>
				</div>

				<div className="author_information">
					<RichText
						tagName="h2"
						className="title"
						value={title}
						placeholder={__("Author Name")}
						onChange={value => setAttributes({ title: value })}
						keepPlaceholderOnFocus
						style={{ fontSize: titleFontSize + "px", color: titleColor }}
					/>
					<RichText
						tagName="p"
						className="designation"
						value={designation}
						placeholder={__("Designation")}
						onChange={value => setAttributes({ designation: value })}
						keepPlaceholderOnFocus
						style={{
							fontSize: designationFontSize + "px",
							color: designationColor
						}}
					/>
					<RichText
						tagName="p"
						className="desc"
						value={description}
						placeholder={__("Write biography....")}
						onChange={value => setAttributes({ description: value })}
						keepPlaceholderOnFocus
						style={{
							fontSize: descriptionFontSize + "px",
							color: descriptionColor,
							textAlign: descriptionAlign
						}}
					/>

					{/* Social  */}
					<SocialIcons {...this.props} />
				</div>
			</div>
		];
	}
}
