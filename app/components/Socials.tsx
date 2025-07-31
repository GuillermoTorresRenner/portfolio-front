import React from "react";
import type { Social, SocialsProps } from "~/types";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Socials: React.FC<SocialsProps> = ({ socials }) => {
  // Mapeo de iconos de React Icons para diferentes redes sociales
  const getIcon = (name: string) => {
    const iconName = name.toLowerCase();

    switch (iconName) {
      case "github":
        return <FaGithub className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedin className="w-5 h-5" />;
      case "twitter":
        return <FaTwitter className="w-5 h-5" />;
      case "instagram":
        return <FaInstagram className="w-5 h-5" />;
      case "youtube":
        return <FaYoutube className="w-5 h-5" />;
      case "email":
      case "mail":
        return <FaEnvelope className="w-5 h-5" />;
      case "website":
      case "web":
        return <FaGlobe className="w-5 h-5" />;
      default:
        return <FaGlobe className="w-5 h-5" />;
    }
  };

  if (!socials || socials.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex justify-center lg:justify-start space-x-4">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            title={social.name}
          >
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
              {getIcon(social.name)}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
