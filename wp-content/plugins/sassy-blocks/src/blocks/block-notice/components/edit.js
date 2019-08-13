import Inspector from "./inspector.js";

// Internationalization
const { __ } = wp.i18n;
const { RichText } = wp.editor;

// Extend component
const { Component, Fragment } = wp.element;

export default class NBNoticeEdit extends Component {
	render() {
		const {
			attributes: {
				title,
				noticeTitleColor,
				noticBackground,
				noticBorderColor,
				noticeFontsize,
				noticeIcon,
				noticeDispaly
			},
			setAttributes
		} = this.props;

		return [
			<Inspector {...{ setAttributes, ...this.props }} />,

			<div
				className={`nb_noticeBox ${
					noticeIcon ? "backgroundColor-" + noticeIcon : ""
				}`}
				style={{
					backgroundColor: noticBackground,
					border: noticBorderColor ? "solid 1px" + noticBorderColor : ""
				}}
			>
				<div className="notice_text">
					<RichText
						tagName="p"
						value={title}
						className="notice_title"
						onChange={value => setAttributes({ title: value })}
						placeholder={__("Add Title")}
						keepPlaceholderOnFocus
						style={{ color: noticeTitleColor, fontSize: noticeFontsize + "px" }}
					/>
				</div>
				<div className="notice_icon" onClick={this.dismissClick}>
					<span className={`sb-icon-${noticeIcon}`} />
				</div>
			</div>
		];
	}
}
