import PropertiesList from "../components/propertiesList/PropertiesList";
import PropertiesSection1 from "../components/homeComponents/Sections/PropertiesSection1";
// import Footer from "../components/footer/Footer";

const PropertiesScreen = () => {
  return (
    <main>
      <PropertiesSection1 />
      <PropertiesList />
      {/* <Footer /> */}
    </main>
  );
};

export default PropertiesScreen;