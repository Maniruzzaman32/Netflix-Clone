import React from "react";
import './App.css';
import requests from "./requests";
import Row from "./Row"
import Banner from "./Banner.js"
import Nav from "./Nav"


function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;

//d850e4549c24e77d6855340bda1ca950