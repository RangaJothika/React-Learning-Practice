import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"

// React Router via Functional Components
// export default function RouterApp(){
//     return (
//         <Routes>
//             <Route path="/" element={<Home />}/>
//              <Route path="/about" element={<About />}/>
//         </Routes>
//     )
// }

// React Router via class Components
import React from "react";
class RouterApp extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    );
  }
}

export default RouterApp;