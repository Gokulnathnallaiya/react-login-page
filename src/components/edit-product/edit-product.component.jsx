import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./edit-product.styles.scss";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.location.state.name,
      price: this.props.location.state.price,
      stock: this.props.location.state.stock,
      loading: false,
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();
    console.log("entered");
    this.setState({ loading: true });
    axios
      .patch(`https://express-sql-app.herokuapp.com/products/update/${this.props.location.state.id}`, {
        name: this.state.name,
        price: this.state.price,
        stock: this.state.stock,
      })
      .then((res) => {
        console.log(JSON.stringify(res));
        this.setState({ loading: false });
        alert("Product updated succesfully");
        this.props.history.push("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount(){
      console.log(this.props.location.state.id)
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
        
      <div className="container">
          <h1>Edit Product</h1>
        <form onSubmit={this.handlesubmit}>
          <FormInput
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            label="Product Name"
            required
          />
          <FormInput
            name="price"
            type="integer"
            onChange={this.handleChange}
            value={this.state.price}
            label="Price"
            required
          />
          <FormInput
            name="stock"
            type="number"
            onChange={this.handleChange}
            value={this.state.stock}
            label="Avilable Stock"
            required
          />
          <div className="buttonandloader">
              <CustomButton type="submit"> Save </CustomButton>
              {this.state.loading ? (
                <div className="container">
                  <div className="loader"></div>
                </div>
              ) : null}
            </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(withRouter(EditProduct));
