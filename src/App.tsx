import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Home from "./screens/home/Home";
import Hotel from "./screens/hotel/Hotel";
import List from "./screens/list/List";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UsersScreen from './screens/admin/UsersScreen';
import Header from './components/Header';
import CountriesScreen from './screens/admin/CountriesScreen';
import CitiesScreen from './screens/admin/CitiesScreen';
import PropertyTypesScreen from './screens/admin/PropertyTypesScreen';

function App() {
  return (//have to wrap entire App in Router in order to use it
    <Router>
      <main className='py-3'>
        <Container>
          <Header />
          <Routes>
            {/* Simple user */}
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen history='' />} />
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            {/* Logged user Favourite Properties, Create Property, Check Your Properties, (liked properties), Comments, ProfileScreen,  */}

            {/* Admin user   [UserTypes, Users, Countries, Cities, PropertyTypes, RentTypes, Properties, Comments, FavouriteProperties, Journals ] */}
            <Route path="/users/admin" element={<UsersScreen />} />
            <Route path="/countries/admin" element={<CountriesScreen />} />
            <Route path="/cities/admin" element={<CitiesScreen />} />
            <Route path="/property-types/admin" element={<PropertyTypesScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
