import React from 'react';
import { Parallax } from 'react-parallax';
import image from '../assets/images/curtain.jpg';

const contentHeading = <h3>Animationen</h3>;
const contentParagraph = <p>Parallax Scrolling</p>;
// const content = (
//   <React.Fragment>
//     <h3>Animationen</h3>
//     <p>Parallax Scrolling</p>
//   </React.Fragment>
// );

export default {
  parallax: {
    motion: (
      <Parallax
        bgImage={require('../assets/images/curtain.jpg')}
        bgImageAlt="background"
        strength={800}
      >
        <div className="parallax-height">
          <div className="wrapper">
            {contentHeading}
            {contentParagraph}
          </div>
        </div>
      </Parallax>
    ),
    static: (
      <React.Fragment>
        <div className="wrapper">
          {contentHeading}
          <img src={image} alt="office" width="100%" />
          {contentParagraph}
        </div>
      </React.Fragment>
    )
  }
};

// export default {
//   parallax: {
//     motion: (
//       <Parallax
//         bgImage={require('../assets/images/curtain.jpg')}
//         bgImageAlt="background"
//         strength={800}
//       >
//         <div className="parallax-height">
//           <div className="wrapper">
//             {contentHeading}
//             {contentParagraph}
//           </div>
//         </div>
//       </Parallax>
//     ),
//     static: (
//       <React.Fragment>
//         <Parallax
//           bgImage={require('../assets/images/curtain.jpg')}
//           bgImageAlt="background"
//           strength={0}
//         >
//           <div className="parallax-height">
//             <div className="wrapper">{contentHeading}</div>
//           </div>
//         </Parallax>
//         <div className="wrapper">{contentParagraph}</div>
//       </React.Fragment>
//     )
//   }
// };
