// src/pages/ContactUsPage.jsx
import ContactUs from '../components/home/ContactUs';
import SEO from '../components/SEO'; // ✅ import SEO

const ContactUsPage = () => {
	return (
		<>
			<SEO
				title="Contact RugeroMed"
				description="Get in touch with RugeroMed for inquiries, support, or partnership opportunities. Visit us in Kigali, Rwanda, call us, or send us a message online."
				keywords="Contact RugeroMed, RugeroMed Rwanda, medical supplies Kigali, healthcare Rwanda, customer support"
			/>

			<div>
				<ContactUs />
			</div>
		</>
	);
};

export default ContactUsPage;
