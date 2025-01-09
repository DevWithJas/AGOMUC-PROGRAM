const SampleCard = ({ title, des }) => {
  return (
    <div className=" bg-zinc-950  border h-32 border-zinc-700 hvr-sdw  rounded-xl p-3 w-[320px]">
      <div className="  flex flex-col gap-3">
        <h1>{title}</h1>
        <p className=" opacity-60">{des}</p>
      </div>
    </div>
  );
};

export default SampleCard;
