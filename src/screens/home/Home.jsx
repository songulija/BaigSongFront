import { Container } from "react-bootstrap";
import Featured from "../../components/featured/Featured";
import HouseProperties from "../../components/houseProperties/HouseProperties";
import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
import Header from '../../components/Header'
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import ApartmentProperties from "../../components/apartmentProperties/ApartmentProperties";

const Home = () => {
  return (
    <Container>
      {/* <Navbar /> */}
      <Header />
      <Container>
        {/* <Featured /> */}
        <PropertyList />
        <ApartmentProperties />
        {/* <HouseProperties /> */}
        <MailList />
        <Footer />
      </Container>
    </Container>
  );
};

export default Home;
