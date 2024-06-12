import { projects } from "@/data";
import React from "react";
import { ThreeDCardContainer } from "./ui/3d-card-container";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div
                        key={id}
                        className="sm:h-[32rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                    >
                        <ThreeDCardContainer
                            title={title}
                            description={des}
                            link={link}
                            img={img}
                            iconLists={iconLists}
                        ></ThreeDCardContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
