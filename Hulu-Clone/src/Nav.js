import React from 'react';
import './Nav.css';
import requests from './Request'
export default function Nav({setSeletedOption}) {
    return (
        <div className='nav'>
            <h2 onClick={()=>setSeletedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchTopRated)}>Top_Rated</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchMysteryn)}>Mystery</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchSciFi)}>Sci_Fi</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchWestern)}>Western</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={()=>setSeletedOption(requests.fetchTV)}>Movie</h2>
        </div>
    )
}
