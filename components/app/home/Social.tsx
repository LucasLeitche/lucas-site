import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "teste" },
  { icon: <FaLinkedin />, path: "" },
];

export function Social() {
  return (
    <div className="flex gap-5 text-white lg:gap-8">
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            className="border rounded-full border-accent h-[40px] w-[40px] text-lg text-accent 
          flex items-center justify-center 
          hover:bg-accent hover:text-primary transition-all duration-500"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}
