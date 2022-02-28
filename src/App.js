import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/home";
import "../src/media_query.scss";
import Form from "./pages/Home/components/Form/form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/request-for-quote" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
