import React from "react";
import { useLink } from "./useLink";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

interface Link {
  title: string;
  link: string;
  id: string;
  alt: string;
  icon: string;
}

export default function LinkItem({ title, link, id, alt, icon }: Link) {
  const [isHovered, setIsHovered] = React.useState(false);
  const bg = useColorModeValue("white", "gray.900");

  return (
    <motion.div className="w-full">
      <Link
        href={link}
        background={bg}
        className="flex items-center justify-between gap-1 px-2 py-2 transition-colors border rounded-lg hover:border-transparent border-1 hover:shadow-md hover:cursor-pointer group hover:border-gray-200 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f7fafc]">
            <img className="w-6 h-6 " src={icon} alt={alt} />
          </div>
          <h2 className={` text-sm  text-black font-bold`}>{title} </h2>
        </div>
        <FiExternalLink className="w-8 h-8 p-2 text-black rounded-xl " />
      </Link>
    </motion.div>
  );
}
