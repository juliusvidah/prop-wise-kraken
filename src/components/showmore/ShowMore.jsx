// import React, { useState } from 'react'
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import './showmore.css'
// import { property } from '../cloud/CloudImages';

// const ShowMore = () => {
//     const [isShown, setIsShown] = useState(false);
//     const toggleShowMore = () =>{
//         setIsShown(!isShown);
//     };
//   return (
//     <div>
//         {
//             isShown && (
//       <div className="property2">
//           <LazyLoadImage className="property2" src={property.property2} />
//           <LazyLoadImage className="property2" src={property.property2} />
//           <LazyLoadImage className="property2" src={property.property3} />
//           <LazyLoadImage className="property2" src={property.property2} />
//           <LazyLoadImage className="property2" src={property.property2} />
//           <LazyLoadImage className="property2" src={property.property3} />
//        </div>
//             )
//         }
//             <button className='btn' onClick={toggleShowMore}>
//             {
//                 isShown ? 'ShowLess' : 'ShowMore'
//             }
//         </button>
//     </div>
//   )
// }

// export default ShowMore
import React from 'react'

const ShowMore = () => {
  return (
    <div>ShowMore</div>
  )
}

export default ShowMore