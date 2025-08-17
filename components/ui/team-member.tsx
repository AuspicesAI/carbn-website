import React from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

interface SocialMediaLinks {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  title: string;
  bio: string;
  socialLinks?: SocialMediaLinks;
  className?: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  imageSrc,
  name,
  title,
  bio,
  socialLinks,
  className = "",
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex lg:flex-row sm:flex-col sm:text-center sm:items-center gap-6 mb-5 pb-5 border-b border-border">
        <Image
          src={imageSrc}
          alt={`${name}'s profile`}
          width={96}
          height={96}
          className="rounded-2xl object-cover w-24 h-24"
        />
        <div>
          <div>
            <h6 className="text-lg text-foreground font-semibold">{name}</h6>
            <span className="text-sm text-primary">{title}</span>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start pt-2">
            {socialLinks?.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-muted-foreground hover:text-primary-foreground group w-8 h-8 shadow-sm border rounded-full flex justify-center items-center bg-background transition-all duration-500 hover:bg-primary"
              >
                <FaInstagram />
              </a>
            )}
            {socialLinks?.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-muted-foreground hover:text-primary-foreground group w-8 h-8 shadow-sm border rounded-full flex justify-center items-center bg-background transition-all duration-500 hover:bg-primary"
              >
                <FaTwitter />
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-muted-foreground hover:text-primary-foreground group w-8 h-8 shadow-sm border rounded-full flex justify-center items-center bg-background transition-all duration-500 hover:bg-primary"
              >
                <FaLinkedin />
              </a>
            )}
            {socialLinks?.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-muted-foreground hover:text-primary-foreground group w-8 h-8 shadow-sm border rounded-full flex justify-center items-center bg-background transition-all duration-500 hover:bg-primary"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="text-center lg:text-left flex-1">
        <p className="text-muted-foreground leading-6 mb-7">{bio}</p>
      </div>
    </div>
  );
};
