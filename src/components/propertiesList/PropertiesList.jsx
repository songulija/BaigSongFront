import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from '../../redux/actions/propertiesActions'
import styles from "../homeComponents/Sections/Section3.module.scss";
import { ArrowButton } from "../homeComponents/buttons/Buttons";
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
    // <section classNameName={styles.section_3}>
    //   <div classNameName={styles.section_3_title}>
    //     <h1>Properties</h1>
    //     <ArrowButton text="See More" path="buy" />
    //   </div>

    //   {/* CARDS / CAROUSEL */}
    //   {properties ?
    //     <div classNameName={styles.cards}>
    //       <Row>
    //         {properties.map((property, i) => (
    //           <Col lg={4} md={6}>
    //             {/* <Container> */}
    //               <Card record={property} />
    //             {/* </Container> */}
    //           </Col>
    //         ))}
    //       </Row>
    //     </div>

    //     :
    //     <div></div>
    //   }
    // </section>
  );
};

export default PropertiesList;
