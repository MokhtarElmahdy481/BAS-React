import React, { useState } from 'react'
import "./SystemUsers.css"

import AddUserButton from '../../../Components/System/AddUserButton/AddUserButton'
import Select from '../../../Components/FormHandler/Select'
import Input from "../../../Components/FormHandler/Input"
import { Button, NavDropdown } from 'react-bootstrap'
import Genralnformation from '../../../Components/System/Users/Genralnformation/Genralnformation'
import ProfessinollInformation from '../../../Components/System/Users/ProfessinollInformation/ProfessinollInformation'
import { AccountaingInformation } from '../../../Components/System/Users/AccountaingInformation/AccountaingInformation'





const SystemUsers = () => {

    const [employeeDetails, setEmployeeDetails] = useState("معلومات عامة")



    const egypetRoles = [
        {
            value: "مصر",
            label: "مصر",
        }
    ]
    const saudiaRoles = [
        {
            label: "السعودية", options: [
                {
                    label: "مدير مكتب",
                    options: [
                        {
                            label: "بشمهندس ايهاب",
                            value: "بشمهندس ايهاب"
                        },
                        {
                            label: "بشمهندس اشرف",
                            value: "بشمهندس اشرف"
                        }
                    ]
                },
                {
                    label: "موظف",
                    options: [
                        {
                            label: "بشمهندس حبيب",
                            value: "بشمهندس حبيب"
                        },
                        {
                            label: "بشمهندسه مروه",
                            value: "بشمهندسه مروه"
                        }
                    ]
                }

            ]
        }
    ]
    const colourStyles = {
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: 'rgba(255, 255, 255, 0.50)',
            }
        },
        control: styles => ({ ...styles, backgroundColor: '#2B2B40', border: "unset", color: 'rgba(255, 255, 255, 0.50);' }),
        option: (styles, { data, isDisabled, isFocused, isSelected, }) => {
            return {
                ...styles,

                color: 'rgba(255, 255, 255, 0.50);',
                backgroundColor: "#2B2B40",
                border: "none "

            }
        }

    }
    return (
        <div className='Users-component w-100    text-white '>
            <div
                style={{

                    border: "1px solid #EFAA20 !important"
                }}
            >

                <div className='user-control-model mb-4 d-flex align-items-center x-4 justify-content-between' >
                    <div className='me-2  w-100'>
                        <AddUserButton />
                    </div>
                    <div className='icons ms-3 d-flex gap-2' >

                        <img src="../icons/notification.png" alt='notification img' className='pointer system-notification mx-1' />
                        <img src="../icons/messages.png" alt='notification img' className='pointer system-notification mx-1' />





                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6'>

                                <div className='all-categories '>

                                    <p className='text-center py-2' >كل المستخدمين</p>
                                    <Select options={saudiaRoles} styles={colourStyles} placeholder=" السعودية " className="mb-4  saudia-roles" />
                                    <Select options={egypetRoles} styles={colourStyles} placeholder="مصر " className="mb-4 egypet-roles " />
                             
                                </div>
                            </div>
                            <div className='col-md-6'>

                                <div className='search-users '>

                                    <div className='d-flex   justify-content-center'>     <Input background='#2B2B40' height='37.06px' width='166px' className='border-0  search' placeholder="Search..." /></div>

                                    <div className='d-flex justify-content-between m-2'>
                                        <p className='text-center ' >كل المستخدمين</p>
                                        <NavDropdown title={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                            <path d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z" fill="#D59921" />
                                        </svg>} className='    fs-5 ' id="collapsible-nav-dropdown">

                                            <NavDropdown.Item className='text-end  d-flex justify-content-between  align-items-center' href="#action/3.2">
                                                <span>   متصل</span>
                                                <div className='connected' />
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className='text-end  d-flex justify-content-between align-items-center' href="#action/3.3">
                                                <span>غير متصل</span>
                                                <div className='not-connected ' />
                                            </NavDropdown.Item>



                                        </NavDropdown>


                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                                            <p className='main-text'>Islam@bsa.com</p>
                                        </div>

                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/habeeb.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> حبيب</h2>
                                            <p className='main-text'>habeeb@bsa.com</p>
                                        </div>

                                    </div>   <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                                            <p className='main-text'>Islam@bsa.com</p>
                                        </div>

                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/habeeb.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> حبيب</h2>
                                            <p className='main-text'>habeeb@bsa.com</p>
                                        </div>

                                    </div>   <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                                            <p className='main-text'>Islam@bsa.com</p>
                                        </div>

                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/habeeb.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> حبيب</h2>
                                            <p className='main-text'>habeeb@bsa.com</p>
                                        </div>

                                    </div>   <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                                            <p className='main-text'>Islam@bsa.com</p>
                                        </div>

                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/habeeb.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> حبيب</h2>
                                            <p className='main-text'>habeeb@bsa.com</p>
                                        </div>

                                    </div>   <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                                            <p className='main-text'>Islam@bsa.com</p>
                                        </div>

                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/habeeb.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> حبيب</h2>
                                            <p className='main-text'>habeeb@bsa.com</p>
                                        </div>

                                    </div>   <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                                            <p className='main-text'>Islam@bsa.com</p>
                                        </div>

                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/habeeb.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> حبيب</h2>
                                            <p className='main-text'>habeeb@bsa.com</p>
                                        </div>

                                    </div>   <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                                            <p className='main-text'>Islam@bsa.com</p>
                                        </div>

                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/habeeb.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> حبيب</h2>
                                            <p className='main-text'>habeeb@bsa.com</p>
                                        </div>

                                    </div>   <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                                            <p className='main-text'>Islam@bsa.com</p>
                                        </div>

                                    </div>
                                    <div className='tab d-flex   '>

                                        <img src='../People/habeeb.jpg' alt='user img ' className='user-img  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> حبيب</h2>
                                            <p className='main-text'>habeeb@bsa.com</p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='col-md-6'>
                        <div className='show-employee py-4 px-2 w-100 '>
                            <div className='show-employee-header'>
                                <div className='d-flex justify-content-between'>

                                    <p className='golden'>مدير قسم / البرمجة</p>
                                    <div>
                                        <Button className='export-bg ms-2 '>تصدير CSV </Button>
                                        <Button className='export-bg ms-2'> تصدير Excel     </Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between w-100'>
                                    <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-Personal  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> اسلام</h2>
                                            <p className='main-text  my-0   '>islam@bsa.com</p>
                                            <p className=' name-heade my-0    '>01023456789</p>
                                        </div>

                                    </div>
                                    <div className='d-flex align-items-center '>
                                        <img src='../icons/delete.png' alt='user img ' className='action-buttons  ' />
                                        <img src='../icons/edit.png' alt='user img ' className='action-buttons  ' />
                                        <img src='../icons/more.png' alt='user img ' className='action-buttons  ' />

                                    </div>


                                </div>
                            </div>

                            <div className='main-text choose-inf position-relative d-flex justify-content-between mx-5 my-3'>
                                <p className={`genral-inf ${employeeDetails == "معلومات عامة" && "inf-type"}`} onClick={() => { setEmployeeDetails("معلومات عامة") }} >معلومات عامة</p>
                                <p className={`genral-inf ${employeeDetails == "معلومات مهنية" && "inf-type"}`} onClick={() => { setEmployeeDetails("معلومات مهنية") }}>معلومات  مهنية</p>
                                <p className={`genral-inf ${employeeDetails == "معلومات محاسبية" && "inf-type"}`} onClick={() => { setEmployeeDetails("معلومات محاسبية") }}>معلومات  محاسبية</p>


                            </div>
                         {employeeDetails=="معلومات عامة"? <Genralnformation/> :employeeDetails =="معلومات مهنية"? <ProfessinollInformation/>:<AccountaingInformation/>}

                        </div>



                    </div>




                </div>

            </div>
        </div>
    )
}

export default SystemUsers