import React from 'react'
export default ({input,type,label,required,meta:{error,touched}})=>{

    // component for design and validate form export give to ProductForm
    return(
        <div className="form-group">
            <label>{label}</label>
            <input type={type} {...input} required={required} className="form-control"></input>
            {error && touched &&
            (
            <div className="text-danger title mt-2">{error}</div>
            )

            }
        </div>
    )
}