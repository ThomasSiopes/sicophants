import React from "react";
import "../../assets/css/index.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

const handleOnClick = () => {
    if (navigator.share) {
        navigator
          .share({
            title: `Proverbial Wisdom`,
            text: `Check out this quote and more at Proverbial Wisdom`,
            url: document.location.href,
          })
          .then(() => {
            console.log('Successfully shared');
          })
          .catch(error => {
            console.error('Something went wrong...', error);
          });
      }
}

function Button({ input }) {
    if(!input) return (null)
    else {
      let mobileButton = document.getElementById("#mobile-share");
      if(mobileButton) mobileButton.addEventListener("click", handleOnClick());
      return (<button className="shareButton mx-2" id="mobile-share" title="Share"><FaArrowAltCircleUp/></button>)
    }
}

export default Button;
