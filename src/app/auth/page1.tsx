"use client";

import { useState } from "react";

export default function AuthPage() {
  const [rightPanelActive, setRightPanelActive] = useState(false);

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#f6f5f7] font-[Montserrat]">
      <div
        className={`bg-white rounded-[10px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-[768px] max-w-full min-h-[480px] transition-all duration-700 ${
          rightPanelActive ? "right-panel-active" : ""
        }`}
        id="container"
      >
        {/* Sign Up */}
        <div
          className={`absolute top-0 h-full transition-all duration-700 ease-in-out left-0 w-1/2 z-10 flex items-center justify-center flex-col ${
            rightPanelActive ? "opacity-0 z-1" : "opacity-100 z-10"
          }`}
        >
          <form className="bg-white flex flex-col items-center justify-center px-[50px] h-full text-center w-full">
            <h1 className="font-bold m-0">Create Account</h1>
            <div className="my-5 flex">
              <a
                href="#"
                className="border border-[#dddddd] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="border border-[#dddddd] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="border border-[#dddddd] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-[12px]">
              or use your email for registration
            </span>
            <input
              type="text"
              placeholder="Name"
              className="bg-[#eee] border-none px-[15px] py-[12px] my-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#eee] border-none px-[15px] py-[12px] my-2 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#eee] border-none px-[15px] py-[12px] my-2 w-full"
            />
            <button className="rounded-[20px] border border-[#ff4b2b] bg-[#ff4b2b] text-white text-[12px] font-bold px-[45px] py-[12px] tracking-[1px] uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none mt-4">
              Sign Up
            </button>
          </form>
        </div>
        {/* Sign In */}
        <div
          className={`absolute top-0 h-full transition-all duration-700 ease-in-out left-0 w-1/2 z-20 flex items-center justify-center flex-col ${
            rightPanelActive ? "translate-x-full opacity-100 z-20" : ""
          }`}
        >
          <form className="bg-white flex flex-col items-center justify-center px-[50px] h-full text-center w-full">
            <h1 className="font-bold m-0">Sign in</h1>
            <div className="my-5 flex">
              <a
                href="#"
                className="border border-[#dddddd] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="border border-[#dddddd] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="border border-[#dddddd] rounded-full inline-flex justify-center items-center mx-[5px] h-[40px] w-[40px]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-[12px]">or use your account</span>
            <input
              type="email"
              placeholder="Email"
              className="bg-[#eee] border-none px-[15px] py-[12px] my-2 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#eee] border-none px-[15px] py-[12px] my-2 w-full"
            />
            <a
              href="#"
              className="text-[#333] text-[14px] no-underline my-[15px]"
            >
              Forgot your password?
            </a>
            <button className="rounded-[20px] border border-[#ff4b2b] bg-[#ff4b2b] text-white text-[12px] font-bold px-[45px] py-[12px] tracking-[1px] uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none mt-4">
              Sign In
            </button>
          </form>
        </div>
        {/* Overlay */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 z-[100] ${
            rightPanelActive ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] bg-no-repeat bg-cover bg-left text-white relative left-[-100%] h-full w-[200%] transform transition-transform duration-700 ${
              rightPanelActive ? "translate-x-1/2" : ""
            }`}
          >
            <div
              className={`absolute flex items-center justify-center flex-col px-[40px] text-center top-0 h-full w-1/2 transform transition-transform duration-700 ${
                rightPanelActive ? "-translate-x-0" : "-translate-x-1/5"
              }`}
            >
              <h1 className="font-bold m-0">Welcome Back!</h1>
              <p className="text-[14px] font-light leading-5 tracking-[0.5px] my-5 mb-[30px]">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="bg-transparent border-white rounded-[20px] border text-white text-[12px] font-bold px-[45px] py-[12px] tracking-[1px] uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none mt-4"
                onClick={() => setRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
            <div
              className={`absolute flex items-center justify-center flex-col px-[40px] text-center top-0 h-full w-1/2 right-0 transform transition-transform duration-700 ${
                rightPanelActive ? "translate-x-1/5" : ""
              }`}
            >
              <h1 className="font-bold m-0">Hello, Friend!</h1>
              <p className="text-[14px] font-light leading-5 tracking-[0.5px] my-5 mb-[30px]">
                Enter your personal details and start journey with us
              </p>
              <button
                className="bg-transparent border-white rounded-[20px] border text-white text-[12px] font-bold px-[45px] py-[12px] tracking-[1px] uppercase transition-transform duration-75 ease-in active:scale-95 focus:outline-none mt-4"
                onClick={() => setRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
