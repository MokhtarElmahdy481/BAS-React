import React, { useState } from 'react'
import "./index.css"
import DesignRequestChart from '../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart'
import DataTableComponent from '../../../../Components/DataTableComponent'

import { Button } from 'react-bootstrap'
import { ShowRequest } from '../../../../Components/System/ShowRequest/ShowRequest'
import EditDesignRequest from '../../../../Components/System/Requests/EditRequest/EditDesignRequest'
import ConfirmPoper from '../../../../Components/System/ConfirmPoper'
const DesignRequest = () => {
  const [showProject, setShowProject] = useState(false)
  const [editRequest, setEditRequest] = useState(false)
  const [ConfirmUpdate,setConfirmUpdate]= useState(false)

  const DesignProjects = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: 1,
      ProjectName: 'BSA',
      ProjectNumber: '53543',
      recivedDate: '12-10-2023',
      ProjectType: 'تصميم',
      status: "قيد الا نتظار",
      display: <img src={process.env.PUBLIC_URL + "/icons/view.png"} onClick={() => { setShowProject(true) }} className='display_project  rounded' alt=' display project' />,
      edit: <img src={process.env.PUBLIC_URL + "/edit.png"} onClick={() => { setEditRequest(true) }} className=' edit_project  rounded' alt=' edit project' />
    }
  });



  const columns = [
    {
      name: 'م',
      selector: row => row.id,
    },
    {
      name: 'اسم المشروع',
      selector: row => row.ProjectName,
    },
    {
      name: ' رقم الطلب ',
      selector: row => row.ProjectNumber,
    },
    {
      name: '  تاريخ الاستلام',
      selector: row => row.recivedDate,
    },
    {
      name: '   نوع المشروع',
      selector: row => row.ProjectType,
    },
    {
      name: '    الحالة',
      selector: row => row.status,
    },
    {
      name: '    عرض',
      selector: row => row.display,
    },
    {
      name: '    تعديل',
      selector: row => row.edit,
    },
  ];
  console.log(editRequest)



  return (
    <div className='AllRequests p-3'>
      {!showProject ? <div className='  '>
        <div className='designChartContainer d-flex justify-content-center align-items-center'>

          <DesignRequestChart />

        </div>



        <fieldset className='TableContainer  py-3 px-2 mx-auto mt-3'>
          <legend className='text-center '>طلبات   ( تصميم )</legend>



          <div className='mt-3   '>
            <DataTableComponent className={"overflow-x-hidden datatableComponent"} columns={columns} data={DesignProjects} />
          </div>
        </fieldset>
      </div> : <ShowRequest setShowProject={setShowProject} />


      }
      {editRequest && <EditDesignRequest editRequest={editRequest} setEditRequest={setEditRequest} setConfirmPoper={setConfirmUpdate} />}
      {ConfirmUpdate && <ConfirmPoper confirmPoper={ConfirmUpdate} setConfirmPoper={setConfirmUpdate} setEditRequest={setEditRequest} text={"تم تعديل الطلب فى المشاريع بنجاح  "} />}
    </div>
  )
}

export default DesignRequest