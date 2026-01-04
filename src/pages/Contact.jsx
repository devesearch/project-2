import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import heroData from "../utils/heroData";

const Contact = () => {
    return(
        <>
         <Hero data={heroData.contact} />

         <ContactSection />

         <section className="map-section">
            <iframe
                title="Delhi Map"
                src="https://www.google.com/maps?q=Delhi,India&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>

        </>
    );
}

export default Contact;