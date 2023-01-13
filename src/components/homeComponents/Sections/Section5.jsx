import styles from "./Section5.module.scss";
import { ArrowButton } from "../buttons/Buttons";
import building4 from "../../../assets/building4.jpg";
import building5 from "../../../assets/building5.jpg";
const Section5 = () => {
  return (
    <section className={styles.section_5}>
      <div className={styles.action}>
        <h1>Your Best Partner To Rent New Properties</h1>
        {/* <ArrowButton text="Get Started" path="search" /> */}
      </div>
      <div className={styles.image_container_1}>
        <img src='https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1' alt="building" />
      </div>
      <div className={styles.image_container_2}>
        <img src={'https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1'} alt="building" />
      </div>
    </section>
  );
};

export default Section5;
