import MiniHeading from "./MiniHeading";
import Title from "./Title";
import MetricsDashboard from "./example";
import { SampleCard } from "./sampleCard";

const Vision = () => {
    return (
        <section className="flex flex-col gap-8">
            <Title
                title="Vision"
                des="Lorem ipsum dolor sit, amet consectetur"
            />
            <div className=" flex gap-4 flex-col m-4 sm:flex-row ">
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
                    impactData={true}
                />
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
                    financeData={true}
                />
            </div>
            <MiniHeading title="Transforming Safety into Savings" />
            <div className="mx-6 items-center text-center">
                We envision a future where widespread adoption of our app leads
                to:
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <SampleCard
                    title={"Crime Reduction"}
                    des={
                        "Empowering communities to prevent thousands of crimes through smart interventions."
                    }
                />
                <SampleCard
                    title={"Economic Savings"}
                    des={
                        "Reducing government expenditures on crime-related impacts by fostering safer societies. "
                    }
                />
            </div>
        </section>
    );
};

export default Vision;
