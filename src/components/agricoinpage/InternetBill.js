import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import alldth from '../../assets/img/alldth.png';
import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";
import { Button } from "react-scroll";
import axios from "axios";
import swal from "sweetalert";
class InternetBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceR:[],

    };
  }
  componentDidMount() {
    axios
      .get("http://35.154.134.118:8000/admin/dthlist/")
      .then((response) => {
      console.log(response.data.data);
  
      this.setState({ serviceR: response.data.data});
      })
        .catch((error) => {
          console.log(error.response);
        });
      }
 
  






  
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
            <h1 className="text-light text-center">DTH Recharge</h1>
          </div>
        </div>
      </Row>
      </Container>
      <section style={{margin:"70px 0px"}}>
        <Container>
        <Row>
            <Col md="6">
              <div className="text-box">
                <Row>
                  <h4 className="sr-h4">DTH Recharge</h4>
                  <div className="sr-1">
                  <Form className="m-1" onSubmit={this.submitHandler}>
                    <Col md="12">
                    <Input
                  type="select"
                  className="st-select"
                  name="code"
                  value={this.state.code}
                  onChange={this.changeHandler}>
                  <option>Choose an operator</option>
                  {this.state.serviceR?.map((servicep) => (
                  <option value={servicep.code} key={servicep._id}>
                  {servicep.service}
                  </option>))}
                </Input> 
                        {/* <Input type="text"
                        className="form-control"
                        placeholder="Select Operator"
                        name="biller_code"
                        value={this.state.biller_code}
                        onChange={this.changeHandler}
                          /> */}
                    </Col>
                    <br></br>
                    <Col md="12">
                        <Input type="text"
                        className="form-control"
                        placeholder="Registered Mobile No./Subscriber ID/Customer Id"
                        name="biller_code"
                        value={this.state.biller_code}
                        onChange={this.changeHandler}
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
                              name="AMTNO"
                              value={this.state.AMTNO}
                              onChange={this.changeHandlerAmount}
                            />
                        </InputGroup>
                    </Col>
                    <br></br>
                    <button className="sr-btn">Proceed to Recharge</button>
                    </Form>
                  </div>
                </Row>
              </div>
            </Col>
            <Col md="6">
                <div className="sr-3 text-center">
                    <img src= {alldth}  alt="image" />
                </div>
            </Col>
        </Row>
    </Container> 
    </section>
  </LayoutOne>
  );
}
}

export default InternetBill;
