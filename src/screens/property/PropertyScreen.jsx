import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./property.css";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEuroSymbol, MdApartment, MdMeetingRoom } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { getPropertyById } from '../../redux/actions/propertiesActions'
import { createComment } from "../../redux/actions/propertiesActions";
import PopularPropertiesComponent from "../../popularProperties/PopularPropertiesComponent";
import { Button, Col, Row } from "react-bootstrap";
import { Image } from "antd";
import CommentCardComponent from "../../components/commentsComponents/CommentCardComponent";
import AddCommentComponent from "../../components/commentsComponents/AddCommentComponent";

const PropertyScreen = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const [addPanel, setAddPanel] = useState(false)
  const usersReducer = useSelector((state) => state.usersReducer);
  const propertiesReducer = useSelector((state) => state.propertiesReducer)
  const { currentUser } = usersReducer;
  const { property } = propertiesReducer;

  const showAddPanel = () => {
    setAddPanel(true)
  }
  const unshowAddPanel = () => {
    setAddPanel(false)
  }

  const addNewRecord = (postObj) => {
    dispatch(createComment(postObj))
    setAddPanel(false)
  }

  useEffect(() => {
    dispatch(getPropertyById(params.id))
  }, [currentUser, params])

  return (
    <>
      <section className="py-3">
        <div className="container px-4 px-lg-5 my-2">
          {property ?
            <Row>
              <Col lg={6} md={12}>
                {property.photo ?
                  <Image src={`data:image/jpeg;base64,${property.photo}`} alt={property.title} />
                  :
                  <Image src={'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg'} alt={property.title} />
                }
              </Col>
              <Col lg={6} md={12}>
                <div className="small mb-1">{property.city ? property.city.title : ''}</div>
                <h1 className="display-5 fw-bolder">{property.title}</h1>
                <div className="fs-5 mb-5">
                  <span>Price: {property.price} <MdOutlineEuroSymbol size={20} /></span>
                  {/* <span>$40.00</span> */}
                </div>
                <p className="lead">{property.description}</p>
                <div className="mb-5">
                  <p><MdMeetingRoom size={20} /> Rooms: {property.roomNumber}</p>
                  <p><GrLocation size={20} /> Address: {property.city ? property.address + ', ' + property.city.title : ''}</p>
                  <p><BiBuildingHouse size={20} /> Rent Type: {property.rentType ? property.rentType.title : ''}</p>
                  <p><MdApartment size={20} /> PropertyType: {property.propertyType ? property.propertyType.title : ''}</p>
                  {/* <span>$40.00</span> */}
                  <button className="btn btn-outline-dark flex-shrink-0" type="button">
                    <i className="bi-cart-fill me-1"></i>
                    Like
                  </button>
                </div>
              </Col>
            </Row>
            : <Row></Row>
          }
        </div>
      </section>
      {/* Top Properties */}
      <PopularPropertiesComponent title={'Popular Properties'} />

      <h1 style={{ fontSize: '1.8rem' }}>Comments</h1>
      {property.comments ?
        <Row>
          {property.comments.map((comment, i) => (
            <Col key={i} lg={12}>
              <CommentCardComponent record={comment} />
            </Col>
          ))}
        </Row>
        :
        <Row></Row>
      }
      {currentUser ?
        <Button onClick={showAddPanel}>Add Comment</Button>
        :
        <></>}
      {addPanel !== false ?
        <AddCommentComponent visible={addPanel} onClose={unshowAddPanel}
          save={addNewRecord} propertyId={property.id} />
        : null}
    </>
  );
};

export default PropertyScreen;
