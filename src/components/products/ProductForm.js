import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'
import{connect} from 'react-redux'
import FormField from '../common/FormField'
import {Productfield} from './FormField'
  class ProductForm extends Component {

    rederFormField(field){
       
        return field.map(({type,name,label,required})=>{
            return(
                <Field key={name} type={type} name={name} label={label} required={required} component={FormField}/>
            )
        })
           


    }

    render() {
        const {onProductSubmit} = this.props
        return (
            <div>
               <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.rederFormField(Productfield)}
                    <button className="btn btn-block btn-info title ">
                        Save
                    </button>
               </form>
               <hr ></hr>
            </div>
        )
    }
}
function validate(values)
{
    //values is onchange's input    
    const error={}
    Productfield.forEach(({name,required})=>{
        console.log(name,required);
        if(!values[name] && required){
            error[name] = "Please input Value in box"
        }
       
    })
        return error
}
function mapStateToProps({products}){
    console.log('check pag',products);
    //state จะมีสินค้าอยู่ภายในอาเรย์ 5 ตัว ถ้าเราเช็ค products.id คือ เป็นการเช็คว่ามันเป็น อ็อบเจ็กตัวเดียว ไม่ใช่ อาเรย์ทั้งก้อน
    if(products && products.id){ //check page Edit
        
        return {initialValues:products}//initialValues is เอาค่ามาโชว์ในฟอร์ม แล้ว state.products ก็จะเป็นของไอดีนั้น
    }
    else{
        return {}
    }
   
}
ProductForm =reduxForm({validate,form:"productForm"})(ProductForm);

export default connect(mapStateToProps)(ProductForm);
