import Link from "next/link";
import React from "react";
import FacebookIcon from "../Icons/facebookIcon";
import InstagramIcon from "../Icons/instagramIcon";
import TwitterIcon from "../Icons/twitterIcon";

const SocialMedias = () => {
  const socialMedia = [
    {
      icon: <FacebookIcon />,
      url: "/",
      name: "Facebook",
    },
    {
      icon: <InstagramIcon />,
      url: "/",
      name: "Instagram",
    },
    {
      icon: <TwitterIcon />,
      url: "/",
      name: "Twitter",
    },
  ];

  return (
    <ul className="flex justify-center gap-[1.6rem] self-end md:col-start-2 md:row-start-5 md:justify-end lg:row-start-2">
      {socialMedia.map((media, index) => {
        return (
          <li key={index} className="group">
            <Link href={media.url}>
              {media.icon}
              <span className="sr-only">{media.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMedias;
