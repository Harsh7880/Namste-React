import { CDN_URL } from "../utils/constants";
export default ItemList = ({ data }) => {
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
          <img
            className="w-3/4"
            src={data.card.info.imageId ? CDN_URL + data.card.info.imageId : ""}
          />
        </div>
      </div>
    </div>
  );
};
