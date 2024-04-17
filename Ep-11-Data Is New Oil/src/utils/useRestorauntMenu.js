import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestorauntMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestorauntMenu;
