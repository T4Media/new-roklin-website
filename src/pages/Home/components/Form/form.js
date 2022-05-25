import Footer from "../../../../components/footer/footer";
import Navbar from "../../../../components/navbar/navbar";
import "./form.scss";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <div className="form">
      <Navbar />

      <div className="form-header">
        <div className="container">
          <h1>Request for Quote</h1>
        </div>
      </div>

      <div className="form-fields">
        <div className="container">
          <p>
            <Link to="/">Home</Link> > Request or quote
          </p>
          <div className="row name">
            <h4>
              Name <span style={{ color: "red" }}>*</span>
            </h4>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <input className="firstname" name="firstname" />
              <label>First</label>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 second">
              <input className="lastname" name="lastname" /> <label>Last</label>
            </div>
          </div>
          <div className="row email-phone">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h4>
                Email <span style={{ color: "red" }}>*</span>{" "}
              </h4>
              <input className="firstname" name="firstname" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 second">
              <h4>
                Phone <span style={{ color: "red" }}>*</span>
              </h4>
              <input className="lastname" name="lastname" />
            </div>
          </div>
          <div className="row company">
            <div className="col-xl-12">
              <h4>
                Company <span style={{ color: "red" }}>*</span>
              </h4>
              <input className="firstname" name="firstname" />
            </div>
          </div>
          <div className="row title">
            <div className="col-xl-12">
              <h4>
                Delivery Address <span style={{ color: "red" }}>*</span>
              </h4>
              <input className="firstname" name="firstname" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-2">
              <h4>
                Select Day <span style={{ color: "red" }}>*</span>
              </h4>
              <select id="cars" name="cars" className="p-2">
                <option value="volvo">Monday</option>
                <option value="saab">Tuesday</option>
                <option value="fiat">Wednesday</option>
                <option value="audi">Thursday</option>
                <option value="audi">Friday</option>
                <option value="audi">Saturday</option>
              </select>
            </div>

            <div className="col">
              <h4>
                Select Time <span style={{ color: "red" }}>*</span>
              </h4>
              <select id="cars" name="cars" className="p-2">
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>
          </div>

          <div className="row products">
            <div className="col-xl-12">
              <h4>Product Interest</h4>
              <div>
                <input
                  type="radio"
                  id="html"
                  name="action"
                  value="100% Blackout Fabric"
                />
                <label for="html">100% Blackout Fabric</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="action"
                  id="html1"
                  value="Curtain Fabric"
                />
                <label for="html1"> Curtain Fabric</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="action"
                  id="html2"
                  value="Roman Shade Fabric"
                />
                <label for="html2"> Roman Shade Fabric</label>
              </div>
            </div>
          </div>

          <div className="button">
            <button>Submit</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Form;
