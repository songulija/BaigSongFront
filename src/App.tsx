import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
// import Home from "./screens/home/Home";
import Home from "./screens/Home";
import Hotel from "./screens/hotel/Hotel";
import List from "./screens/list/List";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UsersScreen from './screens/admin/UsersScreen';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import Navbar from './components/homeComponents/navbar/Navbar';
// import styles from './components/homeComponents/Sections/Section1.module.scss'
import CountriesScreen from './screens/admin/CountriesScreen';
import CitiesScreen from './screens/admin/CitiesScreen';
import PropertyTypesScreen from './screens/admin/PropertyTypesScreen';
import CommentsScreen from './screens/admin/CommentsScreen';
import "./App.scss";
import PropertiesScreen from './screens/admin/PropertiesScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';

function App() {
  return (//have to wrap entire App in Router in order to use it
    <div className='App'>
      <Router>
          <Container>
            <Header />
            {/* <section className="header-section">
            <div className={styles.Navbar}>
              <Navbar BurgerColour={"black"} />
            </div>
          </section> */}
            <Routes>
              {/* Simple user. User Properties, Property By Id, Favourite Properties, Profile */}
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen history='' />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUsScreen />} />
              <Route path="/contact" element={<ContactUsScreen />} />
              <Route path="/hotels" element={<List />} />
              <Route path="/hotels/:id" element={<Hotel />} />


              {/* Logged user Favourite Properties, Create Property, Check Your Properties, (liked properties), Comments, ProfileScreen,  */}

              {/* Admin user   [UserTypes, Users, Countries, Cities, PropertyTypes, RentTypes, Properties, Comments, FavouriteProperties, Journals ] */}
              <Route path="/users/admin" element={<UsersScreen />} />
              <Route path="/countries/admin" element={<CountriesScreen />} />
              <Route path="/cities/admin" element={<CitiesScreen />} />
              <Route path="/property-types/admin" element={<PropertyTypesScreen />} />
              <Route path="/comments/admin" element={<CommentsScreen />} />
              <Route path="/properties/admin" element={<PropertiesScreen />} />
            </Routes>
             {/* <Footer /> */}
          </Container>
      </Router>
    </div>
  );
}

export default App;
