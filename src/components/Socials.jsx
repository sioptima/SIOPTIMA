"use client";
import { IconName } from "react-icons/ai";
import { LuFigma } from "react-icons/lu";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiBehanceFill,
  RiInstagramFill,
  RiMailFill,
  RiMediumFill,
} from "react-icons/ri";

import Link from "next/link";

// import React from 'react'

const icons = [
  // {
  //   path: "/",
  //   name: <LuFigma />,
  // },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
