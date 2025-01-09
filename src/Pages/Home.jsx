import About from "../components/About";
import Achievement from "../components/Achievement";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Progress from "../components/Progress";
import Solutions from "../components/Solutions";
import Vision from "../components/Vision";
import Investers from "../components/Investers";
import Carieer from "../components/Carieer";
const Home = () => {
    return (
        <div className="">
            <Navbar />
            <section className="text-white sm:mx-[200px] font-inter">
                <div className=" flex flex-col gap-10">
                    <Hero />
                    <section id="about">
                        <About />
                    </section>
                    <section id="solution">
                        <Solutions />
                    </section>
                    <section id="vision">
                        <Vision />
                    </section>
                    <section id="progress">
                        <Progress />
                    </section>
                    <Achievement />
                    <Investers />
                    <Carieer />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
