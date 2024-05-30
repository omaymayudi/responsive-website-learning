import Button from "../components/elements/Button";
import { NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import TextHero from "@/components/elements/TextHero";
import CardPost from "@/components/fragments/CardPost";
import CardComment from "@/components/fragments/CardComment";
const Homepage = () => {
  const sosmed = [
    {
      name: <FaGithub />,
      path: "/github",
    },
    {
      name: <FaXTwitter />,
      path: "/twitter",
    },
    {
      name: <FaLinkedin />,
      path: "/linkedin",
    },
    {
      name: <FaInstagram />,
      path: "/instagram",
    },
  ];

  const dataCard = [
    {
      image: "/card-1.png",
      imageTool: "bootsrap.png",
      imageTool2: "clips.png",
      title: "BWalet",
      desc: "Business wallet",
      like: "99",
    },
    {
      image: "/card-2.png",
      imageTool: "futter.png",
      imageTool2: "tailwind.png",
      title: "BWalet",
      desc: "Business wallet",
      like: "99",
    },
    {
      image: "/card-3.png",
      imageTool: "tailwind.png",
      imageTool2: "clips.png",
      title: "BWalet",
      desc: "Business wallet",
      like: "99",
    },
    {
      image: "/card-3.png",
      imageTool: "tailwind.png",
      imageTool2: "clips.png",
      title: "BWalet",
      desc: "Business wallet",
      like: "99",
    },
  ];
  return (
    <>
      <div className="container mx-auto">
        {/* hero */}
        <div className="mb-16 md:mb-4 px-4 mt-12 h-full md:mx-12 lg:flex justify-center leading-[120%] lg:mb-14">
          <div className="lg:w-8/12">
            <div className="flex">
              <TextHero text="Let’s learn " />
              <span className="ml-2">
                <img
                  className="h-9 w-9 md:w-14 md:h-14"
                  src="/Subttasks_light.png"
                  alt=""
                />
              </span>
            </div>
            <div className="flex">
              <TextHero text="to code" />
              <span className="ml-2">
                <img
                  className="h-9 w-9 md:w-14 md:h-14"
                  src="/Book_open_light.png"
                  alt=""
                />
              </span>
            </div>
            <TextHero text="an application" />
          </div>

          <div className="lg:w-4/12 md:flex">
            <div className="md:w-10/12">
              <div className="mt-8 md:w-[374px] md:leading-[160%]">
                <h1 className="text-4 text-text">
                  with me{" "}
                  <span className="text-brand text-4">arif iskandar</span>, a
                  software developer who loves to share how to code in many
                  programing languages and multi platforms.
                </h1>
                <div className="flex mt-8">
                  <div className="flex h-9 mr-5 md:mr-0">
                    <Button
                      text="Start learn"
                      textColor="white"
                      bg="brand"
                      borderColor="brand"
                    />
                  </div>
                  <div className="flex items-center md:hidden">
                    <ul className="md:space-y-6 flex gap-3">
                      {sosmed.map((sosmed, index) => (
                        <li className=" text-2xl leading-[160%]" key={index}>
                          <NavLink to={sosmed.path}>
                            <span className="">{sosmed.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:2/12 md:w-full md:flex hidden lg:hidden md:justify-end">
              <div className="flex mt-8 ">
                <ul className="md:space-y-6 md:flex-col flex  gap-3">
                  {sosmed.map((sosmed, index) => (
                    <li className="text-2xl leading-[160%]" key={index}>
                      <NavLink to={sosmed.path}>
                        <span className="">{sosmed.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="md:flex md:flex-wrap justify-center gap-4 md:mb-0">
          {dataCard.map((data, index) => (
            <div key={index} className="">
              <CardPost
                image={data.image}
                imageTool={data.imageTool}
                imageTool2={data.imageTool2}
                title={data.title}
                desc={data.desc}
                like={data.like}
              />
            </div>
          ))}
        </div>
        <div className="pr-3 justify-center flex mx-auto h-9 mt-8">
          <Button
            text="Start learn"
            textColor="text"
            bg="white"
            borderColor="brand"
          />
        </div>

        {/* About */}
        <div className="mx-4 md:mx-12 mb-24 lg:flex ">
          <div className="flex lg:w-1/2 justify-between items-center">
            <div className="w-9/12 lg:ml-32">
              <div className="flex">
                <h1 className="text-[33px] text-text leading-[120%] mr-4">
                  It’s me
                </h1>
                <div className="w-3/12 hidden lg:justify-start lg:flex">
                  <img className="w-14 h-14" src="/avatar.png" alt="" />
                </div>
              </div>
              <h1 className="text-[33px] text-text leading-[120%]">
                Arif Iskandar
              </h1>
            </div>
            <div className="w-3/12  flex justify-end items-end lg:hidden md:justify-start">
              <img className="w-14 h-14" src="/avatar.png" alt="" />
            </div>
          </div>
          <div className="text-text mt-8 text-sm space-y-4 md:space-y-6 md:text-xl leading-[160%] lg:w-1/2">
            <p>
              I like to code and keep it simple, try something new, and learn
              more. I think sharing knowledge is the best practice to improve my
              skills, and I try to do it.
            </p>
            <p>
              I am currently the Chief Technology Officer at dSociety, a startup
              to help students prepare for their exams.
            </p>
          </div>
        </div>
        {/* comment */}
        <div className="md:flex justify-center md:flex-wrap">
          <CardComment />
          <CardComment />
          <CardComment />
          <CardComment />
        </div>
        <div className="flex relative">
          {/* ilter blur-3xl opacity-70  */}
          <div className="mx-4 w-screen h-[300px] rounded-tl-full rounded-tr-full bg-white -top-[300px] absolute filter blur-3xl opacity-70 ">
            <div className="pr-3 justify-center flex mx-auto h-9 mt-8"></div>
          </div>
        </div>
        <h2 className="text-lg text-black leading-[120%] justify-center flex">
          What are you waiting for?
        </h2>
        <div className="pr-3 justify-center flex mx-auto mt-4 h-9 mb-8">
          <Button
            text="Let's start"
            textColor="white"
            bg="brand"
            borderColor="brand"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
