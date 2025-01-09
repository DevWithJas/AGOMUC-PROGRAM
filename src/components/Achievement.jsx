import { useState, useEffect } from "react";
import Title from "./Title";

const Achievement = () => {
  const [position, setPosition] = useState(0);

  const testimonials = [
    {
      id: 1,
      img: "img/certi.jpg",
      title: "certificate",
    },
    {
      id: 2,
      title: "certificate",
      img: "img/Insight.jpeg",
    },
    {
      id: 3,
      title: "Insight",
      img: "img/Insight2.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev + 1;
        return newPosition >= testimonials.length ? 0 : newPosition;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="flex flex-col gap-8">
      <Title
        title="Achievement"
        des="Lorem ipsum dolor sit, amet consectetur"
      />
      <div className="w-full max-w-6xl mx-auto overflow-hidden px-4">
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${position * 60}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="hvr-sdw flex-shrink-0 sm:w-1/3 bg-zinc-950 border border-zinc-700 rounded-lg shadow-lg"
                style={{ minWidth: "calc(33.33% - 1rem)" }}
              >
                <div className="p-4 flex flex-col gap-4 w-64">
                  <h1 className="text-2xl font-semibold">
                    {testimonial.title}
                  </h1>
                  <img
                    src={testimonial.img}
                    alt="img"
                    className="border border-zinc-700 h-44 w-60 rounded-xl"
                  />
                  {/* <p className="opacity-75">{testimonial.des}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
