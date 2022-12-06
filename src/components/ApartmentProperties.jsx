import "../styles/apartmentProperties.css";
import React, { useState, useEffect } from 'react'
import { getPropertiesByPropertyTypeId } from '../redux/actions/propertiesActions'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
const ApartmentProperties = () => {
  const dispatch = useDispatch()
  const propertiesReducer = useSelector(state => state.propertiesReducer)
  const { loading, error, properties } = propertiesReducer

  useEffect(() => {
    dispatch(getPropertiesByPropertyTypeId(2))
  }, [dispatch])
  return (
    <Container>
      <h2 style={{ padding: 10 }}>Apartments guests love</h2>
      {properties.length > 0 &&
        <Row>
          {properties.map((property, i) => (
            <Col md={4}>
              <Container>
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{property.title ? property.title : ''}</span>
                <span className="fpCity">{property.city ? property.city.title : ''}</span>
                <span className="fpPrice">{property.rentTypeId === 1 && property.price ? property.price + ' per/month' : property.rentTypeId === 1 && property.price ? property.price + ' per/month' : ''}</span>
                <div className="fpRating">
                  <button>8.9</button>
                  <span>Excellent</span>
                </div>
              </Container>
            </Col>
          ))}
          {/* <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div> */}
        </Row>
      }

    </Container>
  );
};

export default ApartmentProperties;
