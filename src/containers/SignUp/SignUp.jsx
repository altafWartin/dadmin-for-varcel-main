import React from "react";
import logo from "../../assets/logo.svg";
import google from "../../assets/Icon/google.png";
import twitter from "../../assets/Icon/twitter.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div class="w-full relative px-[450px] pt-[50px] pb-[50px] bg-ghostwhite shadow-[0px_4px_74px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5.75rem] box-border gap-[18.31rem] tracking-[normal] mq700:gap-[18.31rem] mq950:flex-wrap mq975:gap-[18.31rem]">
        <form class="m-0 w-1/4 self-stretch flex-1 rounded-3xl bg-white flex flex-col items-center justify-start mt-10 pt-[1.75rem] pb-[2.13rem] pr-[2.94rem] pl-[3rem] box-border gap-[1.5rem] max-w-full z-[2] mq700:pl-[1.5rem] mq700:pr-[1.44rem] mq700:box-border mq950:pt-[1.25rem] mq950:pb-[1.38rem] mq950:box-border">
          <div class="self-stretch flex flex-col items-center justify-start gap-[0.31rem]">
            <img
              class="w-[2.15rem] h-[1.94rem] relative z-[3]"
              loading="eager"
              alt=""
              src={logo}
            />

            <h3 class="m-0 relative text-[1.25rem] leading-[2.5rem] capitalize font-medium font-poppins text-darkslategray-100 text-left whitespace-nowrap z-[3] mq450:text-[1rem] mq450:leading-[2rem]">
              sign up
            </h3>
            <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0.19rem] relative gap-[0.44rem] z-[3]">
              <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-dimgray-200 text-left">
Name
                </div>
              </div>

              <input
                class="[outline:none] bg-[transparent] px-3 self-stretch h-[3.13rem] relative rounded-lg box-border min-w-[14.69rem] border-[1px] border-solid border-darkslategray-200"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0.19rem] relative gap-[0.44rem] z-[3]">
              <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-dimgray-200 text-left">
                  Email Address
                </div>
              </div>

              <input
                class="[outline:none] bg-[transparent] px-3 self-stretch h-[3.13rem] relative rounded-lg box-border min-w-[14.69rem] border-[1px] border-solid border-darkslategray-200"
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0.19rem] relative gap-[0.44rem] z-[3]">
              <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-dimgray-200 text-left">
                  Password
                </div>
              </div>

              <input
                class="[outline:none] bg-[transparent] px-3 self-stretch h-[3.13rem] relative rounded-lg box-border min-w-[14.69rem] border-[1px] border-solid border-darkslategray-200"
                type="text"
                placeholder="password"
              />
            </div>
          </div>

          <div class="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
            <button class="cursor-pointer [border:none] p-[0.31rem] bg-orange self-stretch rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[3] hover:bg-chocolate">
              <div class="h-[3.13rem] w-[24.44rem] relative rounded-lg bg-coral hidden max-w-full"></div>
              <div class="relative text-[1.25rem] leading-[2.5rem]  capitalize font-semibold font-poppins text-white text-left z-[4]">
                sign up
              </div>
            </button>
            <div class="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
              <div class="self-stretch flex flex-row items-end justify-center pt-[1.81rem] px-[0rem] pb-[0.19rem] box-border max-w-full z-[4]">
                <button class="cursor-pointer py-[0.88rem] pr-[1.25rem] pl-[2rem] bg-[transparent] flex-1 rounded-lg box-border flex flex-row items-center justify-center gap-[0.63rem] max-w-full whitespace-nowrap border-[1px] border-solid border-darkslategray-200 hover:bg-dimgray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
                  <div class="h-[3.13rem] w-[24.44rem] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-darkslategray-200"></div>
                  <img
                    class="h-[1.38rem] w-[1.38rem] relative object-cover min-h-[1.38rem] z-[5]"
                    alt=""
                    src={google}
                  />

                  <div class="relative text-[0.94rem] leading-[1.25rem] font-medium font-poppins text-dimgray-200 text-left z-[5]">
                    Sign Up with Google
                  </div>
                </button>
              </div>
              <div class="self-stretch flex flex-row items-end justify-center pt-[1.81rem] px-[0rem] pb-[0.19rem] box-border max-w-full z-[4]">
                <button class="cursor-pointer py-[0.88rem] pr-[1.25rem] pl-[2rem] bg-[transparent] flex-1 rounded-lg box-border flex flex-row items-center justify-center gap-[0.63rem] max-w-full whitespace-nowrap border-[1px] border-solid border-darkslategray-200 hover:bg-dimgray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-300">
                  <div class="h-[3.13rem] w-[24.44rem] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-darkslategray-200"></div>
                  <img
                    class="h-[1.38rem] w-[1.38rem] relative object-cover min-h-[1.38rem] z-[5]"
                    alt=""
                    src={twitter}
                  />

                  <div class="relative text-[0.94rem] leading-[1.25rem] font-medium font-poppins text-dimgray-200 text-left z-[5]">
                    Sign Up with Twitter
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-start justify-start gap-[0.19rem]">
            <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-dimgray-200 text-left z-[3]">
              Already have an Account?
            </div>
            <Link to='/login' class="relative text-[0.94rem] leading-[1.25rem] font-medium font-poppins text-coral text-left z-[3]">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
