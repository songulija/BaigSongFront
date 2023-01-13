import styles from "./Section1.module.scss";

import { Link } from "react-router-dom";
import { useState } from "react";
import building1 from "../../../assets/building1.jpg";

const Section1 = () => {
  const [price, setPrice] = useState("<100k");
  const [location, setLocation] = useState("");

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
            {/* <div className={styles.location_container}>
              <span>Location</span>
              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className={styles.price_container}>
              <span>Price Range</span>
              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-500k">200k-500k</option>
                <option value=">500k">{`>500k`}</option>
              </select>
            </div>
            
            <button className={styles.btn_search}>
              <Link to="search">Search</Link>
            </button> */}
          </div>
        </div>

        {/* Building Image */}
        <div className={styles.slogan_image}>
          <img src='https://cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1' alt="building" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
