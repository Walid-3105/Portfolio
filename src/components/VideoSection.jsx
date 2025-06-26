import video from "../assets/video.mp4";
const VideoSection = () => {
  return (
    <div className="relative h-[1000px] overflow-hidden">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0" />

      <div className="absolute bottom-[300px] w-full flex justify-center items-center text-white px-10 z-10 text-center">
        <h3 className="text-2xl md:text-5xl font-extrabold ">
          Providing trusted, holistic,
          <br /> & <br />
          evidence-based medical solutions for
          <br />
          every stage of life
        </h3>
      </div>
    </div>
  );
};

export default VideoSection;
