import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Body from "./components/Body";

// const restrautList = {
//   type: "restaurant",
//   data: {
//     type: "F",
//     id: "321517",
//     name: "FOOD PLANET RESTAURANT",
//     uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
//     city: "22",
//     area: "Majra",
//     totalRatingsString: "50+ ratings",
//     cloudinaryImageId: "ykboewqeoxnne8fgrnui",
//     cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
//     tags: [],
//     costForTwo: 20000,
//     costForTwoString: "₹200 FOR TWO",
//     deliveryTime: 25,
//     minDeliveryTime: 25,
//     maxDeliveryTime: 25,
//     slaString: "25 MINS",
//     lastMileTravel: 0.699999988079071,
//     slugs: {
//       restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
//       city: "dehradun",
//     },
//     cityState: "22",
//     address:
//       "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
//     locality: "Patel Nagar",
//     parentId: 81850,
//     unserviceable: false,
//     veg: false,
//     select: false,
//     favorite: false,
//     tradeCampaignHeaders: [],
//     aggregatedDiscountInfo: {
//       header: "50% off",
//       shortDescriptionList: [
//         {
//           meta: "50% off | Use WELCOME50",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       descriptionList: [
//         {
//           meta: "50% off up to ₹100 | Use code WELCOME50",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       subHeader: "",
//       headerType: 0,
//       superFreedel: "",
//     },
//     aggregatedDiscountInfoV2: {
//       header: "50% OFF",
//       shortDescriptionList: [
//         {
//           meta: "Use WELCOME50",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       descriptionList: [
//         {
//           meta: "50% off up to ₹100 | Use code WELCOME50",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       subHeader: "",
//       headerType: 0,
//       superFreedel: "",
//     },
//     chain: [],
//     feeDetails: {
//       fees: [],
//       totalFees: 0,
//       message: "",
//       title: "",
//       amount: "",
//       icon: "",
//     },
//     availability: {
//       opened: true,
//       nextOpenMessage: "",
//       nextCloseMessage: "",
//     },
//     longDistanceEnabled: 0,
//     rainMode: "NONE",
//     thirdPartyAddress: false,
//     thirdPartyVendor: "",
//     adTrackingID: "",
//     badges: {
//       imageBased: [],
//       textBased: [],
//       textExtendedBadges: [],
//     },
//     lastMileTravelString: "0.6 kms",
//     hasSurge: false,
//     sla: {
//       restaurantId: "321517",
//       deliveryTime: 25,
//       minDeliveryTime: 25,
//       maxDeliveryTime: 25,
//       lastMileTravel: 0.699999988079071,
//       lastMileDistance: 0,
//       serviceability: "SERVICEABLE",
//       rainMode: "NONE",
//       longDistance: "NOT_LONG_DISTANCE",
//       preferentialService: false,
//       iconType: "EMPTY",
//     },
//     promoted: false,
//     avgRating: "2.8",
//     totalRatings: 50,
//     new: false,
//   },
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
