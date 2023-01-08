import styles from "./Card.module.scss";
import { useState, useEffect } from "react";
//react icons
import { GrLocation } from "react-icons/gr";
import { MdMeetingRoom } from "react-icons/md";
import { MdOutlineEuroSymbol } from "react-icons/md";
// import building3 from "../../../assets/building3.jpg";
import { Link } from "react-router-dom";
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Image, Popconfirm } from "antd";
import { updateProperty, deleteProperty } from '../../redux/actions/propertiesActions'
import { useDispatch, useSelector } from 'react-redux'
import UpdatePropertyComponent from "../propertiesComponents/UpdatePropertyComponent";


const MyPropertyCard = (props) => {
  const dispatch = useDispatch()

  const [updatePanel, setUpdatePanel] = useState({ visibility: false, record: null })
  const [property, setProperty] = useState({
    "id": 2,
    "propertyType": {
      "id": 2,
      "properties": [],
      "title": "Apartments",
      "date": "2022-12-09T22:13:10.2173885",
      "photo": "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
    },
    "rentType": {
      "id": 1,
      "properties": [],
      "title": "Long Term",
      "date": "2022-12-09T22:13:10.2177135"
    },
    "city": {
      "id": 1,
      "country": null,
      "properties": [],
      "title": "Vilnius",
      "date": "2022-12-09T22:13:10.2184327",
      "countryId": 1
    },
    "numberOfLikes": 3,
    "seenNumber": 0,
    "images": [],
    "userId": 1,
    "propertyTypeId": 2,
    "rentTypeId": 1,
    "cityId": 1,
    "address": "Gedimino g. 72",
    "title": "Vilnius G72",
    "description": "",
    "roomNumber": 2,
    "price": 369,
    "date": "2022-12-09T22:13:10.2197933"
  })

  const showUpdateModal = (record) => {
    setUpdatePanel(prevState => ({
      ...prevState,
      visibility: true,
      record: record
    }))
  }

  const unshowUpdateModal = () => {
    setUpdatePanel(prevState => ({
      ...prevState,
      visibility: false,
      record: null
    }))
  }

  const updateRecord = (postObj, reducerObj) => {
    dispatch(updateProperty(postObj, reducerObj))
    unshowUpdateModal()
  }

  const deleteRecord = (id) => {
    dispatch(deleteProperty(id))
  }

  useEffect(() => {
    if (props.record)
      setProperty(props.record)
  }, [props])

  return (
    <>
      <Card>
        <Row>
          <Col>
            <Card.Img
              variant="top"
              alt={property.title}
              src={property.photo ? `data:image/jpeg;base64,${property.photo}`
                :
                'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg'}
              data-holder-rendered="true"
              height={350}
              width={'100%'}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{property.title}</Card.Title>
              <Card.Text>
                {property.description.substring(0, 50) + '...'}
              </Card.Text>
              <Card.Text>
                <GrLocation size={20} /> {property.address}
              </Card.Text>
              <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                <Card.Text>
                  <MdMeetingRoom size={20} /> Rooms: {property.roomNumber}
                </Card.Text>
                <Card.Text>
                  Price: {property.price} <MdOutlineEuroSymbol size={20} />
                </Card.Text>
              </div>
              <Button variant="dark" href={`/property/${property.id}`}>Detailed?</Button>
              <Button onClick={(e) => showUpdateModal(property)}>Update</Button>
              <Popconfirm title="Delete?" onConfirm={() => deleteRecord(property.id)}>
                <Button type="primary" danger>Delete</Button>
              </Popconfirm>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      {updatePanel.visibility !== false ?
        <UpdatePropertyComponent visible={updatePanel.visibility} save={updateRecord}
          onClose={unshowUpdateModal} record={updatePanel.record} />
        : null}
    </>
  );
};

export default MyPropertyCard;
