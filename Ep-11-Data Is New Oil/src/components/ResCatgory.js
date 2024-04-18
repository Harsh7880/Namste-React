import ItemList from "./ItemList";
import { useState } from "react";
const ResCatgory = ({ category }) => {
  const { itemCards } = category;
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="text-center">
      <div className="bg-gray-100">
        <div
          onClick={handleShow}
          className=" p-4 m-4 flex justify-between cursor-pointer"
        >
          <span className="text-lg font-bold my-2">
            {category.title} ({category.itemCards.length})
          </span>
          <span> ⬇️ </span>
        </div>
        <div>
          {itemCards.map(
            (itemCard) =>
              show && <ItemList key={itemCard.card.info.name} data={itemCard} />
          )}
        </div>
      </div>
    </div>
  );
};
export default ResCatgory;
