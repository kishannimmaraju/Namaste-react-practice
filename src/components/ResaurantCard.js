import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
  // console.log(resData);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(" ,")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>&#8377;{costForTwo / 100}</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};

export default RestaurantCard;
