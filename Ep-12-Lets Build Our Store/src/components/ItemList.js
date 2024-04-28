import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

export default ItemList = ({ data }) => {

  const dispatch = useDispatch();
  const handleAddItem = (data) => {
    dispatch(addItem(data));
  }
  return (
    <div>
      <div className="flex p-4">
        <div className="w-9/12  p-2 text-left border bottom-2">
          <h4>{data.card.info.name}</h4>
          <p className="mb-2">
            ₹
            {data.card.info.price
              ? data.card.info.price / 100
              : data.card.info.defaultPrice /100}
          </p>
          <p>
            ⭐️ {data.card.info.ratings.aggregatedRating.rating ? data.card.info.ratings.aggregatedRating.rating : ""} (
            {data.card.info.ratings.aggregatedRating.ratingCountV2 ? data.card.info.ratings.aggregatedRating.ratingCountV2: ""})
          </p>
          <p className="text-xs">{data.card.info.description}</p>
        </div>
        <div className="w-3/12 flex items-center justify-center">
          <div>
            <button 
            onClick={() => handleAddItem(data)}
             className="absolute bg-white py-1 px-3 border border-b-2 rounded-lg align-text-bottom">
              Add
            </button>
          </div>
          <img
            className="w-3/4"
            src={data.card?.info?.imageId ? CDN_URL + data?.card?.info?.imageId : ""}
          />
        </div>
      </div>
    </div>
  );
};
