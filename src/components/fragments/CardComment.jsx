const CardComment = () => {
  return (
    <>
      <div className="mx-4 justify-center p-6 border border-slate-400/50 rounded-3xl mb-8 md:w-[320px] md:h-[260px]">
        <div className="flex mb-4">
          <div className="w-3/12">
            <img className="w-[56px] h-[56px]" src="/avatar.png" alt="" />
          </div>
          <div className="w-9/12">
            <h2 className="text-text leading-[150%]">Adison Westervelt</h2>
            <p className="text-brand text-sm leading-[140%]">
              Senior Proogram Manager at Microsoft
            </p>
          </div>
        </div>
        <p className="text-text text-sm leading-[160%]">
          Hendrerit diam a, morbi tristique egestas commodo ullamcorper ut.
          Aenean ipsum tempus, felis nibh amet mollis id sem sit. Venenatis
          aliquam tellus viverra nullam. Consequat cras ac donec nunc.
        </p>
      </div>
    </>
  );
};

export default CardComment;
