import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row,  Col, Input, InputGroup, Form, Card } from "reactstrap";
import { Link } from "react-router-dom";




const ServiceAgricoin = ({ data, spaceBottomClass }) => {
    
  return (
    <Container fluid className="mb-4">
    <section className="srevicegrid">
         <Container >
           <h1>OUR POPULAR SERVICES</h1>
           <p style={{color:"#008000"}}>What We Do </p>
           
            <Row>
               <Col md="6">
                  <Link>
                 <Card className="st-card">
                     <Row>
                        <Col md="2">
                           <i className="pe-7s-credit card_icon" />
                        </Col>
                        <Col md="10">
                           <h3>Digital Service</h3>
                           <p>SOXY introduced digital services worldwide through SOXY Crypto currency for using various kinds of Day-to-day digital Services. Enhanced APi were used to fetch accurate information at a quicker response were enabled. </p>
                        </Col>
                     </Row>
                 </Card>
                 </Link>
               </Col>
               <Col md="6">
               <Link>
                 <Card className="st-card">
                     <Row>
                        <Col md="2">
                           <i className="pe-7s-credit card_icon" />
                        </Col>
                        <Col md="10">
                           <h3>EMI Payments</h3>
                           <p>SOXY can also be used to paying EMI payments of Housing Loan EMI’s, Vehicle loan EMI’s, General Loans EMI’s. This will make user to utilize the SOXY crypto currency very effectively. Thus, making entire world EMI Services at a single click with SOXY. </p>
                        </Col>
                     </Row>
                 </Card>
                 </Link>
               </Col>
               <Col md="6">
                 <Link>
                 <Card className="st-card">
                     <Row>
                        <Col md="2">
                           <i className="pe-7s-cash card_icon" />
                        </Col>
                        <Col md="10">
                           <h3>Bill Payments</h3>
                           <p>Billpayments:  with the use of SOXY Crypto currency user can pay various bill payments like Electricity, Gas, etc….and much more. All relevant user details based on their Unique number; the required outstanding’s will be displayed. Thus, make user hassle free to utilise the services.</p>
                        </Col>
                     </Row>
                 </Card>
                 </Link>
               </Col>
               <Col md="6">
                 <Link>
                 <Card className="st-card">
                     <Row>
                        <Col md="2">
                           <i className="pe-7s-phone card_icon" />
                        </Col>
                        <Col md="10">
                           <h3>Phone Recharge And DTH</h3>
                           <p>SOXY introduced Mobile Recharge Services for both prepaid and post-paid worldwide through SOXY Crypto currency for using various kinds of mobile payments. DTH API were also developed to fetch accurate information for paying DTH Bills operator wise. Thus, gives soxy user a comfortness of paying Mobile bills and DTH bills.</p>
                        </Col>
                     </Row>
                 </Card>
                 </Link>
               </Col>
            </Row>
         </Container>
      </section>
     </Container>
  );

};

ServiceAgricoin.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default ServiceAgricoin;
