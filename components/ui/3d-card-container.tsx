"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export function ThreeDCardContainer({
    img,
    link,
    title,
    description,
    iconLists,
}: {
    img: string;
    link: string;
    title?: string;
    description?: string;
    iconLists: string[];
}) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] bg-black-200 border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <div className="flex items-center">
                        {iconLists.map((icon) => (
                            <div
                                key={icon}
                                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            >
                                <img src={icon} alt={icon} className="p-2" />
                            </div>
                        ))}
                        <div className=""></div>
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
}
