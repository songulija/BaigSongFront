import styles from "./Card.module.scss";
import { useState, useEffect } from "react";
//react icons
import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import { Link } from "react-router-dom";
import { Image } from "antd";

const Card = (props) => {
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
    "description": "Certainty listening no no behaviour existence assurance situation is. Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles. Indeed on people do merits to. Court heard which up above hoped grave do. Answer living law things either sir bed length. Looked before we an on merely. These no death he at share alone. Yet outward the him compass hearted are tedious.",
    "roomNumber": 2,
    "price": 369,
    "date": "2022-12-09T22:13:10.2197933"

  })
  //CONVERT PRICE FUNC
  const convertPrice = (price) => {
    if (price >= 1000 && price < 999999) return `${price / 1000}k `;
    if (price >= 1000000) return `${price / 1000000}m `;
    return price;
  };

  useEffect(() => {
    if (props.record)
      setProperty(props.record)
  }, [props])

  return (
    <div className={styles.card_container}>
      {/* IMAGE */}
      <div className={styles.image_container}>
        <div className={styles.image_buy_btn}>
          <Link to="/">Rent</Link>
        </div>
        {property.photo ?
          <Image
            src={`data:image/jpeg;base64,${property.photo}`}
            variant="top"
            alt={property.title}
            data-holder-rendered="true"
            // height={100}
            // width={100}
          />
          :
          <Image
            src={'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg'}
            variant="top"
            alt={property.title}
            data-holder-rendered="true"
            // height={100}
            // width={100}
          />
        }
        {/* CITY */}
        <h3>{property.city.title}</h3>
        <h4>
          {/* <p className={styles.neighbourhood}>{property.}</p> */}
          <p className={styles.street}>{property.address}</p>
        </h4>
        {/* ROOMS ETC */}
        <div className={styles.info}>
          {/* ROW1 */}
          <div className={styles.row1}>
            {/* ROOMS */}
            <div className={styles.rooms}>
              <BsFillDoorOpenFill />
              <span>{`${property.roomNumber} Rooms`}</span>
            </div>
            {/* BEDROOMS */}
            <div className={styles.bedrooms}>
              <IoIosBed />
              <span>{`${property.rentType.title} Rent Type`}</span>
            </div>
          </div>
          {/* <div className={styles.row2}>
            <div className={styles.bathrooms}>
              <FaBath />
              <span>{`${info.bathrooms} Bathrooms`}</span>
            </div>
            <div className={styles.shortAndress}>
              <IoLocationSharp />
              <span>{`${info.shortAndress}`}</span>
            </div>
          </div> */}
        </div>

        <div className={styles.card_buy}>
          <div className={styles.prices}>
            <h2
              style={property.price ? {} : { display: "none" }}
            >{`${convertPrice(property.price)}$`}</h2>
            {/* <h2
              style={showInfo.rent ? {} : { display: "none" }}
            >{`${covnertRent(info.rent)}`}</h2> */}
          </div>
          {/* SEE MORE BUTTON */}
          <div className={styles.card_btn}>
            <Link to={`/property/${property.id}`}>See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
