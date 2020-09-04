import React,{useState, useEffect} from 'react';
import './Result.css';
import VideoCard from './VideoCard';
//import axios from './axios';
import axios from 'axios';
//import requests from './Request';

function Result({selectedOption}) {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[selectedOption])

    return (
        <div className='result'>
            {movies.map((movie)=>(<VideoCard key={movie.id} movie={movie}/>))}
            
        </div>
    )
}

export default Result
