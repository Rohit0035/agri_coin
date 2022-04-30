import PropTypes from "prop-types";
import React, { Component } from "react";

import LayoutOne from "../../layouts/LayoutOne";
import Dpositbanner from "../../assets/img/dpositbanner.jpg";
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Qrcode from '../../assets/img/qr-code.jpeg';
import Logo from '../../assets/img/logo/logo.png';
import axios from "axios"; 
import swal from 'sweetalert';
// class DepositForm extends React.Component {
  export default class DepositForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      walletId:"",
      data: {},
      amount:"",
      depsite_file:"",
      pay_method:"",
    // customerId:"",
    firstname:"",
      // lastname:"",
      email:"",
      mobile:"",
      // password:"",
      // cnfrmPassword:"",
      selectedFile: undefined,
      selectedName: "",
      // status: ""
    };
  }
  componentDidMount() {
    //  let { id } = this.props.match.params;
    axios
    .get(`http://35.154.134.118/api/admin/getone/626cd66f105abd6719d4c1fb`)
      
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data.walletId);

        this.setState({ data: response.data.data,
          walletId: response.data.data.walletId,
          firstname:response.data.data.customer.firstname,
          email:response.data.data.customer.email,
          mobile:response.data.data.customer.mobile,
          amount:response.data.data.amount,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
    }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };
  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("customer", this.state.customer);
    data.append("pay_method", this.state.pay_method);
    data.append("amount", this.state.amount);
    // data.append("status", this.state.status);
    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("depsite_file", file, file.name);
      }
   }
   for (var value of data.values()) {
    console.log(value);
  }
  for (var key of data.keys()) {
    console.log(key);
  }
  //  let { id } = this.props.match.params;
  axios.post(`http://35.154.134.118/api/admin/deposite_wallet`, data)
    .then((response) => {
    console.log(response);
    swal("Successful!", "You clicked the button!", "success");
    this.props.history.push("/");
  })
    .catch((error) => {
      console.log(error.response);
    });
  };



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
              <Form className="m-1" onSubmit={this.submitHandler}>
                   <div className="col-lg-12 mb-3">
                     <input
                         className="form-control"
                         placeholder="WALLET ID"
                         type="text"
                         name="walletId"
                         required
                         value={this.state.walletId}
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
                         type="taxt"
                         required
                         value={this.state.amount}
                         onChange={this.changeHandler}
                        />
                    </div>
                    <div className="col-lg-12 mb-3">
                     <select className="form-control select-st"
                         name="pay_method"   required
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
                         type="file"
                         onChange={this.onChangeHandler}  
                        />
                    </div>
                 
                <Button className="dp-submit mt-3">
                  Submit Details
                </Button>
                </Form>
              </div>
            </div>
          </Row>
        </Container>
      </LayoutOne>
    );
  }
}


