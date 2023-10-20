const FeedbackCard = ({ name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] items-center">
    <div className="flex flex-row">
      <div className="flex flex-col ml-4 carousel-item">
        <img src={img} alt={name} />
      </div>
    </div>
  </div>
);

export default FeedbackCard;
