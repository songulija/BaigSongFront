import styles from "./Section4.module.scss";
import building3 from "../../../assets/building3.jpg";

const Section4 = () => {
  return (
    <section className={styles.section_4}>
      {/* SECTION TITLE */}
      <div className={styles.section_4_title}>
        <h1>Help People To Rent Best Apartments, Homes, Hotel Rooms For More Than 2 Months</h1>
      </div>

      {/* CONTENT */}
      <div className={styles.section_4_content}>
        {/* IMAGE CONTAINER */}
        <div className={styles.image_container}>
          <img src={building3} alt="building" />
        </div>
        {/* INFO */}
        <div className={styles.info}>
          <p>
            Search and find your dream property for rent at affordable prices, but with the
            best quality. Only available in Real Estate!
          </p>

          <div className={styles.rows}>
            {/* ROW1 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>124</h2>
                <h3>Rented Apartments</h3>
              </div>
              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>176</h2>
                <h3>Rented Houses </h3>
              </div>
            </div>

            {/* ROW2 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>45</h2>
                <h3>Rented Other</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>345</h2>
                <h3>Happy Client</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
