const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute  top-44 md:top-10 left-0 w-full h-full  md:bg-fixed pt-48 px-6 md:px-12">
      <h1 className="text-3xl top-10  md:text-3xl font-bold text-white">{title}</h1>
      <p className="py-6 text-sm md:text-lg w-full md:w-1/3 text-white">{overview}</p>
    </div>
  );
};

export default VideoTitle;
