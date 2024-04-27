const Button = ({
  label,
  handleBtnClick,
  bgColor,
  shadowColor,
  borderColor,
}) => {
  return (
    <button
      className={`
        ${
          bgColor
            ? `${bgColor} ${shadowColor}`
            : `bg-white border-2 ${borderColor}`
        }
        font-medium rounded-4xl px-4 py-2 lg:px-10 lg:py-3 cursor-pointer w-fit hover:scale-110 hover:shadow-none transition-all text-sm lg:text-base`}
      onClick={handleBtnClick}
    >
      {label}
    </button>
  );
};

export default Button;
