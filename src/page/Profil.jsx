import Header from "../component/Header";
import Footer from "../component/Footer";
import './Profil.scss';

function Profil () {
    return (
    <>
        <Header />
        <section>
            <h3>Mon Profil</h3>
            <h4>Hélène QUINTARD</h4>
            <div className="experience">
                <h4>Expérience professionnelle</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio suscipit exercitationem natus odio neque rerum. Ab eius eligendi sit. A voluptates quos repellendus nemo quia ad. Ratione, facere a.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio suscipit exercitationem natus odio neque rerum. Ab eius eligendi sit. A voluptates quos repellendus nemo quia ad. Ratione, facere a.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio suscipit exercitationem natus odio neque rerum. Ab eius eligendi sit. A voluptates quos repellendus nemo quia ad. Ratione, facere a.</p>
            </div>

            <div className="diplome">
            <h4>Diplomes Obtenus</h4>
            <p>20XX: Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

            <p>20XX: Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

            <p>20XX: Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </div>
        </section>
        <Footer />
    </>
    )
}

export default Profil;