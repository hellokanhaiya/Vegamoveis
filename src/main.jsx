import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import SecondComponent from "./Components/nothig";
import GoanotherPage from "./Components/GoanotherPage";
import Trending from "./Components/Trending";
import Upcoming from "./Components/Upcoming";
import Popular from "./Components/Populor";
import Sidebar from "./Components/Sidebar";
import DisplaySearchResults from "./Components/NewSeach";
import Home from "./routes/Home";
import Action from "./Components/AllCatagoryclickable/Action";
import Adventure from "./Components/AllCatagoryclickable/Adventure";
import Animation from "./Components/AllCatagoryclickable/Animation";
import Comedy from "./Components/AllCatagoryclickable/Comedy";
import Crime from "./Components/AllCatagoryclickable/Crime";
import Documentary from "./Components/AllCatagoryclickable/Documentary";
import Drama from "./Components/AllCatagoryclickable/Drama";
import Family from "./Components/AllCatagoryclickable/Family";
import Fantasy from "./Components/AllCatagoryclickable/Fantasy";
import History from "./Components/AllCatagoryclickable/History";
import Horror from "./Components/AllCatagoryclickable/Horror";
import Music from "./Components/AllCatagoryclickable/Music";
import Mystery from "./Components/AllCatagoryclickable/Mystery";
import Romance from "./Components/AllCatagoryclickable/Romance";
import Sincefiction from "./Components/AllCatagoryclickable/SinceFiction";
import Thrilier from "./Components/AllCatagoryclickable/Thrilier";
import Tvmovie from "./Components/AllCatagoryclickable/Tvmovie";
import War from "./Components/AllCatagoryclickable/War";
import Western from "./Components/AllCatagoryclickable/Western";
import SearchResults from "./Components/NewSeach";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies/:id" element={<GoanotherPage />} />
        <Route path="/movies/search" element={<SearchResults />} />
        <Route path="/movies/trending" element={<Trending />} />
        <Route path="/movies/popular" element={<Popular />} />
        <Route path="/movies/upcoming" element={<Upcoming />} />
        <Route path="/movies/search?query=acting" element={<Home />} />
        <Route path="/movies/action" element={<Action />} />
        <Route path="/movies/adventure" element={<Adventure />} />
        <Route path="//movies/animation" element={<Animation />} />
        <Route path="/movies/comedy" element={<Comedy />} />
        <Route path="/movies/crime" element={<Crime />} />
        <Route path="/movies/documentary" element={<Documentary />} />
        <Route path="/movies/drama" element={<Drama />} />
        <Route path="/movies/family" element={<Family />} />
        <Route path="/movies/fantasy" element={<Fantasy />} />
        <Route path="/movies/history" element={<History />} />
        <Route path="/movies/horror" element={<Horror />} />
        <Route path="/movies/music" element={<Music />} />
        <Route path="/movies/mystery" element={<Mystery />} />
        <Route path="/movies/romance" element={<Romance />} />
        <Route path="/movies/science-fiction" element={<Sincefiction />} />
        <Route path="/movies/tv-movie" element={<Tvmovie />} />
        <Route path="/movies/thriller" element={<Thrilier />} />
        <Route path="/movies/war" element={<War />} />
        <Route path="/movies/western" element={<Western />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
