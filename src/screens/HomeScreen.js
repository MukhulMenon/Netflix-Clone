import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      {/* <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      /> */}
    </div>
  );
}
export default HomeScreen;
