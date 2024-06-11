import React from 'react'

function Registration() {
  return (
    <div>
      <div className='p-4'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex col-md-4 align-items-center'>
        <label className='form-label w-50'>Case No:</label>
        <input className=' p-2 form-control'></input>
        </div>
        <div className='d-flex col-md-4 align-items-center p-1'>
        <label className='form-label'>Year:</label>
        <input className=' p-2 form-control'></input>
        </div>
        <div className='d-flex col-md-4 align-items-center p-1'>
        <label className='form-label'>Nature:</label>
        <textarea type='textarea' className=' p-2 form-control'></textarea>
        </div>

      </div>
      <div className='d-flex '>
        <div className='d-flex col-md-3 align-items-center'>
        <label className='form-label'>Change registration Date </label>
        <input className=' p-2 form-check ms-2' type='checkbox'></input>
        </div>
        <div className='d-flex col-md-4 align-items-center p-1'>
        <label className='form-label w-75'>Date of Registration:</label>
        <input className=' p-2 form-control'></input>
        </div>
      </div>
      <div className='d-flex col-md-3 align-items-center'>
      <label className='form-label w-75'>Date of Hearing:</label>
      <input className=' p-2 form-control' type='date'></input>
      </div>
    </div>

    </div>
  )
}

export default Registration