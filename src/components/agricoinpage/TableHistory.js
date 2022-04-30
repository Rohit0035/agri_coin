
import React from "react";
import { Container, Row } from "reactstrap";
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
                            <th>CUSTOMER ID</th>
                            <th>IMAGE</th>
                            <th>PAY METHOD</th>
                            <th>BILLER CODE</th>
                            <th>AMOUNT</th>
                            <th>MOBILE</th>
                            <th>STATUS</th>
                            {/* <th>action</th> */}
                          </tr>
                        </thead>
                        
                       {this.props.table.length > 0 ? this.props.table.map((table) =>{


                                return<>
                                <tr>
                                <td className="product-thumbnail">{table.walletId.customer}</td>
                  
                  
                                <td className="product-thumbnail"><img style={{width:"40px",height:"40px"}} src={table.walletId.depsite_file}/></td>
                                <td className="product-thumbnail">{table.walletId.pay_method}</td>
                                <td className="product-thumbnail">{table.amount}</td>
                                <td className="product-thumbnail">{table.biller_code}</td>
                                <td className="product-thumbnail">{table.number}</td>
                                <td className="product-thumbnail">
                                  <p className="tb-status">
                                    {table.status}
                                  </p>
                                  </td>
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