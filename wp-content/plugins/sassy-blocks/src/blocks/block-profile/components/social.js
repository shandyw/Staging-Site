// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

export default class SocialIcons extends Component {
	render() {
		const {
			attributes: {
				facebook,
				facebookColor,
				twitter,
				twitterColor,
				googlePlus,
				googlePlusColor,
				linkedin,
				linkedinColor,
				email,
				emailColor
			}
		} = this.props;

		return (
			<div className="social-icon">
				{facebook &&
					!!facebook.length && (
						<a
							href={facebook}
							target="_blank"
							className="social-item facebook"
							style={{ color: facebookColor }}
						>
							<span class="dashicons dashicons-facebook-alt" />
						</a>
					)}

				{twitter &&
					!!twitter.length && (
						<a
							href={twitter}
							target="_blank"
							className="social-item twitter"
							style={{ color: twitterColor }}
						>
							<span class="dashicons dashicons-twitter" />
						</a>
					)}

				{googlePlus &&
					!!googlePlus.length && (
						<a
							href={googlePlus}
							target="_blank"
							className="social-item googlePlus"
							style={{ color: googlePlusColor }}
						>
							<span className="dashicons dashicons-googleplus" />
						</a>
					)}

				{linkedin &&
					!!linkedin.length && (
						<a
							href={linkedin}
							target="_blank"
							className="social-item linkedin"
							style={{ color: linkedinColor }}
						>
							<span className="sb-icon-linkedin" />
						</a>
					)}

				{email &&
					!!email.length && (
						<a
							href={email}
							target="_blank"
							className="social-item email"
							style={{ color: emailColor }}
						>
							<span className="dashicons dashicons-email" />
						</a>
					)}
			</div>
		);
	}
}
