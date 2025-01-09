import Title from "./Title";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const Carieer = () => {
  const data = [
    {
      id: 1,
      img: "img/machinelearning.jpg",
      title: "Machine Learning Developer",
      formlink: "",
    },
    {
      id: 2,
      img: "img/datascience.jpg",
      title: "Data Scientist",
      formlink: "",
    },
    {
      id: 3,
      img: "img/appdev.webp",
      title: "App Developer - React Native",
      formlink: "",
    },
  ];
  return (
    <section className="m-6 flex flex-col gap-8">
      <Title title="Carieer" des="Lorem ipsum dolor sit, amet consectetur" />
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
        {data.map((data) => (
          <div
            key={data.id}
            className=" bg-zinc-950 p-4 rounded-xl border border-zinc-700 flex flex-col gap-3"
          >
            <img
              className=" rounded-xl border border-zinc-700 w-80 h-80"
              src={data.img}
            />
            <h1 className=" text-2xl font-semibold">{data.title}</h1>
            <div>
              <p className="flex-wrap">To apply mail your resume at:</p>
              <a href="mailto:info@agomucprogram.tech" className="underline">
                info@agomucprogram.tech
              </a>
            </div>
            {/* <a
              href={data.formlink}
              className=" flex gap-2 items-center px-3 py-2  bg-blue-600 border border-blue-600 rounded-xl hvr-sdw w-fit"
            >
              <div className=" text-xl">
                <PiSuitcaseSimpleBold />
              </div>

              <span>Apply</span>
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carieer;
