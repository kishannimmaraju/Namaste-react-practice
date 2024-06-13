import RestaurantCard from "./ResaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  //   let listOfRestaurantsJs = [];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restarunts
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={restrautList[0]} />
          <RestaurantCard resData={restrautList[1]} />
          <RestaurantCard resData={restrautList[2]} />
          <RestaurantCard resData={restrautList[3]} />
          <RestaurantCard resData={restrautList[4]} />
          <RestaurantCard resData={restrautList[5]} /> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
