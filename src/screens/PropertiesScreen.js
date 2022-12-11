import PropertiesListComponent from "../components/propertiesList/PropertiesListComponent";
import PropertiesSection1 from "../components/homeComponents/Sections/PropertiesSection1";
// import Footer from "../components/footer/Footer";

const PropertiesScreen = () => {
  return (
    <main>
      <PropertiesSection1 />
      <PropertiesListComponent />
      {/* <Footer /> */}
    </main>
  );
};

export default PropertiesScreen;