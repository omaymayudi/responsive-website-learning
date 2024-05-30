const Button = ({ text, bg, textColor, borderColor }) => {
  return (
    <>
      <button
        className={`bg-${bg} text-${textColor} ring-2 ring-${borderColor} text-sm rounded-3xl px-6 leading-[160%] hover:cursor-pointer `}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
