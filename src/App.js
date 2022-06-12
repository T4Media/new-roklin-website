import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/home";
import "../src/media_query.scss";
import Form from "./pages/Home/components/Form/form";
import { Route, Routes } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function App() {
  return (
    <div className="App">
      <WhatsAppWidget phoneNumber="923259313740" />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/request-for-quote" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
