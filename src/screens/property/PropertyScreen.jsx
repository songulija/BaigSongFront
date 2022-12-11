import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./property.css";
// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
// import MailList from "../../components/mailList/MailList";
// import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEuroSymbol, MdApartment, MdMeetingRoom } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { getPropertyById } from '../../redux/actions/propertiesActions'
import PopularPropertiesComponent from "../../popularProperties/PopularPropertiesComponent";
import { Col, Row } from "react-bootstrap";
import { Image } from "antd";

const PropertyScreen = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const usersReducer = useSelector((state) => state.usersReducer);
  const userInfoReducer = useSelector((state) => state.userInfoReducer);
  const propertiesReducer = useSelector((state) => state.propertiesReducer)
  const { currentUser } = usersReducer;
  const { role } = userInfoReducer;
  const { property } = propertiesReducer;

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);



  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  useEffect(() => {
    dispatch(getPropertyById(params.id))
  }, [currentUser, params])

  return (
    <div>
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

      <h1>Comments</h1>
    </div>
  );
};

export default PropertyScreen;
