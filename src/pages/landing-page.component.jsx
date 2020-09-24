import React from "react";
import "./landing-page.styles.css";
import { connect } from "react-redux";
import axios from "axios";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.setState({ loading: true });
    axios
      .post("https://express-sql-app.herokuapp.com/findbyemail", {
        email: this.props.currentUser,
      })
      .then((res) => {
        console.log(res);
        this.setState(
          {
            products: JSON.parse(res.data.products),
          },
          () => console.log(this.state)
        );
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="content">
        <span className="span">{this.props.currentUser}</span>
        <h3>My products</h3>
        {this.state.loading ? (
          <div className="container">
            <div className="loader"></div>
          </div>
        ) : this.state.products.length === 0 ? (
          <h1>No products </h1>
        ) : (
          <div className="card">
          {this.state.products.map((item) => (
            
              <div className="card-items">{item}</div>
            
          ))}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(LandingPage);
