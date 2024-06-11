import React from "react";
import "./Arooms.css";
import Anavbar from "../Anavbar/Anavbar";
import Asidebar from "../Asidebar/Asidebar";
import Addroomform from "./Addroomform";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const Arooms = () => {
  const [rooms, setRooms] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [roomToEdit, setRoomToEdit] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/hotel/get_room_list/"
      );
      setRooms(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching rooms", error);
    }
  };

  const deleteRoom = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/user/get-rooms/${id}`);
      fetchRooms();
    } catch (error) {
      console.error("Error deleting room", error);
    }
  };

  const openEditForm = (room) => {
    setRoomToEdit(room);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setRoomToEdit(null);
  };

  return (
    <>
      <Anavbar />
      <Asidebar />
      <div className="Arooms">
        <h1>Rooms</h1>
        <button onClick={() => setShowForm(true)}>Add Room</button>
        {showForm && (
          <Addroomform
            onClose={closeForm}
            onRoomSaved={fetchRooms}
            roomToEdit={roomToEdit}
          />
        )}
        <Table className="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Room Name</th>
              <th>Room Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>

            {rooms.map((room, index) => (
              <tr key={index}>
                <td>{room.room_name}</td>
                <td>{room.hotel_description}</td>
                <td>{room.room_price}</td>
                <td>
                <button onClick={() => deleteRoom(room.id)}>Delete</button>
              <button onClick={() => openEditForm(room)}>Edit</button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Arooms;
