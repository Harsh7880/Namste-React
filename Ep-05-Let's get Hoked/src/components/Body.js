import RestorantCard from './RestorantCard'
import {useState} from 'react'
import resList from '../utils/mockData'
const Body = () => {

    const [listOfRestorants,setListOfRestortant] = useState(resList);
    return (
        <div className='body'>
            <div className='search-bar'>
                <button className='filter-restorant'
                onClick = {()=>{
                      const  filteredList = listOfRestorants.filter(
                            (res) => res.info.avgRating > 4
                            );
                            setListOfRestortant(filteredList);
                    }
                }
                > Top Rated Restorant's</button>
            </div>
             <div className='res-container'>
               {
                listOfRestorants.map( (restaurant) => <RestorantCard key={restaurant.info.id} resData = {restaurant} />)
                }
              </div>
        </div>
    )
}

export default Body;