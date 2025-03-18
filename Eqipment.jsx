import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const Eqipment = () => {
  const [equipItem, setEquipItem] = useState('')
  const token = localStorage.getItem("token")
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://calendra.betacvinfotech.com/public/api/equipments")
    setData(response.data.equipment);

  }

  const handleAddButton = async () => {
    const response = await axios.post("https://calendra.betacvinfotech.com/public/api/add_equipments", {
      equipment_name: equipItem
    },
      {
        headers: { "Authorization": `Bearer ${token}` }
      }

    )

  };

  useEffect(() => {
    fetchData();
  }, [])





  return (
    <>
      <div className='mx-2'>
        <h3 className='mx-2'>Add Equipment</h3>
        <div className="input-group mb-3 w-75">
          <input type="text" value={equipItem} onChange={(e) => setEquipItem(e.target.value)} className="form-control " placeholder="Enter the name of services here" aria-label="Enter the name of services here" aria-describedby="button-addon2" />
          <button className="btn btn-outline-white text-white bg-success" type="button" onClick={handleAddButton} id="button-addon2">Add</button>
        </div>

        <table className="table w-75 h-75 bg-white">

          <thead>
            <tr>
              <th scope="col">NO.</th>
              <th scope="col">Equipment_type</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                <td><FaBagShopping className='text-danger' />{d.id}</td>
                <td>{d.equipment_name}</td>
                <td><RiDeleteBin6Line className='text-danger' /> Delete </td>
              </tr>))}
          </tbody>
        </table>
      </div>
    </>
  )
}


export default Eqipment
