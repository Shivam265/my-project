import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBagShopping } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdEdit } from "react-icons/md";

const Timeslots = () => {
    const [timeSlots, setTimeSlots] = useState(["10:30-11:30", "11:30-12:30", "12:30-13:30", "13:30-14:30", "14:30-15:30", "15:30-16:30", "16:30-1730"])
    const [selectedDate, setSelectedDate] = useState(new Date());
    const token = localStorage.getItem('token')
    const [visible, setVisible] = useState(false)
    const [setTime, setSelectedTime] = useState({
        equipment_id: "",
        time: "",
        services: "",
        date: ""
    })

    const [dataform, setDataform] = useState([])
    const [tableEquipment, setTableEquipmentId] = useState('')
    const [tableServices, setTableServices] = useState('')
    const [tableTime, setTableTime] = useState('')
    const [tableDate, setTableDate] = useState('')
    let fetchData = async () => {
        const response = await axios.get("https://calendra.betacvinfotech.com/public/api/admin_assign_services")
        setDataform(response.data.date_services)
    }

    const handleSelectedChange = (e) => {
        setSelectedDate(e.target.value)
    }


    // const changeHandler = (e) => {
    //     setSelectedTime({ [e.target.name]: e.target.value })

    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setDataform([...dataform, response.dataform])


    // };


    const ToggoleBtn = () => {
        setVisible(!visible)

    }

    const HandleSelect = (e) => {
        setTableEquipmentId(e.target.value)
    }


    const handleTimeClick = (value) => {
        setSelectedTime(value)
        console.log(value)

    };

    let handleAddButton = async (e) => {
        e.preventDefault()
        const response = await axios.post("https://calendra.betacvinfotech.com/public/api/add_date_services", {
            equipment_id: setTableEquipmentId,
            service_id: setTableServices,
            date: setTableDate,
            time: timeSlots[0]


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
            <div className='maintimeslots bg-white w-75 mx-2'>
                <h4 className='mx-2'>TimeSlots</h4>
                <form className="mb-4" action="https://calendra.betacvinfotech.com/public/api/add_date_services">
                    <select className="form-select form-select-lg mb-3  mr-2" aria-label=".form-select-lg example">
                        <option> {}Select equipment to add availibility</option>
                        <option value="Repellent" >Repellent</option>
                        <option value="Gas detector">Gas detector</option>
                        <option value="Adapter">Adapter</option>
                        <option value="Dye kit">Dye kit</option>
                    </select>

                    <div>
                        <p className='paradiv ms-2'>Select Services</p>
                        <select className="form-select form-select-lg mb-3 mr-2"  aria-label=".form-select-lg example">
                            <option selected>Select service related to related equipment</option>
                            <option value="Installation">Installation</option>
                            <option value="Sercices">Sercices</option>
                            <option value="New Connection">New Connection</option>
                            <option value="freeze">freeze</option>
                        </select>

                    </div>


                    <div>

                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-sm example">
                            <option value="No repeat"> No repeat</option>
                            <option value="Every Week">Every Week</option>
                            <option value="Every 2 weeek">Every 2 weeek</option>
                            <option value="Every 3 weeek">Every 3 weeek</option>
                            <option value="Every month">Every month</option>

                        </select>
                    </div>
                    <div>
                        <p className='paradiv1 ms-2'>Select possible time slots</p>
                    </div>

                    <div onClick={ToggoleBtn} className="sub-datepicker position-relative" onChange={handleSelectedChange}>
                        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
                            minDate={new Date()} />
                    </div>


                    {
                        visible &&
                        <div className="position-absolute select-slots bg-white border align-item-center position-fixed " onChange={e => setTableTime(e.target.value)}>
                            <div className='d-flex justify-content-between'>
                                <h3 className='table-bordered  position-sticky'>Selecter slotes</h3>
                                <button type="button" className="btn-close mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>


                            <div className='borders'>


                            </div>


                            <div className='position-relative d-flex flex-wrap time-value align-item-center mt-2 fs-0 mx-2' value="Timeselect">
                                {timeSlots.map((value) => (
                                    <p className="border-sub d-flex gap-3 mx-2" onClick={() => handleTimeClick(value)}>{value}<MdEdit className="mt-1 my-1 cursor-pointer" /></p>

                                ))

                                }
                            </div>

                            <div className='float-end me-3 '>

                                <button type="button" className='btn text-white hidebtn' onClick={ToggoleBtn}>OK</button>
                            </div>
                        </div>


                    }

                    <div className='addbtn'>
                        <button type="button" className="mt-2 btn text-white mt-5 addbgbtn" onClick={handleAddButton}>Add</button>
                    </div>
                </form>



                <div>
                    <p className='paradiv'>Service Availibity</p>
                    <table className="table mt-2 ">
                        <thead className="table-light">

                            <tr>
                                <th scope="col">NO</th>
                                <th scope='col'>Equipment_id</th>
                                <th scope='col'>Services</th>
                                <th scope='col'>Date</th>
                                <th scope='col'>Time</th>
                                <th scope='col'>Action</th>

                            </tr>

                        </thead>


                        <tbody>
                            {dataform && dataform?.map((d) => (
                                <tr>
                                    <td scope="col">{d.id}<FaBagShopping className='text-danger float-left' /></td>
                                    <td>{d.equipment_name}</td>
                                    <td>{d.service_type}</td>
                                    <td>{d.date} </td>
                                    <td>{d.time}</td>
                                    <td>{d.status}<RiDeleteBin6Line className='text-danger' /> Delete </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>




        </>


    )
}

export default Timeslots;












