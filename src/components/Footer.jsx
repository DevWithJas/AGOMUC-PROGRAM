import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    const links = [
        // {
        //   id: 1,
        //   link: "https://twitter.com/",
        //   icon: <FaXTwitter />,
        // },
        // {
        //   id: 2,
        //   link: "https://instagram.com/",
        //   icon: <FaInstagram />,
        // },
        {
            id: 3,
            link: "https://www.linkedin.com/in/agomuc-program-1a69ba338/",
            icon: <FaLinkedinIn />,
        },
        {
            id: 4,
            link: "mailto:info@agomucprogram.tech",
            icon: <IoMdMail />,
        },
    ];
    return (
        <footer className="py-6 border-t border-zinc-700 bg-zinc-950 mt-20 text-white">
            <div className="flex flex-col items-center gap-4">
                <div className=" flex gap-2 items-center">
                    <img className=" size-12" src="img\logo\logo.png" />
                    <h1 className=" text-2xl font-popins font-semibold">
                        AGOMUC
                    </h1>
                </div>
                <div className=" flex gap-6 items-center">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            className=" p-3 text-2xl rounded-full bg-zinc-900 hover:bg-blue-600 duration-300 transition border-zinc-700 hvr-sdw border hover:border-blue-600"
                            href={link.link}
                        >
                            {" "}
                            {link.icon}
                        </a>
                    ))}
                </div>
                <span className="text-center text-sm text-gray-400 mt-4">
                    © 2024 AGOMUC. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
