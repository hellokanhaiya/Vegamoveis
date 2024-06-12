import "./App.css";
import Home from "./routes/Home";
import Logo from "./Components/Logo";
import Navbar from "./Components/navbar";
import SocialMediaicon from "./Components/SocialMediaicon";
import Catagory from "./Components/Catagory";
import Footer from "./Components/Footer";
import GoanotherPage from "./Components/GoanotherPage";
import Trending from "./Components/Trending";
import { useState } from "react";
import FirstComponent from "./test/firstcomponent";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="bg-black container-vegamovies">
      <Logo></Logo>
      <Navbar />
      <SocialMediaicon />
      <Catagory />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
// import "./App.css";
// import React, { useState } from "react";
// // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch, Link } from "react-router-dom";
// import Home from "./routes/Home";
// import Logo from "./Components/Logo";
// import Navbar from "./Components/navbar";
// import SocialMediaicon from "./Components/SocialMediaicon";
// import Catagory from "./Components/Catagory";
// import Footer from "./Components/Footer";
// import DisplaySearchResults from "./Components/Searchbox"; // Import your SearchBox component

// function App() {
//   const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   return (
//     <Router>
//       <div className="">
//         <Logo></Logo>
//         <Navbar />
//         <SocialMediaicon />
//         <Catagory />

//         {/* Conditional rendering based on searchQuery */}
//         {searchQuery ? (
//           <SearchBox handleSearch={handleSearch} />
//         ) : (
//           <Switch>
//             <Route path="/" exact component={Home} />
//           </Switch>
//         )}

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
