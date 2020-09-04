import React from 'react';
import './VideoCard.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TextTruncate from 'react-text-truncate';

const base_url = 'https://image.tmdb.org/t/p/original';

function VideoCard({movie}) {
    return (
        <div className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=''/>
            <TextTruncate
                line={1}
                element="p"
                truncateText="…"
                text={movie.overview}
               />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="stat"><ThumbUpIcon />{movie.vote_count}</p>    
        </div>
    )
}

export default VideoCard
