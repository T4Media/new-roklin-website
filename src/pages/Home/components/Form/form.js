import Footer from "../../../../components/footer/footer";
import Navbar from "../../../../components/navbar/navbar";
import "./form.scss";
import { Link } from "react-router-dom";
import Select from "react-select";
import React from "react";
import NavHeader from "../../../../components/nav-header/nav-header";

const Form = () => {
  const [selectedLength, setSelectedLength] = React.useState(null);
  const [selectedWidth, setSelectedWidth] = React.useState(null);
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [selectedTimings, setSelectedTimings] = React.useState(null);

  const options = [
    { label: "1 Meter", value: "1 Meter" },
    { label: "2 Meters", value: "2 Meters" },
    { label: "3 Meters", value: "3 Meters" },
    { label: "4 Meters", value: "4 Meters" },
    { label: "5 Meters", value: "5 Meters" },
    { label: "6 Meters", value: "6 Meters" },
    { label: "7 Meters", value: "7 Meters" },
    { label: "8 Meters", value: "8 Meters" },
    { label: "9 Meters", value: "9 Meters" },
    { label: "10 Meters", value: "10 Meters" },
    { label: "11 Meters", value: "11 Meters" },
    { label: "12 Meters", value: "12 Meters" },
    { label: "13 Meters", value: "13 Meters" },
    { label: "14 Meters", value: "14 Meters" },
    { label: "15 Meters", value: "15 Meters" },
    { label: "16 Meters", value: "16 Meters" },
    { label: "17 Meters", value: "17 Meters" },
    { label: "18 Meters", value: "18 Meters" },
    { label: "19 Meters", value: "19 Meters" },
    { label: "20 Meters", value: "20 Meters" },
    { label: "21 Meters", value: "21 Meters" },
    { label: "22 Meters", value: "22 Meters" },
    { label: "23 Meters", value: "23 Meters" },
    { label: "24 Meters", value: "24 Meters" },
    { label: "25 Meters", value: "25 Meters" },
    { label: "26 Meters", value: "26 Meters" },
    { label: "27 Meters", value: "27 Meters" },
    { label: "28 Meters", value: "28 Meters" },
    { label: "29 Meters", value: "29 Meters" },
    { label: "30 Meters", value: "30 Meters" },
    { label: "31 Meters", value: "31 Meters" },
    { label: "32 Meters", value: "32 Meters" },
    { label: "33 Meters", value: "33 Meters" },
    { label: "34 Meters", value: "34 Meters" },
    { label: "35 Meters", value: "35 Meters" },
    { label: "36 Meters", value: "36 Meters" },
    { label: "37 Meters", value: "37 Meters" },
    { label: "38 Meters", value: "38 Meters" },
    { label: "39 Meters", value: "39 Meters" },
    { label: "40 Meters", value: "40 Meters" },
    { label: "41 Meters", value: "41 Meters" },
    { label: "42 Meters", value: "42 Meters" },
    { label: "43 Meters", value: "43 Meters" },
    { label: "44 Meters", value: "44 Meters" },
    { label: "45 Meters", value: "45 Meters" },
    { label: "46 Meters", value: "46 Meters" },
    { label: "47 Meters", value: "47 Meters" },
    { label: "48 Meters", value: "48 Meters" },
    { label: "49 Meters", value: "49 Meters" },
    { label: "50 Meters", value: "50 Meters" },
    { label: "51 Meters", value: "51 Meters" },
    { label: "52 Meters", value: "52 Meters" },
    { label: "53 Meters", value: "53 Meters" },
    { label: "54 Meters", value: "54 Meters" },
    { label: "55 Meters", value: "55 Meters" },
    { label: "56 Meters", value: "56 Meters" },
    { label: "57 Meters", value: "57 Meters" },
    { label: "58 Meters", value: "58 Meters" },
    { label: "59 Meters", value: "59 Meters" },
    { label: "60 Meters", value: "60 Meters" },
    { label: "61 Meters", value: "61 Meters" },
    { label: "62 Meters", value: "62 Meters" },
    { label: "63 Meters", value: "63 Meters" },
    { label: "64 Meters", value: "64 Meters" },
    { label: "65 Meters", value: "65 Meters" },
    { label: "66 Meters", value: "66 Meters" },
    { label: "67 Meters", value: "67 Meters" },
    { label: "68 Meters", value: "68 Meters" },
    { label: "69 Meters", value: "69 Meters" },
    { label: "70 Meters", value: "70 Meters" },
    { label: "71 Meters", value: "71 Meters" },
    { label: "72 Meters", value: "72 Meters" },
    { label: "73 Meters", value: "73 Meters" },
    { label: "74 Meters", value: "74 Meters" },
    { label: "75 Meters", value: "75 Meters" },
    { label: "76 Meters", value: "76 Meters" },
    { label: "77 Meters", value: "77 Meters" },
    { label: "78 Meters", value: "78 Meters" },
    { label: "79 Meters", value: "79 Meters" },
    { label: "80 Meters", value: "80 Meters" },
    { label: "81 Meters", value: "81 Meters" },
    { label: "82 Meters", value: "82 Meters" },
    { label: "83 Meters", value: "83 Meters" },
    { label: "84 Meters", value: "84 Meters" },
    { label: "85 Meters", value: "85 Meters" },
    { label: "86 Meters", value: "86 Meters" },
    { label: "87 Meters", value: "87 Meters" },
    { label: "88 Meters", value: "88 Meters" },
    { label: "89 Meters", value: "89 Meters" },
    { label: "90 Meters", value: "90 Meters" },
    { label: "91 Meters", value: "91 Meters" },
    { label: "92 Meters", value: "92 Meters" },
    { label: "93 Meters", value: "93 Meters" },
    { label: "94 Meters", value: "94 Meters" },
    { label: "95 Meters", value: "95 Meters" },
    { label: "96 Meters", value: "96 Meters" },
    { label: "97 Meters", value: "97 Meters" },
    { label: "98 Meters", value: "98 Meters" },
    { label: "99 Meters", value: "99 Meters" },
    { label: "100 Meters", value: "100 Meters" },
  ];

  const days = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
  ];

  const timings = [
    { label: "9:00 AM", value: "9:00 AM" },
    { label: "10:00 AM", value: "10:00 AM" },
    { label: "11:00 AM", value: "11:00 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "01:00 PM", value: "01:00 PM" },
    { label: "02:00 PM", value: "02:00 PM" },
    { label: "03:00 PM", value: "03:00 PM" },
    { label: "04:00 PM", value: "04:00 PM" },
    { label: "05:00 PM", value: "05:00 PM" },
  ];

  const handleLengthChange = (selectedLength) => {
    setSelectedLength(selectedLength);
  };

  const handleWidthChange = (selectedWidth) => {
    setSelectedWidth(selectedWidth);
  };

  const handleDayChange = (selectedDay) => {
    setSelectedDay(selectedDay);
  };
  const handleTimingChange = (selectedTimings) => {
    setSelectedTimings(selectedTimings);
  };

  return (
    <div className="form">
      <NavHeader />
      <Navbar />

      <div className="form-header">
        <div className="container">
          <h1>Request for quote</h1>
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
              <Select
                isSearchable
                value={selectedDay}
                onChange={handleDayChange}
                options={days}
              />
            </div>

            <div className="col">
              <h4>
                Select Time <span style={{ color: "red" }}>*</span>
              </h4>
              <Select
                isSearchable
                value={selectedTimings}
                onChange={handleTimingChange}
                options={timings}
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-3">
              <h4>
                Select Length <span style={{ color: "red" }}>*</span>
              </h4>

              <Select
                isSearchable
                value={selectedLength}
                onChange={handleLengthChange}
                options={options}
              />
            </div>

            <div className="col-3">
              <h4>
                Select Width <span style={{ color: "red" }}>*</span>
              </h4>

              <Select
                value={selectedWidth}
                onChange={handleWidthChange}
                options={[{ label: "54 Inches", value: "54 Inches" }]}
              />
            </div>
          </div>

          <div className="row additional-comments mt-4">
            <div className="col-xl-12">
              <h4>
                Comments <span style={{ color: "red" }}>*</span>
              </h4>

              <textarea></textarea>
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
