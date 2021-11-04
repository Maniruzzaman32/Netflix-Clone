import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Banner.css"

function Banner() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=d850e4549c24e77d6855340bda1ca950&switch_networks=213");
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        };
        fetchData();
    }, []);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    console.log(movie);
    return (
        // header have a back-ground image
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>


                <div className="banner__buttons">  {/* div > two buttons */}
                    <button className="banner__button">play</button>
                    <button className="banner__button">My list</button>
                </div>
                {/* description */}
                <h1 className="banner__description">
                    {truncate(movie?.overview, 180)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
