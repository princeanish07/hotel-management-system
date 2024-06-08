import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddRoomForm = ({ onClose, onRoomSaved, roomToEdit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (roomToEdit) {
      setName(roomToEdit.name);
      setPrice(roomToEdit.price);
      setDescription(roomToEdit.description);
      setAmenities(roomToEdit.amenities);
    }
  }, [roomToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('amenities', amenities);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (roomToEdit) {
        await axios.put(`http://127.0.0.1:8000/api/user/get-rooms/${roomToEdit.id}/`, formData);
      } else {
        await axios.post('http://127.0.0.1:8000/api/user/get-rooms/', formData);
      }
      onRoomSaved();
      onClose();
    } catch (error) {
      console.error('Error saving room', error);
    }
  };

  return (
    <div className="add-room-form">
      <h2>{roomToEdit ? 'Edit Room' : 'Add Room'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Room Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Room Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Room Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Amenities</label>
          <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)} required />
        </div>
        <div>
          <label>Room Image</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">{roomToEdit ? 'Save Changes' : 'Add Room'}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddRoomForm;
