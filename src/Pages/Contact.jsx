import ContactForm from "../Components/ContactForm";
import HeroMini from "../Components/HeroMini";

export default function Contact() {
    return <div className="contact">
        <HeroMini title={"CONTACT US"} />
        <ContactForm />
    </div>
}