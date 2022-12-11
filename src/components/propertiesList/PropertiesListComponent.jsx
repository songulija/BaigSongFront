import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from '../../redux/actions/propertiesActions'
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap'
import PropertyCard from "../cardComponent/PropertyCard";

const PropertiesList = () => {
  const dispatch = useDispatch()
  const propertiesReducer = useSelector((state) => state.propertiesReducer)
  const { properties } = propertiesReducer;
  useEffect(() => {
    dispatch(getProperties())
  }, [dispatch])
  return (
    <div className="album py-5">
      <div className="container">
        {properties ?
          <Row>
            {properties.map((property, i) => (
              <Col xl={3} lg={4} md={6} style={{ marginBottom: 20 }}>
                <PropertyCard record={property} />
              </Col>
            ))}
          </Row>
          : <Row></Row>}
      </div>
    </div>
  );
};

export default PropertiesList;
