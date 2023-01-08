import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from '../../redux/actions/propertiesActions'
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap'
import { Pagination } from 'antd'
import PropertyCard from "../cardComponent/PropertyCard";
import { useNavigate, useParams } from 'react-router-dom'

const PropertiesList = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()
  const propertiesReducer = useSelector((state) => state.propertiesReducer)
  const { properties, pagination } = propertiesReducer;
  const pageNumber = params.pageNumber ? params.pageNumber : 1;
  const onShowSizeChange = (data) => {
    console.log(data)
    navigate(`/properties/${data}`)
  };
  useEffect(() => {
    dispatch(getProperties(10, pageNumber))
  }, [dispatch, navigate, pageNumber])
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
        {pagination ?
          <Pagination
            onChange={onShowSizeChange}
            pageSize={10}
            current={pagination.currentPage}
            total={pagination.totalCount}
          />
          :
          <div></div>}
      </div>
    </div>
  );
};

export default PropertiesList;
