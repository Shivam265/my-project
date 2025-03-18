import React from 'react'
import { IoIosSearch } from "react-icons/io";


const ContentS = () => {
  return (
    <div className='containtdiv'>
      <div className='headdivmain ms-4 bg-white rounded mt-2'>
        <h3 className='head'>Welcome Yannick</h3>
      </div>


      <div className='textdivmain ms-4  mt-4 bg-white rounded '>
        <p className='textitem mt-2 ms-4 fs-3 '>Recent Booking</p>
        <div className='borderbtm ms-4'>
          <span className='borderitem border-bottom-0  '></span>
        </div>

        <div className='ms-4 mt-4 d-flex justify-content-between'>
          <label className='d-inline-flex align-items-center'>Show
            <select className='form-select ms-2'>
              <option value={7}>7</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={75}>75</option>
              <option value={100}>100</option>
            </select> entries</label>
          <div className='inputbox d-flex'>
            <IoIosSearch className='serchicon mt-2' />
            <input className="form-control" type="search" placeholder="To Search" />
          </div>
        </div>
        <table className="table me-3 h-25">
          <thead className="table-light">
            <tr>
              <th scope="col bg-primary"></th>
              <th scope="col">#ID</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">EMPLOYE</th>
              <th scope="col">SERVICES</th>
              <th scope="col">DATUM</th>
              <th scope="col">TIME</th>
              <th scope="col">STATUS</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td className='cusid'>#5089</td>
              <td>Rohan</td>
              <td>28</td>
              <td>5</td>
              <td>2024-04-05</td>
              <td>10:00-11:00</td>
              <td className='tabledata fw-2 bg-light p-2 text-success'>Success</td>




            </tr>
            <tr>
              <th scope="row"></th>
              <td className='cusid'>#5041</td>
              <td>Jacob</td>
              <td>28</td>
              <td>5</td>
              <td>2024-04-01</td>
              <td>15:00-16:00</td>
              <td className='bg-light rounded-pill text-success' >Success</td>


            </tr>
            <tr>
              <th scope="row"></th>
              <td className='cusid'>#5024</td>
              <td>Rohit</td>
              <td>28</td>
              <td>5</td>
              <td>2024-03-30</td>
              <td>11:00-12:00</td>
              <td className='bg-light  rounded-pill text-success'>Success</td>

            </tr>

            <tr>
              <th scope="row"></th>
              <td className='cusid'>#5020</td>
              <td>Mohit</td>
              <td>28</td>
              <td>5</td>
              <td>2024-04-02</td>
              <td>12:00-1:00</td>
              <td className='bg-light  rounded-pill text-success'>Success</td>

            </tr>

            <tr>
              <th scope="row"></th>
              <td className='cusid'>#4995</td>
              <td>Sohan</td>
              <td>28</td>
              <td>5</td>
              <td>2024-03-25</td>
              <td>14:00-15:00</td>
              <td className='bg-light  rounded-pill text-success'>Success</td>

            </tr>

            <tr>
              <th scope="row"></th>
              <td className='cusid'>#4993</td>
              <td>Razz</td>
              <td>28</td>
              <td>5</td>
              <td>2024-04-05</td>
              <td>16:00-17:00</td>
              <td className='bg-light py-1 rounded-pill text-success'>Success</td>

            </tr>

            <tr>
              <th scope="row"></th>
              <td className='cusid'>#5089</td>
              <td>Sachin</td>
              <td>28</td>
              <td>5</td>
              <td>2024-04-02</td>
              <td>17:00-18:00</td>
              <td className='bg-light text-success rounded-pill fw-100'>Success</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default ContentS
