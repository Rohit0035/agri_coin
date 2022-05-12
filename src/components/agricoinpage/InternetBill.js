import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import alldth from '../../assets/img/alldth.png';
import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";
import { Button } from "react-scroll";


const InternetBill = ({ data, spaceBottomClass }) => {
    
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
                    <Form>
                    <Col md="12">
                        <Input type="text"
                        className="form-control"
                        placeholder="Select Operator"
                          />
                    </Col>
                    <br></br>
                    <Col md="12">
                        <Input type="text"
                        className="form-control"
                        placeholder="Registered Mobile No./Subscriber ID/Customer Id"
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

};

InternetBill.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default InternetBill;
