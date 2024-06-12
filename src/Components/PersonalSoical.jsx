import { FaGithub } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
const PersonalSoical = () => {
  const personal = [
    {
      icon: <FaGithub />,
      word: "Github Repo",
    },
    {
      icon: <FaGithub />,
      word: "Github Profile",
    },
    {
      icon: <IoMdContact />,
      word: "Contact Me",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center pt-2">
      {personal.map((icon, index) => (
        <div className="social-button " key={index}>
          <a
            href="#"
            className="text-white flex aligen-center  justify-center duration-[.3]"
          >
            <span className="justify-center pr-2 m-auto aligen-center">
              {icon.icon}
            </span>
            <span>{icon.word}</span>
          </a>
        </div>
      ))}
    </div>
  );
};
export default PersonalSoical;
