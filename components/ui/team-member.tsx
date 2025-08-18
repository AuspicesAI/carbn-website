import React from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SocialButton } from "@/components/ui/social-button";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { GlassSection } from "@/components/ui/glass-section";

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
    <GlassSection className={`p-6 ${className}`}>
      <div className="flex lg:flex-row sm:flex-col sm:text-center sm:items-center gap-6 mb-5">
        <Image
          src={imageSrc}
          alt={`${name}'s profile`}
          width={96}
          height={96}
          className="rounded-2xl object-cover w-24 h-24"
        />
        <div>
          <div>
            <h6 className="text-lg text-foreground font-semibold text-left">
              {name}
            </h6>
            <span className="text-sm text-primary text-left block">
              {title}
            </span>
          </div>
          <div className="flex items-center gap-2 justify-start pt-2">
            {socialLinks?.instagram && (
              <SocialButton
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-4 w-4" />
              </SocialButton>
            )}
            {socialLinks?.twitter && (
              <SocialButton
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-4 w-4" />
              </SocialButton>
            )}
            {socialLinks?.linkedin && (
              <SocialButton
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon className="h-4 w-4" />
              </SocialButton>
            )}
            {socialLinks?.github && (
              <SocialButton
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </SocialButton>
            )}
          </div>
        </div>
      </div>
      <div className="text-left flex-1">
        <p className="text-muted-foreground leading-6">{bio}</p>
      </div>
    </GlassSection>
  );
};
