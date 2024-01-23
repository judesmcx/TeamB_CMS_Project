import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/companyLogo.png";

//import react icon
import { GiHamburgerMenu } from "react-icons/gi";
import NavSideBar from "./NavSideBar";
import { Link } from "react-router-dom";

//import profile logo
import profileLogo from "../../assets/profile.svg";

//import react icon
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { DashBoardContext } from "../context/DashBoardContext";

const Nav = () => {
  //react hook for showing and hiding element
  const [show, setShow] = useState(false);

  //nav active focus when clicking elements
  const [logoShow, setLogoShow] = useState(false);
  const [dashBoardShow, setDashBoardShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  const [courseListShow, setCourseListShow] = useState(false);

  //use context for dropdown
  const { showDropDown, setShowDropDown } = useContext(DashBoardContext);

  const showLogo = () => {
    setLogoShow(true);
    setDashBoardShow(false);
    setProfileShow(false);
    setCourseListShow(false);
    setShowDropDown(false);
  };

  const showDashBoard = () => {
    setDashBoardShow(true);
    setProfileShow(false);
    setCourseListShow(false);
    setLogoShow(false);
    setShowDropDown(false);
  };
  const showProfile = () => {
    setProfileShow(true);
    setDashBoardShow(false);
    setCourseListShow(false);
    setLogoShow(false);
    setShowDropDown(false);
  };
  const showCourseList = () => {
    setCourseListShow(true);
    setProfileShow(false);
    setDashBoardShow(false);
    setLogoShow(false);
    setShowDropDown(false);
  };

  const [header, setHeader] = useState(false)
  //scroll event
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.scrollY > 80 ? setHeader(true) : setHeader(false);
      },
      []
    );
  });

  return (
    <>
      <nav className="fixed w-full top-0 z-[100] ">
        <div
          className={
            header
              ? "relative flex justify-between items-center lg:justify-normal bg-[#BCE8B1] h-[69px] transition-all "
              : "relative flex justify-between items-center lg:justify-normal bg-transparent h-[69px] transition-all "
          }>
          <Link to="/">
            <img
              className="  ml-10 xl:w-[171.67px] xl:h-[50px] lg:h-[5rem] xl:ml-[95px] py-3 xl:py-1"
              src={logo}
              alt="tsukidenLogo"
              width={171.67}
              height={50}
              onClick={showLogo}
            />
          </Link>
          <div className="hidden lg:flex lg:items-end xl:w-[32%] 2xl:w-[25%] lg:pl-10 lg:justify-between">
            {/* 1/11/2024 */}
            <Link to="/" onClick={showDashBoard}>
              <ul
                className={
                  dashBoardShow
                    ? "font-bold text-[#126912] text-shadow"
                    : "font-light text-shadow"
                }>
                DASHBOARD
              </ul>
            </Link>
            <Link to="/courselist" onClick={showCourseList}>
              <ul
                className={
                  courseListShow
                    ? "font-bold text-[#126912] text-shadow"
                    : "font-light text-shadow"
                }>
                COURSE LIST
              </ul>
            </Link>
          </div>
          <div className="relative flex items-center px-3 lg:hidden">
            <GiHamburgerMenu
              className="text-[2rem]"
              onClick={() => setShow((prev) => !prev)}
            />
            {show && <NavSideBar />}
          </div>
          <div className="drop-shadow-lg shadow-lg  bg-[#EBE9E9] cursor-pointer lg:text-[.9rem] lg:w-[160px] 2xl:w-[193px] h-[7vh] rounded-md absolute right-5 hidden lg:flex justify-between items-center p-1 text-[#126912]">
            <img
              src={profileLogo}
              alt=""
              className="h-[7vh] p-1"
              onClick={() => setShowDropDown((prev) => !prev)}
            />
            <p
              onClick={() => setShowDropDown((prev) => !prev)}
              className=" text-shadow">
              Hi, Judes!
            </p>
            <span
              onClick={() => setShowDropDown((prev) => !prev)}
              className="cursor-pointer">
              {showDropDown ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            {showDropDown && (
              <div className=" absolute right-0 top-12 w-[8vw] flex flex-col justify-center items-center border-solid border-2 border-[#116211]">
                <Link
                  to="/profile"
                  onClick={showProfile}
                  className="w-full text-center ">
                  <p
                    className={
                      profileShow
                        ? "font-semibold text-[#fff] bg-[#116211] text-center p-1 text-shadow"
                        : "font-light text-[#000000] text-center p-1 bg-white text-shadow"
                    }>
                    PROFILE
                  </p>
                </Link>
                <Link to="/" onClick={showLogo} className="w-full text-center ">
                  <p
                    className={
                      logoShow
                        ? "font-semibold text-[#fff] bg-[#116211] text-center p-1 text-shadow"
                        : "font-light text-[#000000] text-center p-1 bg-white text-shadow"
                    }>
                    LOGOUT
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
//1/23/2024
