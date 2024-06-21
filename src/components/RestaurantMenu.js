import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3188294&lng=78.58737590000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setresInfo(json.data);
  };

  const { name, cuisines, costForTwo } =
    resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
      ?.info || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <h3>{name}</h3>
      <h5>
        {cuisines.join(", ")}- {costForTwo}
      </h5>
      <h4>Menu</h4>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>veg Items</li>
      </ul>
    </>
  );
};
export default RestaurantMenu;
