import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


const WalletHeader = ({ data, spaceBottomClass }) => {
    
    return (
           
     
        
        <Link to="/wallet">
        <div className="wt-text">
           <i className="pe-7s-wallet" />
           <span>INR:200</span>
        </div>
        </Link>
      );

      

};

WalletHeader.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default WalletHeader;
