import React from "react";
import "./contact.css";
const Contact = () => {
	return (
		<section className="contact">
			<h1 className="contact-title">
				Contact Me <h4>(Currently Working)</h4>
			</h1>
			<div className="container">
				<div className="row">
					<div className="contact-left">
						<p>praysuthar1212@gmail.com</p>
						<p>+1(121)-121-1212</p>
					</div>
				</div>
				<div className="contact-right">
					<form>
						<input type="text" name="Name" placeholder="Your Name" required />
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							required
						/>
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
