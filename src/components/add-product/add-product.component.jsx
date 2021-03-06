import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./add-product.styles.scss";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      stock: "",
      loading: false,
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();
    console.log("entered");
    this.setState({ loading: true });
    axios
      .post("https://express-sql-app.herokuapp.com/products/new", {
        name: this.state.name,
        price: this.state.price,
        stock: this.state.stock,
      })
      .then((res) => {
        console.log(JSON.stringify(res));
        this.setState({ loading: false });
        alert("Product added succesfully");
        this.props.history.push("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
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
              <CustomButton type="submit"> Add product </CustomButton>
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
  role: state.user.role,
});

export default connect(mapStateToProps)(withRouter(AddProduct));
