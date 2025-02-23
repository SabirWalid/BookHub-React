import React from "react";

function Footer() {
	return (
		<div>
			<section className="footer-bookhub">
				<div className="share">
					<a
						href="https://twitter.com/SabirWalidAbdurahman"
						target="_blank"
						rel="noreferrer"
						className="footer_for-bookhub"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/sabir-abdurahman/"
						target="_blank"
						rel="noreferrer"
						className="footer_for-bookhub"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href="https://github.com/SabirWalid"
						target="_blank"
						rel="noreferrer"
						className="footer_for-bookhub"
					>
						<i className="fab fa-github"></i>
					</a>
				</div>
				<div className="credit">
					Made with 💙 by<span> Sabir Walid</></span>
				</div>
			</section>
		</div>
	);
}

export { Footer };
