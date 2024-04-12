import { MENU_ITEM_IMG_URL } from "../utils/constants";

const MenuItem = ({ menuItem }) => {
  const { name, price, description, imageId, defaultPrice } =
    menuItem?.card?.info || {};

  return (
    <>
      <div className="menu-left">
        <h2 className="font-bold">{name}</h2>
        <p className="text-sm">{price ? price / 100 : defaultPrice / 100}</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <div className="menu-right">
        <img
          alt="card-logo"
          className=""
          src={MENU_ITEM_IMG_URL + imageId}
        />
      </div>
    </>
  );
};

export default MenuItem;
