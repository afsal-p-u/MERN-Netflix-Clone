import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react'
import { useLocation, Link } from 'react-router-dom';

import './watch.scss';

const Watch = () => {

  const { state } = useLocation();
  const movie = state.movie.video;

  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
            <ArrowBackOutlined />
            Home    
        </div>
      </Link>
        <video 
            className='video' 
            autoPlay={true}
            progress  
            controls
            src={movie}> 
        </video>
    </div>
  )
}

export default Watch