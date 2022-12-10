import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopLikedProperties } from '../../../redux/actions/propertiesActions'
import styles from "./Section3.module.scss";
import { ArrowButton } from "../buttons/Buttons";
import Carousel from "../Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import Card from "../Card/Card";

const Section3 = () => {
  const dispatch = useDispatch()
  const propertiesReducer = useSelector((state) => state.propertiesReducer)
  const { top_liked_properties } = propertiesReducer;
  useEffect(() => {
    dispatch(getTopLikedProperties())
  }, [dispatch])
  return (
    <section className={styles.section_3}>
      <div className={styles.section_3_title}>
        <h1>Best Houses</h1>
        <ArrowButton text="See More" path="buy" />
      </div>

      {/* CARDS / CAROUSEL */}
      {top_liked_properties ?
        <div className={styles.cards}>
          <Carousel>
          {top_liked_properties.map((property, i) => (
            <SwiperSlide>
              <Card record={property}/>
            </SwiperSlide>
          ))}
          </Carousel>
        </div>
        :
        <div></div>
      }

    </section>
  );
};

export default Section3;
