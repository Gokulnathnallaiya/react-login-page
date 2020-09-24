import React from 'react';
import  FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import  axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



class AddProduct extends React.Component{

    constructor(props){
        super(props);
        this.state={
            product: "",
            loading:false,
        }

    }
    handlesubmit=()=>{
        console.log("entered")
        this.setState({loading:true});
        axios.post('https://express-sql-app.herokuapp.com/addproduct',{
            item:this.state.product,
            email:this.props.currentUser
        }).then(res=>{
            console.log(JSON.stringify(res))
            this.setState({loading:false});
            alert('Product added succesfully');
            this.props.history.push('/user')
        }).catch(err=>{
            console.log(err)
        })
       


    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render(){
        return(
            <div className='addproduct'>
                <FormInput
                name="product"
                type="product"
                onChange={this.handleChange}
                value={this.state.product}
                label="Product Name"
                required        
                />
                <CustomButton onClick={this.handlesubmit}> Add product</CustomButton>
                {this.state.loading ? (
                <div className="container">
                  <div className="loader"></div>
                </div>
              ) : null}

            </div>
        )
    }


}
const mapStateToProps = state =>({
    currentUser:state.user.currentUser
  
  });

  export default connect(mapStateToProps)(withRouter(AddProduct));
