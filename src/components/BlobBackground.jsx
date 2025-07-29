const BlobBackground = () => {
  return (
    <>
      <div className="absolute top-[-100px] right-[-150px] w-[600px] h-[600px] rounded-full bg-[#0ca2b7] blur-[120px] opacity-60 mix-blend-lighten pointer-events-none z-0"></div>
      <div className="absolute bottom-[-150px] right-[50px] w-[500px] h-[500px] rounded-full bg-[#0ca2b7] blur-[120px] opacity-60 mix-blend-lighten pointer-events-none z-0"></div>
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#0ca2b7] blur-[120px] opacity-60 mix-blend-lighten pointer-events-none z-0"></div>
    </>
  );
};

export default BlobBackground;
