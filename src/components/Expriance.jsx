import React from "react";
import user1 from "../assets/testimonial/home-3/img-1.png";
import user2 from "../assets/testimonial/home-3/img-2.jpg";
import user3 from "../assets/testimonial/home-3/img-3.jpg";
import ser from "../assets/services/services-1.jpg";
import ser1 from "../assets/services/services-2.jpg";
import ser2 from "../assets/services/services-3.jpg";
import ser3 from "../assets/services/services-4.jpg";
import img from "../assets/offering/img-4.svg"

import { FaArrowRight, FaCheckDouble } from "react-icons/fa";

export const Expriance = () => {
  return (
    <div>
      <div className="@apply bg-[#A3D8FF] h-2/5 ">
        <div className="pl-52 pt-10">
          <p>Future its Soultion</p>
        </div>
        <div className="flex items-center justify-around">
          <h1>
            We've Been THriving in 38{" "}
            <span className="@apply text-[#05dac3]">38 Year</span>
          </h1>
          <div>
            <p>
              As the complexity of to increase , the fild of arceture <br />{" "}
              become multi-displany with technology exprtise
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-5 items-center justify-center ">
          <div className="bg-slate-300 p-10 text-black border @apply w-3/12 flex items-center justify-center flex-col">
            <img src={user1} width={250} alt="" />
            <h1 className="text-4xl mt-10">Our Misson</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, deleniti? Placeat, provident?
            </p>
          </div>
          <div className="bg-slate-300 p-10 text-black border @apply w-3/12 flex items-center justify-center flex-col">
            <img src={user2} width={250} alt="" />
            <h1 className="text-4xl mt-10">About Histry</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, deleniti? Placeat, provident?
            </p>
          </div>
          <div className="bg-slate-300 p-10 text-black border @apply w-3/12 flex items-center justify-center flex-col">
            <img src={user3} width={250} alt="" />
            <h1 className="text-4xl mt-10">Our Partener</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, deleniti? Placeat, provident?
            </p>
          </div>
        </div>
      </div>
      <div className="text-white bg-blue-950">
        <div className="pt-20 flex items-center justify-center flex-col">
          <p>
            Service<span className="@apply text-[#05dac3]">it solution</span>
          </p>
          <p>
            All Profesinonal{" "}
            <span className="@apply text-[#05dac3]">it solution</span> & Servie
          </p>
        </div>
        <div className="p-5 gap-5 flex items-center justify-center mt-5">
          <div className="h-40 bg-blue-900 w-1/5 grid place-items-center">
            <p>Prodct development</p>
            <img src={ser1} width={40} alt="" />
            <button className="flex items-center justify-center">
              Read out More <FaArrowRight />{" "}
            </button>
          </div>
          <div className="h-40 bg-blue-900 w-1/5 grid place-items-center">
            <p>Prodct development</p>
            <img src={ser} width={40} alt="" />
            <button className="flex items-center justify-center">
              Read out More <FaArrowRight />{" "}
            </button>
          </div>
          <div className="h-40 bg-blue-900 w-1/5 grid place-items-center">
            <p>Prodct development</p>
            <img src={ser2} width={40} alt="" />
            <button className="flex items-center justify-center">
              Read out More <FaArrowRight />{" "}
            </button>
          </div>
          <div className="h-40 bg-blue-900 w-1/5 grid place-items-center">
            <p>Prodct development</p>
            <img src={ser3} width={40} alt="" />
            <button className="flex items-center justify-center">
              Read out More <FaArrowRight />{" "}
            </button>
          </div>
          <div className="h-40 bg-blue-900 w-1/5 grid place-items-center">
            <p>Prodct development</p>
            <img src={ser} width={40} alt="" />
            <button className="flex items-center justify-center">
              Read out More <FaArrowRight />{" "}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="p-2 border">View all Serviece</button>
        </div>
        <div className="flex items-center justify-around p-10">
          <div className="w-1/5">
            <p className="text-4xl  ">10+ <br /> <span className="text-sm">Experance</span></p>
            <p className="text-4xl mt-7">255 <br /> <span className="text-sm">Squre Area</span></p>
            <p className="text-4xl mt-7">310 <br /> <span className="text-sm">Squre Area</span></p>
          </div>
          <div className="w-1/3">
            <img src={img} width={600} alt="" />
          </div>
          <div className="w-1/3">
            <p>Servie <span className="@apply text-[#05dac3]">it Service</span></p>
            <p className="text-4xl"> Tech Change the World</p>
            <p className="m-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum assumenda ad aliquam reprehenderit dignissimos molestias!</p>
            <div className="flex mt-5">
            <FaCheckDouble />
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex mt-5">
            <FaCheckDouble />
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <button className="p-2 border mt-10">Tell us How Can we Help</button>
          </div>
        </div>
      </div>

    </div>
  );
};
