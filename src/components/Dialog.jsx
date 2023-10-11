import React, { useRef, useEffect } from "react";
import styles from "../style";

const Dialog = ({ onClose, content }) => {
 
  return (
    <div
      id="dialog-container"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        {content.map((desc, index) => (
          <p
            className={`${styles.paragraph2} py-2`}
            key={`dialog-content-${index}`}
          >
            {desc}
          </p>
        ))}
        <button
          className="text-gray-500 font-poppins text-[18px] font-extrabold mt-5 self-end"
          onClick={onClose}
        >
          Stäng
        </button>
      </div>
    </div>
  );
};

export default Dialog;
