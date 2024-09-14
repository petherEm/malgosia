import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialsItems = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/malgorzataszynkarczuk/",
  },
  {
    icon: <MdEmail />,
    link: "mailto:malgosz74@gmail.com",
  },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socialsItems.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
