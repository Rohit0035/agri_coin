import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Dpositbanner from "../../assets/img/dpositbanner.jpg";
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Qrcode from '../../assets/img/qr-code.jpeg';
import Logo from '../../assets/img/logo/logo.png';
import axios from "axios";
// import swal from 'sweetalert';
class DepositForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer:"",
      amount:"",
      depsite_file:"",
      pay_method:"",
      customerId:"",
      firstname:"",
      lastname:"",
      email:"",
      mobile:"",
      password:"",
      cnfrmPassword:""
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
      axios
        .post(`http://35.154.134.118/api/admin/deposite_wallet/`, this.state)
        .then((response) => {
          console.log(response.data);
          // console.log(response.data.STATUSMSG);
          // if(response.data.STATUSMSG !== "Failed" && response.data.STATUSMSG !== "Failed" ){
          //   swal("Success!", "Recharge SuccessFull!", "success");
          // }
          // else {
          //   swal("Error!", "Recharge UnsuccssFull!", "error");
          // }
        })
      .catch((error) => {
        console.log(error.response);
  });
}

render() { 
  return (

    <LayoutOne>

    <Container fluid className="">
      <Row className="">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${Dpositbanner})`,
            width: "100%",
            padding:"35px 0px",
            backgroundSize:"cover"
          }}
        >
          <div className="deposit-form">
              <div className="dpositlogo mb-4">
                <img src= {Logo}   style={{width:150}} />
              </div>
              <form>
                   <div className="col-lg-12 mb-3">
                     <input
                         className="form-control"
                         placeholder="USER ID"
                         type="number"
                         name="customerId"
                         required
                         value={this.state.customerId}
                         onChange={this.changeHandler}
                      />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="firstname"
                         placeholder="USERNAME*"
                         type="text"
                         required
                         value={this.state.firstname}
                         onChange={this.changeHandler}
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="email"
                         placeholder="EMAIL ID*"
                         type="email"
                         required
                         value={this.state.email}
                         onChange={this.changeHandler}
                        />
                    </div> 
                    <div className="col-lg-12 mb-3">
                     <input
                         name="mobile"
                         placeholder="PHONE NUMBER*"
                         type="number"
                         required
                         value={this.state.mobile}
                         onChange={this.changeHandler}
                        />
                    </div>
                    <div className="col-lg-12 mb-3">
                     <input
                         name="amount"
                         placeholder="HASHTAG*"
                         type="number"
                         required
                         value={this.state.amount}
                         onChange={this.changeHandler}
                        />
                    </div>
                    <div className="col-lg-12 mb-3">
                     <select className="form-control select-st" name="pay_method"   required
                         value={this.state.pay_method}
                         onChange={this.changeHandler}>
                         <option>SELECT PAYMENT METHOD</option>
                         <option>USDT</option>
                         <option>TRX</option>
                      </select>
                    </div> 
                    <div className="qr-box">
                       <Row>
                          <Col lg="4">
                             <div className="cod-2">
                               <img src= {Qrcode} style={{ width:100}} 
                              name="depsite_file"  />
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
                    <div className="col-lg-12 mb-3">
                     <label>DEPOSIT SCREEN SHOT*</label>
                     <input
                         name="File"
                         placeholder=""
                         type="file"
                        />
                    </div>
              </form>
              <Button className="dp-submit mt-3">
                  Submit Details
              </Button>
          </div>
        </div>
      </Row>
      </Container>
  </LayoutOne>
  );

 }
}

DepositForm.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default DepositForm;
