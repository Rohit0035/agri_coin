// import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col, Input, InputGroup, Form, Button } from "reactstrap";
import axios from "axios";
// import swal from 'sweetalert';
class TableHistory extends React.Component {
 constructor(props) {
   super(props)
 
   this.state = {
   }
 }
 componentDidMount(){
   console.log("hello",this.props.table)
 }
//  componentDidMount() {
//   let { id } = this.props.match.params;
    
//     let userInfo ={};
//     userInfo = JSON.parse( localStorage.getItem('userInfo') );
//   console.log('@@@@@',userInfo)
//    if(userInfo === null){
        
//    } else{
//     axios
//     .get(`http://35.154.134.118/api/admin/getusertransaction/`+userInfo._id)
//     .then((response) => {
//        console.log(response.data);
//       this.setState({wallet: response.data.data});
//     })
//     .catch((error) => {
//       console.log(error.response);
//     });
//    }
    
    
//     }

render() {
const {table} = this.props;
  return (

  <section style={{margin:"30px 0px"}}>
          <Container>
              <Row>
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>ORDER ID</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>QUANTITY</th>
                            <th>AMOUNT</th>
                            {/* <th>Unit Price</th> */}
                            <th>Order Status</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {/* {this.props.table?.map((wtable) =>(
                              <tr key={wtable._id}>
                                <td className="product-price-cart">
                                  <span className="amount">
                                   ghhh
                                  </span>
                                </td>
                                <td className="product-thumbnail">
                                 ghhh
                                </td>

                                <td className="product-name text-center">
                                  
                                 fgfffg
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount">
                                    ghh
                                  </span>
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                 ffgfgfg
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                 gggggggf
                                </td>


                              </tr>
                              ))} */}
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
              </Row>
          </Container> 
        </section>
     
    );
  }
}
export default TableHistory;