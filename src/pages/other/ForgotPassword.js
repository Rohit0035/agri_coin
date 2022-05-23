// import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import axios from "axios";
import swal from "sweetalert";
// import swal from 'sweetalert';
class ForgotPassword extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            password:"",
            cnfrmPassword:""
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        //let { id } = this.props.match.params;
        axios
          .post(`http://35.154.134.118:/api/user/forgetpass_user`, this.state, {
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          })
          .then((response) => {
            console.log(response.data.STATUSMSG);
            if(response.data.STATUSMSG !== "Failed" && response.data.STATUSMSG !== "Failed" ){
              swal("Success!", " Password Change Successfully ", "success");
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
      
      handlechange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
      };
      
render() {

  return (
    <LayoutOne>
    <Container fluid className="mb-4">
      <Row className="mb-5">
      
        
    </Row>
  </Container>
       <section style={{margin:"70px 0px"}}>
         <Container>
            <Row>
            <Col md="12">
                   <div className="resetpass">
                       <h3>Forgot Password</h3>
                       <br></br>
                       <Form onSubmit={this.submitHandler}>
                          <Input
                              type="Password"
                              placeholder="New Password"
                              name="password"
                              value={this.state.password}
                              onChange={this.changeHandler}
                              >
                          </Input>
                          <br></br>
                          <Input
                              type="Password"
                              placeholder="Confirm Password"
                              name="cnfrmPassword"
                              value={this.state.cnfrmPassword}
                              onChange={this.changeHandler}
                              >
                          </Input>
                            <br></br> 
                            <div className="login-toggle-btn ">
                                <button type="submit" className="sr-btn1 ">
                                   Submit
                                </button>
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
export default ForgotPassword;