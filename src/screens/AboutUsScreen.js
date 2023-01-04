import { Container } from "react-bootstrap";
// import Footer from "../../components/Footer";
// import Header from "../../components/header/Header";
// import Header from '../../components/header/Header'
// import MailList from "../../components/MailList";
// import PropertyList from "../../components/PropertyList";
// import "./home.css";
// import ApartmentProperties from "../../components/ApartmentProperties";

const AboutUsScreen = () => {
    return (
        <div>
            <div>
                <div class="container py-5">
                    <div class="row h-100 align-items-center py-5">
                        <div class="col-lg-6">
                            <h1 class="display-4">About us page</h1>
                            <p class="lead text-muted mb-0">Real estate rent system for all of us.</p>
                            {/* <p class="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" class="text-muted">
                                <u>Bootstrapious</u></a>
                            </p> */}
                        </div>
                        <div class="col-lg-6 d-none d-lg-block">
                            <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white py-5">
                <div class="container py-5">
                    <div class="row align-items-center mb-5">
                        <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                            <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                            <img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-5 px-5 mx-auto">
                            <img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0" />
                        </div>
                        <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                            <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-light py-5">
                <div class="container py-5">
                    <div class="row mb-4">
                        <div class="col-lg-5">
                            <h2 class="display-4 font-weight-light">Our team</h2>
                            <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div class="row text-center">

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />

                                <h5 class="mb-0">Rasa Blachovic</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Lukas Songulija</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Eimantas Jonaitis</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4">
                                <img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Jonas Jontaitis</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <footer class="bg-light pb-5">
                <div class="container text-center">
                    <p class="font-italic text-muted mb-0">&copy; Copyrights Ye.com All rights reserved.</p>
                </div>
            </footer>
        </div>

    );
};

export default AboutUsScreen;
