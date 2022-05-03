import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPostsNoSidebar from "../../wrappers/blog/BlogPostsNoSidebar";
import { Col, Container } from "reactstrap";
import moment from "moment";
import axios from "axios";

class OrderRecharge extends React.Component {
  
  constructor(props) {
    super(props)
  this.state={
 
  }
    
  }  

  render() { 

    const {table} = this.props;

 

  return (
    <Fragment>
      <MetaTags>
        <title>Soxycoin</title>
        <meta
          name="description"
          content="Blog of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/Orderrecharge"}>
        Recharge List
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-60 pb-60 blog-no-sidebar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mr-20">
                  <div className="row">
                    {/* order */}
                    
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      
                        <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>656565</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>323233</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>323233</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                       <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>323233</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="order-box">
                            <ul>
                                <li>Transaction ID : <span>323233</span></li>
                                <li>Date : <span>05/02/2022</span></li>
                                <li>Amount : <span>120</span></li>
                                <li>Service Name : <span>mobile recharge</span></li>
                                <li>operator : <span>Airtel</span></li>
                            </ul>
                        </div>
                    </div>
                  
                   
                  </div>

                  {/* blog pagination */}
                  <BlogPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

}

export default OrderRecharge;
