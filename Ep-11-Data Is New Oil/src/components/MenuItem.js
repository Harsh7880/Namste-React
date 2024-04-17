import { MENU_ITEM_IMG_URL } from "../utils/constants";

const MenuItem = ({ menuItem }) => {
  const { name, price, description, imageId, defaultPrice } =
    menuItem?.card?.info || {};

  return (
    <>
      <div className="menu-left w-9/12">
        <h2 className="font-bold">{name}</h2>
        <p className="text-sm">{price ? price / 100 : defaultPrice / 100}</p>
        <p className="text-xs text-gray-700">{description}</p>
      </div>
      <div className="menu-right w-3/12">
        <img
          alt="card-logo"
          src={MENU_ITEM_IMG_URL + imageId}
        />
      </div>
    </>
  );
};

export default MenuItem;
