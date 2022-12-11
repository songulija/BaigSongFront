import Section1 from "../components/homeComponents/Sections/Section1";
import Section2 from "../components/homeComponents/Sections/Section2";
import PopularPropertiesComponent from "../popularProperties/PopularPropertiesComponent";
import Section4 from "../components/homeComponents/Sections/Section4";
import Section5 from "../components/homeComponents/Sections/Section5";
// import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <PopularPropertiesComponent title={'Popular Properties'} />
      <Section4 />
      <Section5 />
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
