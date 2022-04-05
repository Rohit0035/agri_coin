import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Dpositbanner from "../../assets/img/dpositbanner.jpg";
import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Qrcode from '../../assets/img/qr-code.jpeg';



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
                         name="user_id"
                         placeholder="USER ID*"
                         type="number"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="user_name"
                         placeholder="USERNAME*"
                         type="text"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="email"
                         placeholder="EMAIL ID*"
                         type="email"
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="phonenumber"
                         placeholder="PHONE NUMBER*"
                         type="number"
                        />
                    </div>
                    <div className="col-lg-12 mb-3">
                     <input
                         name="hastag"
                         placeholder="HASHTAG*"
                         type="text"
                        />
                    </div>
                    <div className="col-lg-12 mb-3">
                     <select className="form-control select-st">
                         <option>SELECT PAYMENT METHOD</option>
                         <option>USDT</option>
                         <option>TRX</option>
                      </select>
                    </div> 
                    <div className="qr-box">
                       <Row>
                          <Col lg="4">
                             <div className="cod-2">
                               <img src={Qrcode}   width="100%" />
                             </div>
                          </Col>
                          <Col lg="8">
                              <div className="cod-1">
                                  <p>TVZAQK6STYPYK8GNG6RMMPKWDBDPIWBZBO</p>
                                  <CopyToClipboard text="TVZAQK6STYPYK8GNG6RMMPKWDBDPIWBZBO">
                                    <button>Click to Copy</button>
                                  </CopyToClipboard>
                                  <ol>
                                    <li>Deposit Only USDT(TRC-20) or TRX to this address</li>
                                    <li>Only add TRC20 compliant address.</li>
                                    <li>Please copy the wallet address carefully</li>
                                    <li>Store the generated reference number for your record purpose</li>
                                    <li>Gynysys is not responsible for Any currency sent to an incorrect wallet address.</li>
                                  </ol>
                              </div>
                          </Col>
                       </Row>
                    </div>
              </form>
          </div>
        </div>
      </Row>
      </Container>
  </LayoutOne>
  );

 }


DepositForm.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default DepositForm;
