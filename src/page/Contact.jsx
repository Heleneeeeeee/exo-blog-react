import Header from "../component/Header"
import Footer from "../component/Footer"
import './Contact.scss';

function Contact () {
    return (
    <div className="contact">
        <Header />
            <p className="tel">Téléphone:</p>
            <p className="tel"> 06 00 00 00 00</p>
        <Footer />
    </div>
    );
}

export default Contact;