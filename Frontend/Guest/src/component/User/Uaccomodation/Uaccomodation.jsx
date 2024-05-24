import React, { useEffect } from 'react'
import './Uaccomodation.css'
import { Link } from 'react-router-dom'
import { rooms } from './Unaccomodation.js'

const Uaccomodation = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <div id='accommodation' className="accomodation">
        <div className="accomodation-con">
          <h1>Accomodation</h1>
        </div>
        <div className="room">
          {rooms.map((room, index) => (
            <div key={index} className="room-type">
              <div className="room-type-image"><img src={room.imageUrl} alt={room.title} /></div>
              <div className="room-type-title">{room.title}</div>
              <div className="room-type-para">
                {room.description} <Link to={room.link}>More</Link>
              </div>
              <div className="room-type-book"><Link to='/'>Book Now</Link></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Uaccomodation
