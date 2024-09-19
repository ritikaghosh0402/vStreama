import React from 'react'
import { Link } from 'react-router-dom';
import Time from '../loader/Time';
import { BsFillCheckCircleFill } from "react-icons/bs";
// import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
    console.log(video);
  return (
    <div className=''>
        <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
    
        <div className="relative h-48 md:h-50 md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img className="h-full w-full" src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
        </div>
        {/* channerl logo & title */}
        <div className="flex mt-3 space-x-2 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
           
          </div>
        </div>
        </Link>
        </div>
        
  )
}

export default Video