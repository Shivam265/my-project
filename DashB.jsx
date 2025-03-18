import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";




const DashB = () => {
    return (
        <div className='containtdiv h-100'>
            <div className='headdivmain ms-4 bg-white rounded mt-2'>
                <h3 className='head'>Welcome Yannick! 🎉</h3>

            </div>

            <div className='ms-4 mt-4 d-flex justify-content-between my-3'>
                <label className='d-inline-flex align-item-center'>Show

                    <select className='form-select ms-2  mx-2'>
                        <option value={7}>7</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                    </select> entries </label>

                <div className='inputbox  d-flex  mx-2 justify-content-between'>
                    <IoIosSearch className='serchicon mt-2 ' />
                    <input className="form-control inputbtn w-75 mx-2" type="search" placeholder="To Search" />
                    <div>
                        <select className='form-select'>
                            <option value="All">All</option>
                            <option value="All">Cancelled</option>
                            <option value="All">Success</option>
                            <option value="All">Hangede</option>
                        </select>
                    </div>
                </div>


            </div>
            <table className="table me-3 h-25 mx-2">
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
                        <td><RiDeleteBin6Line className='text-danger' /> Delete </td>



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
                        <td><RiDeleteBin6Line className='text-danger' /> Delete </td>


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
                        <td><RiDeleteBin6Line className='text-danger' /> Delete </td>

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
                        <td><RiDeleteBin6Line className='text-danger' /> Delete </td>

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
                        <td><RiDeleteBin6Line className='text-danger' /> Delete </td>

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
                        <td><RiDeleteBin6Line className='text-danger' /> Delete </td>

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
                        <td><RiDeleteBin6Line className='text-danger' /> Delete </td>

                    </tr>
                </tbody>
            </table>

            <div className='py-2 mx-2'>
                <div className='d-flex justify-content-between'>
                    <div className='table-data'>
                        Toon
                        1
                        Van
                        7
                        enteries
                    </div>

                    <div className='m-0'>
                        <button type="btn" className='btn btn-outline mx-1 btn-1'>Vorige</button>
                        <span className='btn btn-outline mx-1 rounded-circle outline-sub text-white  btn-1 btn-2'>1</span>
                        <span className='btn btn-outline mx-1 rounded-circle btn-1'>2</span>
                        <span className='btn btn-outline mx-1 rounded-circle btn-1'>3</span>
                        <button type="btn" className='btn btn-outline mx-1 btn-1 '>Volgende</button>



                    </div>
                </div>
            </div>
        </div>








    )
}

export default DashB
