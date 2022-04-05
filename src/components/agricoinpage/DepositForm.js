import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Dpositbanner from "../../assets/img/dpositbanner.jpg";
import Logo from "../../assets/img/logo/logo.png";

import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";




const DepositForm = ({ data, spaceBottomClass }) => {
    
  return (
    <LayoutOne>
    <Container fluid className="">
      <Row className="">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${Dpositbanner})`,
            width: "100%",
            padding:"100px 0px",
            backgroundSize:"cover"
          }}
        >
          <div className="deposit-form">
              <h4 className="mt-3 mb-4" style={{fontWeight:600}}>Soxycoin Deposit Form</h4>
              <form>
                   <div className="col-lg-12 mb-3">
                     <input
                         name="Name"
                         placeholder="Name*"
                         type="text"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="HashTag"
                         placeholder="Subject*"
                         type="text"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="ownerWallet"
                         placeholder="Soxicoin owner wallet*"
                         type="text"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="Methode"
                         placeholder="Payment Methode*"
                         type="text"
                        />
                    </div>
                    <div className="col-lg-12 mb-3">
                     <input
                         name="totalcoin"
                         placeholder="Total Soxycoin Coins*"
                         type="text"
                        />
                    </div> 
              </form>
          </div>
        </div>
      </Row>
      </Container>
  </LayoutOne>
  );

};

DepositForm.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default DepositForm;
