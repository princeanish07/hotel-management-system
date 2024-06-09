import React, { useEffect, useState } from 'react';
import './Ugallery.css'
import property1 from './Ugallery-img/property1.jpg';
import property2 from './Ugallery-img/property2.jpg';
import property3 from './Ugallery-img/property3.jpg';
import property4 from './Ugallery-img/property4.jpg';
import property5 from './Ugallery-img/property5.jpg';
import property6 from './Ugallery-img/property6.jpg';
import property7 from './Ugallery-img/property7.jpg';
import property8 from './Ugallery-img/property8.jpg';
import property9 from './Ugallery-img/property9.jpg';
import property10 from './Ugallery-img/property10.jpg';
import property11 from './Ugallery-img/property11.jpg';
import property12 from './Ugallery-img/property12.jpg';
import property13 from './Ugallery-img/property13.jpg';
import property14 from './Ugallery-img/property14.jpg';
import property15 from './Ugallery-img/property15.jpg';
import room1 from './Ugallery-img/room1.jpg'
import room2 from './Ugallery-img/room2.jpg'
import room3 from './Ugallery-img/room3.jpg'
import room4 from './Ugallery-img/room4.jpg'
import room5 from './Ugallery-img/room5.jpg'
import room6 from './Ugallery-img/room6.jpg'
import room7 from './Ugallery-img/room7.jpg'
import room8 from './Ugallery-img/room8.jpg'
import room9 from './Ugallery-img/room9.jpg'
import room10 from './Ugallery-img/room10.jpg'
import Ufooter from '../Ufooter/Ufooter';
import Usidebar from '../Usidebar/Usidebar';
import Unavbar from '../Unavbar/Unavbar';






const images = {
  property: [property1,property2,property3,property4,property5,property6,property7,property8,property9,property10,property11,property12,property13,
    property14,property15],
  room: [room1,room2,room3,room4,room5,room6,room7,room8,room9,room10],
};
  


const Ugallery = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const [filter, setFilter] = useState('all');

  const getFilteredImages = () => {
    if (filter === 'all') {
      return [...images.property, ...images.room];
    }
    return images[filter];
  };

  const filteredImages = getFilteredImages();

  return (
    <>
  
    <div id='gallery' className='Ugallery'>
      <div className="Ugallery-heading">
        <h1>Gallery</h1>
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('property')}>Property</button>
        <button onClick={() => setFilter('room')}>Room</button>
      </div>
      <div className="image-gallery">
        {filteredImages.map((src, index) => (
          <img key={index} src={src} alt={filter} />
        ))}
      </div>
    </div>

   
    
    </>
    );
}

export default Ugallery