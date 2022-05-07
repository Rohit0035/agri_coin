
import React from "react";
import { Container, Row } from "reactstrap";
import moment from "moment";

class TableHistory extends React.Component {
 constructor(props) {
   super(props)
 this.state={

 }
   
 }
render() {
const {table} = this.props;

  return (

  <section style={{margin:"30px 0px"}}>
          <Container>
              <Row>
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content usert-list">
                      <table>
                        <thead>
                          <tr>
                            <th>Wallet ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            {/* <th>BILLER CODE</th>
                            <th>AMOUNT</th>
                            <th>MOBILE</th>
                            <th>STATUS</th> */}
                            {/* <th>action</th> */}
                          </tr>
                        </thead>
                        
                       {this.props.table.length > 0 ? this.props.table.map((table) =>{


                                return<>
                                <tr>
                                <td className="product-thumbnail">{table.walletId._id}</td>
                  
                  
                                {/* <td className="product-thumbnail"><img style={{width:"40px",height:"40px"}} src={table.walletId.depsite_file}/></td> */}
                                {/* <td className="product-thumbnail">{table.walletId.pay_method}</td> */}
                                <td className="product-thumbnail">{table.add_amount}</td>
                                {/* <td className="product-thumbnail">{table.biller_code}</td> */}
                                <td className="product-thumbnail">{moment(table.createdAt).format("ll")}</td>
                                {/* moment('createdAt').format('MMMM Do YYYY') */}

                                {/* <td className="product-thumbnail">
                                  <p className="tb-status">
                                    {table.status}
                                  </p>
                                  </td> */}
                                </tr>
                        
                      </> }): null} 
                              
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