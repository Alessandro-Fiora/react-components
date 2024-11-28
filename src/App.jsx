// import { useState } from 'react'
// const [count, setCount] = useState(0)

import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper d-flex flex-column">
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
