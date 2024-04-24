import React from "react";
import headphone from "../assets/footer/headphone.png";
import logo from "../assets/logo/footer-logo.png";
import user from "../assets/footer/user.png";
import { IoLocationOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoMdSend } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-blue-950  text-white">
      <div className="flex items-center justify-around pt-7">
        <div className="text-white">
          <h1>
            Contact us at <span className="text-sky-500">@Themepure.co</span>{" "}
          </h1>
        </div>
        <div className="flex text-white gap-9">
          <div>
            <img src={headphone}  alt="" />
          </div>
          <h1>
            PERFECT SOLUTION FROM IT ADVISOR <br />{" "}
            <span className="text-sky-500">+92 666 888 0000</span>{" "}
          </h1>
        </div>
      </div>
      <div className="flex gap-5 items-start justify-center p-10">
        <div className="flex items-center justify-center w-1/2">
          <div className="text-white">
            <img src={logo} alt="" />
            <p className="mt-7">
              The world frist and largest digital market for cripto collectubles and non-fumgible (NFTs). Buy
            </p>
            <div className="flex mt-6 gap-5">
              <IoLocationOutline className="@apply text-[#05dac3]" />
              <p>BB Road Broend Area 600 New York, USA</p>
            </div>
            <div className="flex mt-2 gap-5">
              <TiMessages className="@apply text-[#05dac3]" />
              <p>BB Road Broend Area 600 New York, USA</p>
            </div>
          </div>
        </div>
        <div className="text-white w-1/2">
          <h1 className="text-2xl">Service Req</h1>
          <p className="mt-2">Parking permission</p>
          <p className="mt-2">Fire Service Noc</p>
          <p className="mt-2">Report a Parking Violation</p>
          <p className="mt-2">Residential Parking</p>
          <p className="mt-2">Vendor Registration</p>
          <p className="mt-2">City Board Application</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl">Contact Info</h1>
          <div className="flex gap-2 my-5">
            <img src={user} alt="" />
            <h2>
              Chat With Expert <br /> Active Now
            </h2>
          </div>
          <p className="mt-2">Parking permission</p>
          <p className="mt-2">Fire Service Noc</p>
          <p className="mt-2">Report a Parking Violation</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl">Newsletter</h1>
          <div className="flex items-center justify-center border-b-2 mt-7">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-transparent outline-none"
            />
            <IoMdSend />
          </div>
          <div className="mt-5">
            <input type="checkbox" />
            <p>i agree to all your tems and policey</p>
            <div className="flex gap-5 mt-5">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around p-5">
        <p>
          @Copyright <span className="@apply text-[#05dac3]">@2024</span>{" "}
          Thomepure. All Right Resolved{" "}
        </p>
        <div className="flex gap-10">
          <p>Terms and condition</p>
          <p>Privecy and policey</p>
        </div>
      </div>
    </div>
  );
};
