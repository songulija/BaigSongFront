import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Section1.module.scss";
import building6 from "../../../assets/building6.jpg";
import { getCities } from "../../../redux/actions/citiesActions";
import { getPropertyTypes } from "../../../redux/actions/propertyTypesActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const PropertiesSection1 = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const citiesListReducer = useSelector((state) => state.citiesListReducer)
  const { cities } = citiesListReducer;
  const propertyTypesReducer = useSelector((state) => state.propertyTypesReducer)
  const { propertyTypes } = propertyTypesReducer;

  const [propertyTypeId, setPropertyTypeId] = useState(2)
  const [cityId, setCityId] = useState(1)

  const searchProperties = () => {
    if (cityId > 0 && propertyTypeId > 0)
      navigate(`/properties?page=1&itemsPerPage=10&cityId=${cityId}&propertyTypeId=${propertyTypeId}`)
    else if (cityId > 0 && propertyTypeId <= 0)
      navigate(`/properties?page=1&itemsPerPage=10&cityId=${cityId}`)
    else if (cityId <= 0 && propertyTypeId > 0)
      navigate(`/properties?page=1&itemsPerPage=10&propertyTypeId=${propertyTypeId}`)
    else
      navigate(`/properties?page=1&itemsPerPage=10&`)
  }
  useEffect(() => {
    dispatch(getCities())
    dispatch(getPropertyTypes())
  }, [dispatch, navigate])
  return (
    <section className={styles.section_1}>
      {/* SECTION 1 CONTENT */}
      <div className={styles.section_1_content}>
        {/* SLOGAN */}
        <div className={styles.slogan}>
          <h1>Ease Way to Find Your Dream Property</h1>
          <p>
            Search and find your dream property at affordable prices, but with the
            best quality. Only available in Real Estate
          </p>
          <div className={styles.search_container}>
            {/* LOCATION */}
            <div className={styles.location_container}>
              <span>City</span>
              <select
                id="price"
                name="City"
                placeholder="Select City"
                defaultValue={cityId}
                value={cityId}
                onChange={(e) => setCityId(e.target.value)}
              >
                {cities.map((element) => {
                  return (<option key={element.id} value={element.id}>{element.title}</option>)
                })}
              </select>
            </div>

            <div className={styles.price_container}>
              <span>Property Type</span>
              <select
                id="propertyType"
                name="Property Type"
                placeholder="Select Property Type"
                defaultValue={propertyTypeId}
                value={propertyTypeId}
                onChange={(e) => setPropertyTypeId(e.target.value)}
              >
                {propertyTypes.map((element) => {
                  return (<option key={element.id} value={element.id}>{element.title}</option>)
                })}
              </select>
            </div>

            <Button onClick={searchProperties} variant="outline-dark">Search</Button>
          </div>
        </div>

        {/* Building Image */}
        <div className={styles.slogan_image}>
          <img src={'https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1'} alt="building" />
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection1;
