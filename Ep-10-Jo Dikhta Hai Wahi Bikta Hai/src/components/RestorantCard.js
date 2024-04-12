import {CDN_URL} from '../utils/constants'
const RestorantCard = ({resData}) => {

  const {cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info;
    return (
        <div className=' bg-gray-200 m-4 p-4 w-52 rounded-lg items-center hover:bg-slate-400'>
           <div className='align-middle rounded-lg'>
             <img className="rounded-lg" src=
             { CDN_URL + cloudinaryImageId }/>
           </div>
           <div className='py-2'>
            <h2 className='font-bold my-2'>{name}</h2>
            <h4>{avgRating} ⭐️</h4>
            <p className='font-light text-xs my-2'>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
           </div>
        </div>
    )
}

export default RestorantCard