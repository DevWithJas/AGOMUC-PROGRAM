import { FaGooglePlay } from "react-icons/fa";
import Title from "./Title";

const Solutions = () => {
  return (
    <section className=" flex flex-col gap-8">
      <Title title="Solutions" des="Lorem ipsum dolor sit amet." />
      <div className=" flex md:flex-row flex-col justify-center gap-8 items-center  p-2  ">
        <div className="p-4 md:w-[30%] flex flex-col gap-3 bg-zinc-950 border border-zinc-700 rounded-xl">
          <video autoPlay muted className="rounded-md" width="900" loop>
            <source
              src="https://res.cloudinary.com/dudpthrrk/video/upload/v1736514562/AGOMUC/rby8caefwjhriohvkfdp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h1 className=" text-2xl font-semibold">Sentinel</h1>
          <p className=" opacity-75">
            An intelligent app that predicts and prevents potential crimes,
            provides real-time alerts, safety insights, and route navigation for
            enhanced security
          </p>
          <a
            href=""
            className=" flex gap-2 items-center bg-blue-600 border border-blue-600 rounded-full w-fit py-3 px-4 cursor-pointer hvr-sdw"
          >
            <FaGooglePlay />
            <span>Download App</span>
          </a>
        </div>
        <div className="p-4 md:w-[30%] flex flex-col gap-3 bg-zinc-950 border border-zinc-700 rounded-xl">
          <video autoPlay muted className="rounded-md" width="900" loop>
            <source
              src="https://res.cloudinary.com/dudpthrrk/video/upload/v1736514588/AGOMUC/gfvjy5m4a5c5xuqevxhf.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h1 className=" text-2xl font-semibold">Arsenal</h1>
          <p className=" opacity-75">
            A powerful surveillance software that boosts security with real-time
            monitoring, advanced threat detection, and crime detection video
            analytics.
          </p>
          <a
            href=""
            className=" flex gap-2 items-center bg-blue-600 border border-blue-600 rounded-full w-fit py-3 px-4 cursor-pointer hvr-sdw"
          >
            <FaGooglePlay />
            <span>Query Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
