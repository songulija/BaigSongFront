import { Container } from "react-bootstrap";
// import Footer from "../../components/Footer";
import styles from "../components/homeComponents/Sections/Section5.module.scss";
import building4 from "../assets/building4.jpg";
import building5 from "../assets/building5.jpg";
import {
    sectionTitleStyle, contactsInfoTitle, contactsInfoText, titleLineStyle
} from '../styles/homeScreenStyles'

const ContactUsScreen = () => {
    return (
        <div>
            <section className={styles.section_5_contact}>
                <div className={styles.action}>
                    <h1>Your Best Partner To Rent New Properties</h1>
                    {/* <ArrowButton text="Get Started" path="search" /> */}
                </div>
                <div className={styles.image_container_2}>
                    <img src={building5} alt="building" />
                </div>
                <div className={styles.image_container_1}>
                    <img src={building4} alt="building" />
                </div>
            </section>

            <section className='container-fluid' style={{ width: '80%', paddingTop: '20px' }} name='kontaktai'>
                <div className='row pb-5 pt-5'>
                    <h2 style={{ ...sectionTitleStyle }}>Contact Us</h2>
                    <hr style={{ ...titleLineStyle }}></hr>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-2 '>
                                    <i className="fas fa-map-pin contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>ADDRESS:</h3>
                                    <p style={{ ...contactsInfoText }}>Justiniškių g.58A, Vilnius</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-3 col-lg-2'>
                                    <i className="fas fa-phone contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-9 col-lg-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>PHONE NUMBERS:</h3>
                                    <p style={{ ...contactsInfoText }}>+370 7 123 1234</p>
                                    <p style={{ ...contactsInfoText }}>+370 8 321 1844</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-2'>
                                    <i className="fas fa-info contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>INFORMATION:</h3>
                                    <p style={{ ...contactsInfoText }}>COMPANY CODE: 123456789</p>
                                    <p style={{ ...contactsInfoText }}>PVM CODE: LT123456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-3 col-lg-2'>
                                    <i className="fas fa-envelope-open-text contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-9 col-lg-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>E-mail:</h3>
                                    <p style={{ ...contactsInfoText }}>info@realestate.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='container-fluid' style={{ width: '95%', paddingTop: '20px', paddingBottom: '40px' }}>
                <div className='container'>
                    <iframe title="Rivita lokacija" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.615971750185!2d25.2194902!3d54.71637929999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd917db9acba3b%3A0x88fd369a883defa8!2sJustini%C5%A1ki%C5%B3%20g.%2058%2C%2005244%20Vilnius!5e0!3m2!1slt!2slt!4v1670767429012!5m2!1slt!2slt" width="100%" height="400px" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>
        </div>

    );
};

export default ContactUsScreen;
