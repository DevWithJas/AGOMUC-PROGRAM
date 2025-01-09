import { sampleData } from "../Data/Data";
import MetricsDashboard from "./example";
import MiniHeading from "./MiniHeading";
import SampleCard from "./sampleCard";
import Title from "./Title";

const Investers = () => {
  return (
    <section className=" flex flex-col gap-8">
      <Title title="Why Invest in us?" des="Lorem ipsum dolor sit amet." />
      <div className=" flex flex-col gap-4">
        <div className="flex flex-wrap justify-center gap-6 items-center p-2 ">
          {sampleData.map((data) => (
            <SampleCard key={data.id} title={data.title} des={data.des} />
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Revenue Model" />
        <div className="flex flex-wrap justify-center gap-6 items-center p-2 ">
          <SampleCard
            des={
              "Subscription-Based Model for Sentinel providing continuous service and updates with scalable growth through recurring revenue."
            }
          />
          <SampleCard
            des={
              "For Arsenal, we will offer complete surveillance systems or software solutions, tailored to meet specific client needs."
            }
          />
        </div>
      </div>
      <div className=" flex flex-col gap-4 m-5 sm:m-0">
        <MiniHeading title="Projected ROI" />
        <MetricsDashboard
          data={[
            {
              scenario: "1% Adoption",
              users: 338000,
              netSavings: 52450000,
              roi: 349.67,
              crimeReduction: 1012,
              efficiency: 155.18,
              impact: 0.003,
              marketPenetration: 1,
              color: "#2563eb",
            },
            {
              scenario: "5% Adoption",
              users: 1690000,
              netSavings: 382950000,
              roi: 1914.75,
              crimeReduction: 5780,
              efficiency: 226.6,
              impact: 0.0034,
              marketPenetration: 5,
              color: "#16a34a",
            },
            {
              scenario: "10% Adoption",
              users: 3380000,
              netSavings: 909150000,
              roi: 3030.5,
              crimeReduction: 13005,
              efficiency: 269.0,
              impact: 0.0038,
              marketPenetration: 10,
              color: "#dc2626",
            },
          ]}
          growthData={true}
        />
        {/* <div className=" border w-[50%] h-[300px]"></div> */}
      </div>
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Where your investment goes?" />
        <div className="flex flex-wrap justify-center gap-6 items-center p-2 ">
          {investData?.map((item) => (
            <SampleCard key={item.id} title={item.title} des={item.des} />
          ))}
        </div>
      </div>
    </section>
  );
};

const investData = [
  {
    id: 1,
    title: "Infrastructure & Development",
    des: "Investing in robust data handling, model innovation, and secure deployment.",
  },
  {
    id: 2,
    title: "Quality & Growth",
    des: "Ensuring performance optimization and continuous adaptation through R&D and testing.",
  },
  {
    id: 3,
    title: "Operational Efficiency",
    des: "Enhancing integration, monitoring, and flexibility to support sustainable scaling.",
  },
];
export default Investers;
