import React,{Component} from 'react'
import {connect} from 'react-redux'
import {productFetch,productCreate,productUpdate} from '../../action'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductForm from '../../components/products/ProductForm'
class ProductEdit extends Component{


    componentDidMount(){
        if(this.props.match.params.id){
            console.log('this.props.match.params.id',this.props.match.params.id);
            
            //match ติดมากับ router
            this.props.productFetch(this.props.match.params.id)
        }
    }
    render(){
        const{match,productCreate,productUpdate,products,formValues} =this.props
        console.log(match);
        
        return(
            <div>
                <Header />
               
                <div className="container col-md-5">
                     {match.path.indexOf("add") >0 && 
                     <div>
                           <h2>ADD</h2>
                         {products.save &&(
                             <div className="alert alert-secondary title" role="alert">{products.msg}</div>
                         )}
                      
                      <ProductForm onProductSubmit={()=>productCreate(formValues)}/>
                      </div>
                     }
                     {match.path.indexOf('edit')>0 &&
                     <div>
                         <h2>EDIT</h2>
                          {products.save &&(
                            <div className="alert alert-secondary title" role="alert">{products.msg}</div>
                         )}
                         
                     <ProductForm onProductSubmit={()=>productUpdate(products.id,formValues)}/>
                     </div>
                     }
                </div>              
                <Footer />
            </div>
        )
    }
}
function mapStateToprops({form,products}){
    console.log('producte',products);
    //เอาค่าจากฟอมโปรดัก form.productForm คือชื่อ form.productForm.values คือค่าของฟอม
    return {formValues:form.productForm ? form.productForm.values:null,products}

}
export default connect(mapStateToprops,{productFetch,productCreate,productUpdate})(ProductEdit);