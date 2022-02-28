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
            <h4>Name</h4>
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
              <h4>Email</h4>
              <input className="firstname" name="firstname" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 second">
              <h4>Phone</h4>
              <input className="lastname" name="lastname" />
            </div>
          </div>
          <div className="row company">
            <div className="col-xl-12">
              <h4>Company</h4>
              <input className="firstname" name="firstname" />
            </div>
          </div>
          <div className="row title">
            <div className="col-xl-12">
              <h4>Title</h4>
              <input className="firstname" name="firstname" />
            </div>
          </div>

          <div className="row products">
            <div className="col-xl-12">
              <h4>Product Interest</h4>
              <div>
                <input type="radio" id="html" value="HTML" />
                <label for="html">Roman Shade Fabrics</label>
              </div>
              <div>
                <input type="radio" id="html1" value="HTML" />
                <label for="html1"> Printed Wallpaper</label>
              </div>
              <div>
                <input type="radio" id="html1" value="HTML" />
                <label for="html1"> Blackout Decorative Fabrics</label>
              </div>
              <div>
                <input type="radio" id="html1" value="HTML" />
                <label for="html1"> Drapery Linen Fabrics</label>
              </div>
            </div>
          </div>

          <div className="row file-upload">
            <h4>File Upload</h4>

            <input type="file" id="myfile" name="myfile" multiple />
          </div>

          <div className="row additional-information">
            <h4>Additional Information</h4>

            <textarea name="additionalInformation" />
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
