import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Services from './components/Services'
import { FaBagShopping } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const Services = () => {
  const [servicesItem, setServicesItem] = useState("")
  const token = localStorage.getItem("token")
  const [dataservices, setservicesData] = useState([])
  const fetchData = async () => {
    const response = await axios.get("https://calendra.betacvinfotech.com/public/api/services")
    console.log(response)
    setservicesData(response.data.service)
  }

  let addServiceItem = async () => {
    const response = await axios.post("https://calendra.betacvinfotech.com/public/api/add_services", {
      services_types: servicesItem

    },

      {
        headers: { "Authorization": `Bearer ${token}` }
      }

    )
  }

  useEffect(() => {
    fetchData();

  }, [])


  return (
    <>
      <div>
        <h3 className='mx-2'>Add service</h3>
        <div className="input-group mb-3 w-75">
          <input type="text" className="form-control" value={servicesItem} onChange={(e) => setServicesItem(e.target.value)} placeholder="Enter the name of services here" aria-label="Enter the name of services here" aria-describedby="button-addon2" />
          <button className="btn btn-outline-white text-white bg-success" type="button" onClick={addServiceItem} id="button-addon2">Add</button>
        </div>
        <table className="table w-75 h-75 bg-white">

          <thead>
            <tr>
              <th scope="col">NO.</th>
              <th scope="col">SERVICES</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>

          <tbody >
            {dataservices.map((d) => (

              <tr>
              
                <td className='text-black' > {d.id} </td>
                <td>{d.services_types}</td>
                <td><RiDeleteBin6Line className='text-danger' /> Delete </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Services
