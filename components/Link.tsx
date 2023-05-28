import React from "react";
import { useLink } from "./useLink";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

interface Link {
  title: string;
  url: string;
  id: string;
  alt: string;
  icon: string;
}

export default function Link({ title, url, id, alt, icon }: Link) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div className="w-full">
      <a
        href={url}
        className="flex items-center justify-between gap-3 px-2 py-2 transition-colors bg-gray-100 rounded-lg hover:cursor-pointer group hover:bg-gray-200 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <img
              className="w-6 h-6 rounded-full md:w-10 md:h-10"
              src={icon}
              alt={alt}
            />
          </div>
          <h2 className={` text-m  text-black font-bold`}>{title} </h2>
        </div>
        <FiExternalLink className="w-8 h-8 p-2 text-black rounded-xl " />
      </a>
    </motion.div>
  );
}
