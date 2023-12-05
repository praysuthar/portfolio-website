import React from "react";
import "./contact.css";
const Contact = () => {
	return (
		<section className="contact">
			<h1 className="contact-title">Contact Me</h1>
			<div className="container">
				<div className="row">
					<div className="contact-left">
						<p>
							<a href="mailto:praysuthar1212@gmail.com">
								praysuthar1212@gmail.com
							</a>
						</p>
						<p>+1(431)-557-6500</p>
					</div>
				</div>
				<div className="contact-right">
					<form action="https://fabform.io/f/jDb3c1O" method="post">
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							required
						/>
						<input type="text" name="Subject" placeholder="Subject" required />
						<textarea
							name="Message"
							rows="6"
							placeholder="Your Message"
						></textarea>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
