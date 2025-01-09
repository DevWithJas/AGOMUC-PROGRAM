import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Title from "./Title";

const Progress = () => {
    const timelineData = [
        {
            id: 1,
            year: "Sentinel Mark 1 (Dec)",
            description:
                "Launched the first prototype, pioneering crime prevention tech.",
        },
        {
            id: 2,
            year: "Sentinel Mark 2",
            description:
                "Outperformed Mark 1 with superior precision and results.",
        },
        {
            id: 3,
            year: "Startup Transition",
            description: "Secured incubation to scale innovation.",
        },
        {
            id: 4,
            year: "Sentinel Mark 2.1",
            description:
                "Streamlined real-time data testing with remarkable accuracy.",
        },
        {
            id: 5,
            year: "Awareness Campaigns",
            description: "Positioned as the go-to crime prevention app.",
        },
        {
            id: 6,
            year: "User Validation",
            description: "Large-scale testing for insights and improvements.",
        },
        {
            id: 7,
            year: "Driving Innovation",
            description: "Redefining crime prevention through AI.",
        },
    ];

    return (
        <section className="flex flex-col gap-8">
            <Title
                title="Progress"
                des="Lorem ipsum dolor sit, amet consectetur"
            />
            <VerticalTimeline>
                {timelineData.map((item) => (
                    <VerticalTimelineElement
                        key={item.id}
                        contentStyle={{ background: "#1e293b", color: "#fff" }}
                        contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
                        date={item.year}
                        iconStyle={{ background: "#2563eb", color: "#fff" }}
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-bold">
                            {item.year}
                        </h3>
                        <p className="opacity-75 text-sm">{item.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Progress;
