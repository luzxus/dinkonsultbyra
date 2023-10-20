
const FeedbackCard = ({ name, title, img  }) => (
  <div
    className="flex justify-between flex-col px-10 py-12 rounded-[20px] items-center"
  >
    <div className="flex flex-row">
      <div className="flex flex-col ml-4 carousel-item">
        {/*  <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4> */}
        <img src={img} alt={name} className="w-full" />
      </div>
    </div>
  </div>
);

export default FeedbackCard;
