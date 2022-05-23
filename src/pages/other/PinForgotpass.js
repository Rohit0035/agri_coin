// import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
// import swal from 'sweetalert';
class PinForgotPass extends React.Component {
 
    constructor(props) {
        super(props);
    
        this.state = {

            customerId:""
        }
    }
        
      handlechange = (e) => {
            e.preventDefault();
            this.setState({ [e.target.name]: e.target.value });
      };

      submitHandler = (e) => {
        e.preventDefault();
        //let { id } = this.props.match.params;
        axios
          .post(`http://35.154.134.118:/api/user/verifycode`, this.state, {
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
              
            },
          })
          .then((response) => {
            console.log(response.data.STATUSMSG);
            if(response.data.STATUSMSG !== "Failed" && response.data.STATUSMSG !== "Failed" ){
              swal("Success!", " Pin Submitted ", "success");
              this.props.history.push("/ForgotPassword");
            }
            else {
              swal("Error!", "Try Again", "error");
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
    
      };

      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

render() {

  return (
    <LayoutOne>
  
       <section style={{margin:"70px 0px"}}>
         <Container>
           <Row>
              <Col md="12">
                   <div className="resetpass">
                       <h3>Forgot Password Pin</h3>
                       <br></br>
                       <Form onSubmit={this.submitHandler}>
                          <Input
                              type="number"
                              required
                              placeholder="Enter Your Pin"
                              name="customerId"
                              value={this.state.customerId}
                              onChange={this.handlechange}
                              >
                          </Input>
                            <br></br> 
                            <div className="login-toggle-btn ">
                                <Button type="submit" className="sr-btn1 ">
                                   Submit
                                </Button>
                            </div>
                       </Form>
                   </div>
              </Col>
            </Row>  
          </Container> 
        </section>
      </LayoutOne>
    );
  }
}
export default PinForgotPass;