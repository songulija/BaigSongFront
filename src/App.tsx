import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
// import Home from "./screens/home/Home";
import Home from "./screens/Home";
// import List from "./screens/list/List";
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
import AdminPropertiesScreen from './screens/admin/AdminPropertiesScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import PropertiesScreen from './screens/PropertiesScreen';
import PropertyScreen from './screens/property/PropertyScreen';
import UserPropertiesScreen from './screens/UserPropertiesScreen';
import ProfileScreen from './screens/ProfileScreen';

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
              <Route path="/properties" element={<PropertiesScreen />} />
              <Route path="/properties/:pageNumber" element={<PropertiesScreen />} />
              <Route path="/property/:id" element={<PropertyScreen/>}/>
              <Route path="/user/properties" element={<UserPropertiesScreen/>}/>
              <Route path="/user/properties/:pageNumber" element={<UserPropertiesScreen/>}/>
              <Route path="/profile" element={<ProfileScreen/>}/>

              {/* Logged user Favourite Properties, Create Property, Check Your Properties, (liked properties), Comments, ProfileScreen,  */}

              {/* Admin user   [UserTypes, Users, Countries, Cities, PropertyTypes, RentTypes, Properties, Comments, FavouriteProperties, Journals ] */}
              <Route path="/users/admin" element={<UsersScreen />} />
              <Route path="/countries/admin" element={<CountriesScreen />} />
              <Route path="/cities/admin" element={<CitiesScreen />} />
              <Route path="/property-types/admin" element={<PropertyTypesScreen />} />
              <Route path="/comments/admin" element={<CommentsScreen />} />
              <Route path="/properties/admin" element={<AdminPropertiesScreen />} />
            </Routes>
             {/* <Footer /> */}
          </Container>
      </Router>
    </div>
  );
}

export default App;
