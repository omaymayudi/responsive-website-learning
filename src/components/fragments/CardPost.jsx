const CardPost = ({ image, imageTool, imageTool2, title, desc, like }) => {
  return (
    <>
      <div className="mx-auto w-[343px] justify-center h-[341px] border border-gray-400  border-dashed mt-3 rounded-3xl hover:cursor-pointer">
        <div className="p-4 relative">
          <div className="w-[90px] h-12  right-4 absolute flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded shadow-lg">
              <img className="w-5 h-5" src={imageTool} alt="" />
            </div>
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded shadow-lg">
              <img className="w-5 h-5" src={imageTool2} alt="" />
            </div>
          </div>
          <img src={image} alt="" />
        </div>
        <div className="px-4 flex justify-between">
          <div className="text-text">
            <h2 className="text-xl leading-[120%] font-medium">{title}</h2>
            <p className="text-sm leading-[160%]">{desc}</p>
          </div>
          <div className="w-9 h-9 bg-slate-600 rounded-full flex justify-center items-center">
            <p className="text-white text-xs">+{like}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPost;
