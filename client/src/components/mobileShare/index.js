import React from "react"
import { FaArrowAltCircleUp } from "react-icons/fa";

const handleOnClick = () => {
    if (navigator.share) {
        navigator
          .share({
            title: `Stuff`,
            text: `Check out stuff`,
            url: document.location.href,
          })
          .then(() => {
            console.log('Successfully shared');
          })
          .catch(error => {
            console.error('Something went wrong sharing the blog', error);
          });
      }
}

function Button({ input }) {
    if(!input) return (null)
    else return (<button className="shareButton mx-2" id="mobile-share" onClick={handleOnClick}><FaArrowAltCircleUp/></button>)
}

export default Button;