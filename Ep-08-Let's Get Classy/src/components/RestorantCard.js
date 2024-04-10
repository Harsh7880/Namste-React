import {CDN_URL} from '../utils/constants'
const RestorantCard = (props) => {
    const {resData} = props;
  const {cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info;
    return (
        <div className='res-card'>
           <div className='res-logoContainer'>
             <img className='res-logo' src=
             { CDN_URL + cloudinaryImageId }/>
           </div>
           <div className='res-content'>
            <h2>{name}</h2>
            <h4>{avgRating}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
           </div>
        </div>
    )
}

export default RestorantCard