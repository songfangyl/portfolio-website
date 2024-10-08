import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import BorderButton from "./ui/BorderButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { profile } from "console";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to drive{" "}
                    <span className="text-purple">impactful change</span>{" "}
                    together?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Interested in collaborating on a project or just want to
                    connect? Feel free to reach out!
                </p>
                <a href="mailto:songfangyi1210@gmail.com">
                    <BorderButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    ></BorderButton>
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col items-center justify-between">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Song Fang Yi
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <a key={profile.id} href={profile.link}>
                            <div
                                key={profile.id}
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 "
                            >
                                <img
                                    src={profile.img}
                                    alt={profile.img}
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
export default Footer;
