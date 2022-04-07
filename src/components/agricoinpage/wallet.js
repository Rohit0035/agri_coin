import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";
import TableHistory from "../agricoinpage/TableHistory"
import { Link } from "react-router-dom";
import { Button } from "react-scroll";




const Wallet = ({ data, spaceBottomClass }) => {
    
  return (
    <LayoutOne>
    <Container fluid className="mb-4">
      <Row className="mb-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${Cloth})`,
            width: "100%",
            padding:"100px 0px",
            backgroundSize:"cover"
          }}
        >
          <div className="">
            <h1 className="text-light text-center">Wallet</h1>
          </div>
        </div>
      </Row>
      </Container>
      <section style={{margin:"70px 0px"}}>
        <Container>
        <Row>
        <Col md="6">
                <div className="sr-3">
                   <h4 className="sr-h">Wallet Details </h4>
                      <ul className="sr-ul">
                      <li  className="sr-li dr">Available Wallet Balance : <span  className="sr-span">INR:100</span></li>
                    </ul>
                    <div className="sr-div">
                        <Link to="/depositform">
                        <button className="sr-btn1" >Deposit to Wallet</button>
                        </Link>
                    </div>
                    <div className="sr-div">
                        <Link to="/walletwithdraw">
                        <button className="sr-btn1">Withdraw to Wallet</button>
                        </Link>
                    </div>
                </div>
            </Col>
            <Col md="6">
                <div className="sr-3">
                   <h4 className="sr-h">Recent Transaction </h4>
                   <TableHistory/>
                </div>
            </Col>
        </Row>

        
    </Container> 
    </section>

  </LayoutOne>
  );

};

Wallet.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default Wallet;
