import { Container } from "react-bootstrap"
const MailList = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">Save time, save money!</h1>
        <p className="lead font-weight-normal">Sign up and we'll send the best deals to you</p>
        {/* <a className="btn btn-outline-secondary" href="#">Your Email</a> */}
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
    // <Container>
    //   <h1 classNameName="mailTitle">Save time, save money!</h1>
    //   <span classNameName="mailDesc">Sign up and we'll send the best deals to you</span>
    //   <div classNameName="mailInputContainer">
    //     <input type="text" placeholder="Your Email" />
    //     <button>Subscribe</button>
    //   </div>
    // </Container>
  )
}

export default MailList