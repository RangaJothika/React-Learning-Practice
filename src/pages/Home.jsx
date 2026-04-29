import {Link} from "react-router-dom";

// React Router via Functional Components
// export default function Home(){
//     return <>
//     <h1>This is a home page</h1>
//     <Link to="/about">Go to About</Link></>
// }

// React Router via Class Components
import React from "react";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/about">Go to About</Link>
      </div>
    );
  }
}

export default Home;