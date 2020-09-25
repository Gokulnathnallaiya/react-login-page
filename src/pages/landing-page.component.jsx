import React from "react";
import "./landing-page.styles.css";
import { connect } from "react-redux";
import Card from "../components/card/card.component";
import axios from "axios";
import { withRouter } from "react-router-dom";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
    };
  }

  movetoedit = () => {};

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get("https://express-sql-app.herokuapp.com/products/all")
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data }, () => {
          console.log(this.state);
        });
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div className="content">
        <span className="span">{this.props.currentUser}</span>
        <span className="span">Role: {this.props.role}</span>
        <h3>products</h3>
        {this.state.loading ? (
          <div className="container-loader">
            <div className="loader"></div>
          </div>
        ) : null}
        <div className="card-list">
          {this.state.products.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              stock={item.stock}
              key={item._id}
              handlechange={() => {
                this.props.history.push({
                  pathname: "/editproduct",
                  state: {
                    name: item.name,
                    price: item.price,
                    stock: item.stock,
                    id:item._id,
                  },
                });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  role: state.user.role,
});
export default connect(mapStateToProps)(withRouter(LandingPage));
