import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class WalletHeader extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    MobileNo: 8121787777,
    APIKey: "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
    REQTYPE: "0.00",
    RESPTYPE: "JSON"
    };
  } 

  componentDidMount() {
    
    // let { id } = this.props.match.params;
    axios
      .get("http://35.154.134.118/api/admin/balanceApi")
      .then((response) => {
         console.log(response.data.data);
        this.setState({
           REQTYPE: response.data.data});
      })
      .catch((error) => {
        console.log(error);
      });
    }

    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    
    return (
          
        <Link to="/wallet">
              <div className="wt-text">
                <i className="pe-7s-wallet" />
                {/* <span>INR:{this.state.data.data}</span> */}
                <span>INR:{this.state.REQTYPE}</span>
              </div>
        </Link>
      );

    }
}

export default WalletHeader;
