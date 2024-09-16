import React from 'react'
import Sidebar from './Sidebar.jsx'
import Video from './Video'
import { useAuth } from '../context/AuthProvider';

function Home() {
    const { data, loading } = useAuth();
    console.log(data);
  return (
    <div className='flex'>
        <Sidebar/>
    <div >
    {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return (
              <Video key={item.id} video={item?.video} />
              )
            })}
    </div>
    </div>
  )
}

export default Home