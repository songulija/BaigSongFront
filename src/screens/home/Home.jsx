import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
// import Header from "../../components/header/Header";
import Header from '../../components/header/Header'
import MailList from "../../components/MailList";
import PropertyList from "../../components/PropertyList";
import "./home.css";
import ApartmentProperties from "../../components/ApartmentProperties";

const Home = () => {
  return (
      <Container>
        {/* <Featured /> */}
        <PropertyList />
        <ApartmentProperties />
        <MailList />
        <Footer />
      </Container>
  );
};

export default Home;
