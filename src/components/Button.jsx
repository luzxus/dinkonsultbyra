import React from "react";

const MyComponent = ({ styles, to, title="Kom Igång", isButton }) => {
  if (isButton) {
    // Render a button
    return (
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        {title}
      </button>
    );
  } else {
    // Render an anchor tag
    return (
      <a
        href={`#${to}`}
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        {title}
      </a>
    );
  }
};

export default MyComponent;
