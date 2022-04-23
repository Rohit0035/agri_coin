import React from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

class SoxyPayTab extends React.Component {

    render() {
    return (
        <div
         
        >
          <div className="container">
            {/* section title */}
            <Tab.Container defaultActiveKey="bestSeller">
              <Nav
                variant="pills"
                className="sttt"
              >
                <Nav.Item>
                  <Nav.Link eventKey="bt-1" className="ftt-1">
                    <p className="ftt-2">Popular</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bt-2" className="ftt-1">
                    <p className="ftt-2">Special Recharge</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bt-3" className="ftt-1">
                    <p className="ftt-2">Top Up</p>
                  </Nav.Link>
                </Nav.Item>
                 <Nav.Item>
                  <Nav.Link eventKey="bt-4" className="ftt-1">
                    <p className="ftt-2">2G/3G/4G Data</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bt-5" className="ftt-1">
                    <p className="ftt-2">Full Talktime</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bt-6" className="ftt-1">
                    <p className="ftt-2">Roaming</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="ftt-3">
                <Tab.Pane eventKey="bt-1">
                  <div className="row">
                  <div className="table-content table-responsive cart-table-content tt-1">
                      <table>
                        <thead>
                          <tr>
                            <th>Talktime</th>
                            <th>Validity</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                              <tr >
                                <td className="product-thumbnail">
                                 ghghhgh
                                </td>

                                <td className="product-name">
                                  ghghghghg
                                </td>

                                <td className="product-price-cart">
                                 ggghghggh
                                </td>

                                <td className="product-quantity">
                                 hghghghghgh
                                </td>
                              </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-2">
                  <div className="row">
                   bnbmnmnmnm
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-3">
                  <div className="row">
                   nnmnmnmmn
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-4">
                  <div className="row">
                   nnmnmnmmnyyyyyyy
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-5">
                  <div className="row">
                   nnmnmnmmnuuuuuuuuuuuu
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="bt-6">
                  <div className="row">
                   nnmnmnmmnaaaaaaaaaaaaaaa
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      );
    };
  
}    
export default SoxyPayTab;
