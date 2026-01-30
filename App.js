import React from "react";
import { createRoot } from "react-dom/client";

const Header = ()=>{
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Cart</li>
          <li>Login</li>
          <li>Register</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  )
}

const Res_Card = ({restaurantData})=>{
  const {name, cloudinaryImageId, cuisines, avgRatingString, sla} = restaurantData.info;
  return (
    <div className="card">
      <div className="img-container">
        <img className="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} alt="" />
      </div>
      <h3>{name}</h3>
      <h5>{cuisines}</h5>
      <h5>{avgRatingString}</h5>
      <h5>{sla.deliveryTime} Minutes</h5>
    </div>
  )
}

const restList =[
{
"info": {
"id": "10576",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
"locality": "6th Block",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.2,
"parentId": "721",
"avgRatingString": "4.2",
"totalRatingsString": "22K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 1.2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "66% OFF",
"subHeader": "UPTO ₹126",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.6",
"ratingCount": "3.6K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
"type": "WEBLINK"
}
},
{
"info": {
"id": "780130",
"name": "WeFit - Protein Bowls, Salads & Sandwiches",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/cc54fc48-a255-43e9-8164-5760edee2a47_780130.jpg",
"locality": "1ST MAIN, JAKKASANDRA",
"areaName": "KORAMANGALA",
"costForTwo": "₹250 for two",
"cuisines": [
"Healthy Food",
"Salads",
"Keto",
"Snacks"
],
"avgRating": 4.7,
"parentId": "355285",
"avgRatingString": "4.7",
"totalRatingsString": "552",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "High%20Protein/rx%20tag%205.png",
"description": "High Protein"
},
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "High Protein",
"imageId": "High%20Protein/rx%20tag%205.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹699",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-1st-main-jakkasandra-koramangala-rest780130",
"type": "WEBLINK"
}
},
{
"info": {
"id": "780133",
"name": "LeanCrust Pizza- ThinCrust Experts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/521ae8ec-94f4-4e78-b37c-8477a42783a2_780133.jpg",
"locality": "1ST MAIN, JAKKASANDRA",
"areaName": "KORAMANGALA",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Italian",
"Desserts"
],
"avgRating": 4.5,
"parentId": "11216",
"avgRatingString": "4.5",
"totalRatingsString": "407",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹699",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-1st-main-jakkasandra-koramangala-rest780133",
"type": "WEBLINK"
}
},
{
"info": {
"id": "586682",
"name": "Dum Safar Biryani",
"cloudinaryImageId": "aouhnkmtmchfkiowm8ou",
"locality": "1st Block",
"areaName": "Koramangala",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"Kebabs",
"North Indian",
"Barbecue"
],
"avgRating": 3.9,
"parentId": "351013",
"avgRatingString": "3.9",
"totalRatingsString": "734",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "66% OFF",
"subHeader": "UPTO ₹126",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/dum-safar-biryani-1st-block-koramangala-rest586682",
"type": "WEBLINK"
}
},
{
"info": {
"id": "667571",
"name": "Popeyes",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/11/5e24e79a-fdf5-4c6c-b200-64aa6c40e2b4_667571.jpg",
"locality": "hosur Road Lakkasandra",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.5,
"parentId": "397044",
"avgRatingString": "4.5",
"totalRatingsString": "4.6K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 2.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "2.9K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/popeyes-hosur-road-lakkasandra-koramangala-rest667571",
"type": "WEBLINK"
}
},
{
"info": {
"id": "718430",
"name": "The Pizza Bakery - Wood Fired Sourdough",
"cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
"locality": "BTM Layout",
"areaName": "Koramangala",
"costForTwo": "₹700 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Continental",
"Beverages"
],
"avgRating": 4.5,
"parentId": "522292",
"avgRatingString": "4.5",
"totalRatingsString": "3.1K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-30 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/the-pizza-bakery-wood-fired-sourdough-btm-layout-koramangala-rest718430",
"type": "WEBLINK"
}
},
{
"info": {
"id": "717421",
"name": "Paris Panini - Gourmet Sandwiches & Wraps",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/1b14de7e-7efc-4eaa-aa07-95f1ab50dc58_717421 (1).jpg",
"locality": "BTM Layout",
"areaName": "Koramangala",
"costForTwo": "₹500 for two",
"cuisines": [
"sandwich",
"wrap",
"Fast Food",
"Pastas",
"Italian",
"Salads",
"Healthy Food",
"Desserts",
"Continental"
],
"avgRating": 4.6,
"parentId": "21019",
"avgRatingString": "4.6",
"totalRatingsString": "5.1K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-30 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Sandwiches.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Sandwiches.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-btm-layout-koramangala-rest717421",
"type": "WEBLINK"
}
},
{
"info": {
"id": "534235",
"name": "Cheesecake & Co.",
"cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹250 for two",
"cuisines": [
"Bakery"
],
"avgRating": 4.6,
"veg": true,
"parentId": "387417",
"avgRatingString": "4.6",
"totalRatingsString": "3.9K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 1.3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹50 OFF",
"subHeader": "ABOVE ₹99",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.1",
"ratingCount": "151"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-koramangala-rest534235",
"type": "WEBLINK"
}
},
{
"info": {
"id": "5934",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.1,
"parentId": "166",
"avgRatingString": "4.1",
"totalRatingsString": "104K+",
"sla": {
"deliveryTime": 24,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 06:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "4.4K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
"type": "WEBLINK"
}
},
{
"info": {
"id": "59627",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "ntjshqsv2k7vxtv7vmib",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹251 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "4961",
"avgRatingString": "4.3",
"totalRatingsString": "18K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "30-40 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹79"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "2.1K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-koramangala-rest59627",
"type": "WEBLINK"
}
},
{
"info": {
"id": "656392",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
"locality": "1st Block",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.4,
"parentId": "2",
"avgRatingString": "4.4",
"totalRatingsString": "4.8K+",
"sla": {
"deliveryTime": 19,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
"type": "WEBLINK"
}
},
{
"info": {
"id": "23678",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b9564130-be0f-4136-a8e1-6913cf24446d_23678.JPG",
"locality": "5th Block",
"areaName": "Koramangala",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "66K+",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 1.3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹100 OFF",
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
"type": "WEBLINK"
}
},
{
"info": {
"id": "894198",
"name": "KARIM'S- Original from Jama Masjid Delhi - 6",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/61ace20b-c3ca-46ef-b278-9ab08d2102fe_894198.jpg",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹900 for two",
"cuisines": [
"Mughlai",
"Kebabs",
"Indian",
"North Indian",
"Biryani",
"Tandoor",
"Punjabi",
"Lucknowi",
"Grill"
],
"avgRating": 4.1,
"parentId": "630402",
"avgRatingString": "4.1",
"totalRatingsString": "490",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 0.2,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "0.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-30 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹999",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.8",
"ratingCount": "184"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/karims-original-from-jama-masjid-delhi-6-koramangala-rest894198",
"type": "WEBLINK"
}
},
{
"info": {
"id": "158855",
"name": "Candice's Gourmet Sandwiches & Wraps",
"cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
"locality": "5th Block",
"areaName": "Koramangala",
"costForTwo": "₹600 for two",
"cuisines": [
"Salads",
"sandwich",
"Snacks"
],
"avgRating": 4.6,
"parentId": "465403",
"avgRatingString": "4.6",
"totalRatingsString": "4.6K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 0.2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "0.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-30 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹899",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-rest158855",
"type": "WEBLINK"
}
},
{
"info": {
"id": "621512",
"name": "The Belgian Waffle Co.",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/29ddfffe-7016-4548-ae60-1a8f348ffbe6_621512.jpg",
"locality": "K.H.B Colony",
"areaName": "Koramangala",
"costForTwo": "₹200 for two",
"cuisines": [
"Waffle",
"Desserts",
"Ice Cream",
"Beverages"
],
"avgRating": 4.6,
"veg": true,
"parentId": "2233",
"avgRatingString": "4.6",
"totalRatingsString": "2.4K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 01:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹100 OFF",
"subHeader": "ABOVE ₹799",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-k-h-b-colony-koramangala-rest621512",
"type": "WEBLINK"
}
},
{
"info": {
"id": "671928",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/aef064e8-0bf8-4750-8178-96e260ce7004_671928.JPG",
"locality": "7th Block",
"areaName": "Koramangla",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.2,
"parentId": "547",
"avgRatingString": "4.2",
"totalRatingsString": "6.3K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 1.2,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹799",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
"type": "WEBLINK"
}
},
{
"info": {
"id": "780136",
"name": "Daily Kitchen - Everyday Homely Meals",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/44937020-e3f6-4a80-845e-e6d927d554eb_780136.jpg",
"locality": "1ST MAIN, JAKKASANDRA",
"areaName": "KORAMANGALA",
"costForTwo": "₹250 for two",
"cuisines": [
"Home Food",
"Indian",
"Thalis"
],
"avgRating": 4.4,
"parentId": "444382",
"avgRatingString": "4.4",
"totalRatingsString": "735",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "20-30 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹699",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/daily-kitchen-everyday-homely-meals-1st-main-jakkasandra-koramangala-rest780136",
"type": "WEBLINK"
}
},
{
"info": {
"id": "430368",
"name": "Kebapci - Turkish BBQ & More",
"cloudinaryImageId": "82cee87165a12942080a2df5a3b46fb9",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹600 for two",
"cuisines": [
"Turkish",
"Middle Eastern",
"Lebanese"
],
"avgRating": 4.3,
"parentId": "666362",
"avgRatingString": "4.3",
"totalRatingsString": "2.8K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 0.2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "0.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-30 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "4.7K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/kebapci-turkish-bbq-and-more-koramangala-rest430368",
"type": "WEBLINK"
}
},
{
"info": {
"id": "41913",
"name": "Chinita Real Mexican Food",
"cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹750 for two",
"cuisines": [
"Mexican",
"Salads",
"Desserts",
"Beverages"
],
"avgRating": 4.5,
"parentId": "5064",
"avgRatingString": "4.5",
"totalRatingsString": "8.1K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 0.2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "0.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-30 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹166 OFF",
"subHeader": "ABOVE ₹999",
"discountTag": "FLAT DEAL",
"headerTypeV2": 12
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "2.2K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/chinita-real-mexican-food-koramangala-rest41913",
"type": "WEBLINK"
}
},
{
"info": {
"id": "375041",
"name": "Andhra Gunpowder",
"cloudinaryImageId": "byilgyrcfz690ryoasww",
"locality": "6th Block",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Andhra",
"Biryani",
"South Indian"
],
"avgRating": 4.5,
"parentId": "10496",
"avgRatingString": "4.5",
"totalRatingsString": "6.6K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 0.3,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "0.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-31 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-5a9fc589-6f1c-47e1-bb20-99b5e1af72ed"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-6th-block-koramangala-rest375041",
"type": "WEBLINK"
}
}
]

const Body = ()=>{
  return (
    <div className="Body">
      <div className="search">
        <h4>Search</h4>
      </div>
      <div className="res-container">
        {
          restList.map((restaurant)=>(
            <Res_Card key={restaurant.info.id} restaurantData = {restaurant}/>
          ))
        }
      </div>
    </div>    
  )
}

const Applayout = ()=>{
  return (
    <div>      
      <Header/>
      <Body/>
    </div>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<Applayout/>);
