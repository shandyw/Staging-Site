import makeStyle from "./makeStyle.js";

const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;

export default class NBNoticeSave extends Component {
	render() {
		const {
			title,
			noticeTitleColor,
			noticBackground,
			noticBorderColor,
			noticeFontsize,
			noticeIcon,
			noticeDispaly
		} = this.props.attributes;

		const noticStyle = makeStyle({
			color: noticeTitleColor,
			fontSize:
				noticeFontsize === "" || noticeFontsize === undefined
					? ""
					: `${noticeFontsize}px`
		});

		return (
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
					<RichText.Content
						tagName="p"
						className="notice_title"
						value={title}
						style={noticStyle}
					/>
				</div>

				<div className="notice_icon">
					<span className={`sb-icon-${noticeIcon}`} />
				</div>
			</div>
		);
	}
}
