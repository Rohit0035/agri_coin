import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
// import CountDownFive from "../../wrappers/countdown/CountDownFive";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
// import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
// import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import FeatureIconSeven from "../../wrappers/feature-icon/FeatureIconSeven";
import CategoryFiveGrid from "../../wrappers/category/CategoryFiveGrid";
import HeroSliderTwentyNine from "../../wrappers/hero-slider/HeroSliderTwentyNine";
import ByCategory from "../../wrappers/content-home/ByCategory";
import ServiceAgricoin from "../../components/agricoinpage/ServiceAgricoin";
import HomeCategory from "../../components/agricoinpage/HomeCategory";

// import SecondSection from "../../wrappers/content-home/SecondSection";


const HomeFurnitureFour = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>NEXUS PAY</title>
        <meta
          name="description"
          content="Furniture home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
        headerPositionClass="header-absolute"
      >
        {/* hero slider */}
        <HeroSliderTwentyNine />
        {/* category grid */}
        <HomeCategory spaceBottomClass="pb-70" />

        {/* <SecondSection /> */}

        {/* feature icon */}
        <FeatureIconSeven spaceBottomClass="pb-70" />

        <ServiceAgricoin/>

         <ByCategory />
       

        {/* video popup */}
        {/* <VideoPopupTwo /> */}
        {/* tab product */}
        
        {/* countdown */}
        {/* <CountDownFive
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          bgImg="/assets/img/bg/bg-6.jpg"
          image="/assets/img/banner/deal-9.png"
          dateTime="November 13, 2021 12:12:00"
        /> */}
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />
        {/* image slider */}
        {/* <ImageSliderTwo /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurnitureFour;
