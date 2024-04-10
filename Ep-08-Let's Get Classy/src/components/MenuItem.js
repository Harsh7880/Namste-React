
import { MENU_ITEM_IMG_URL } from "../utils/constants";

const MenuItem = ({menuItem}) => {


  const { name, price, description, imageId,defaultPrice } = menuItem?.card?.info || {};

    return(
    <>
     <div className="menu-left">
            <h2 className="menu-item-title">{name}</h2>
            <p className="price">{price ? price/100: defaultPrice/100}</p>
            <p className="more-details">
              {description}
            </p>
          </div>
          <div className="menu-right">
            <img
              alt="card-logo"
              className="card-logo"
              src= { MENU_ITEM_IMG_URL + imageId }
            />
          </div>
    </>
    )
}

export default MenuItem;