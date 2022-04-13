// import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import axios from "axios";
import swal from 'sweetalert';



class MobileRecharge extends React.Component {

// const MobileRecharge = ({ data, spaceBottomClass }) => {
  constructor(props) {
    super(props);
    this.state = {
      //service: "",
      code: "",
      re_type: "",
      allService:[],
      MobileNo:8121787777,
      APIKey: "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
      REQTYPE: "RECH",
      SERCODE: "",
      CUSTNO: "",
      REFMOBILENO: "",
      AMT: "",
      STV: "",
      RESPTYPE: "",
      serviceR:[]
    };
  }
  componentDidMount() {
    
    // let { id } = this.props.match.params;
    axios
      .get("http://35.154.134.118/api/admin/getOperators")
      .then((response) => {
         console.log(response.data.data);
        this.setState({ serviceR: response.data.data});
      })
      .catch((error) => {
        console.log(error);
      });
    }
    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
      e.preventDefault();
      // let { id } = this.props.match.params;
      axios
        .post(`http://35.154.134.118/api/admin/moRecharge/`, this.state)
        
        .then((response) => {
          console.log(response.data);

          swal("Success!", "Recharge SuccessFull!", "success");
          // this.props.history.push("/app/shiftmanagement/retailSellingPriceList");
        })
        .catch((error) => {
          console.log(error.response);
        });
    };

    render() {
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
            <h1 className="text-light text-center">Mobile Recharge</h1>
          </div>
        </div>
      </Row>
      </Container>
      <section style={{margin:"70px 0px"}}>
        <Container>
        <Row>
            <Col md="6">
                <Row>
                  <h4 className="sr-h4">Mobile Recharge</h4>
                  <div className="sr-1">
                  <Form className="m-1" onSubmit={this.submitHandler}>

                 
                    <Col md="12">
                        {/* <Input type="text"
                        className="form-control"
                        placeholder="Select Operator"
                          /> */}
                           {/* <Input
                type="select"
                name="service"
                value={this.state.service}
                onChange={this.changeHandler}
                defaultValue='jio'
              >
                {this.state.allService.map((service) => (
                  <>
                    <option
                      value={service.isoName}
                      key={service.isoName}>
                      {service.service + '('+ service.callingCodes[0]+')'+service.isoName}
                    </option>
                  </>
                    
                ))} 
                </Input> */}
                  <Input
                  type="select"
                  className="st-select"
                  name="SERCODE"
                  value={this.state.SERCODE}
                  onChange={this.changeHandler}>
                <option>Choose an operator</option>
                {this.state.serviceR?.map((servicep) => (
                  <option value={servicep.code} key={servicep._id}>
                    {servicep.service}
                  </option>
                ))}</Input>
                    </Col>
                    <br></br>
                    <Col md="12">
                        <Input type="number"
                        name="CUSTNO"
                        value={this.state.CUSTNO}
                        onChange={this.changeHandler}
                        className="form-control"
                        placeholder="Registered Mobile No."
                          />
                    </Col>
                    <small style={{color:"red",}}>(Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)</small>
                    <br></br>
                    <br></br>
                    <Col md="12">
                        <InputGroup>
                            <span className="sr-2">Rs.</span>
                            <Input 
                              className="form-control"
                              placeholder="Amount"
                              name="AMT"
                              type="number"
                              value={this.state.AMT}
                              onChange={this.changeHandler}
                            />
                        </InputGroup>
                    </Col>
                    <br></br>
                    <Button className="sr-btn"
                    >Proceed to Recharge</Button>
                    </Form>
                  </div>
                </Row>
            </Col>
            <Col md="6">
                <div className="sr-3">
                   <h4 className="sr-h">Consumer Details</h4>
                      <ul className="sr-ul">
                      <li className="sr-li">DTH Number: <span className="sr-span">44545</span></li>
                      <li  className="sr-li">Operator: <span  className="sr-span">Vodafone</span></li>
                      <li  className="sr-li">Amount: <span  className="sr-span">100rs</span></li>
                      <li  className="sr-li dr">Amount: <span  className="sr-span">Rs:100</span></li>
                    </ul>
                    <div className="sr-div">
                        <button className="sr-btn1">Make Payment</button>
                    </div>
                </div>
            </Col>
        </Row>

        
    </Container> 
    </section>

  </LayoutOne>
  );
        }
}

export default MobileRecharge;
