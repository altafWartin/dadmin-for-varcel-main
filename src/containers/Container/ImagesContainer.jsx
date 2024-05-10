import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ImageContainer from "./ImagesContainer";

import Form from "react-bootstrap/Form";
import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import close from "../../assets/Icon/close.png";
import logo from "../../assets/logo.svg";
import threedots from "../../assets/Icon/threedots.svg";
import p2 from "../../assets/Images/p2.svg";
import p3 from "../../assets/Images/p3.svg";
import p4 from "../../assets/Images/p4.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ImagesContainer = () => {
  return (
    <div class="self-stretch flex flex-col mt-12 items-end justify-start gap-[0.81rem] max-w-full">
      <div class="self-stretch mb-2 flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-[1.5rem] text-bodytext-100 mq750:flex-wrap">
        <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.19rem]">
          Images
        </h2>
        <div class="flex flex-row items-start justify-start gap-[1.38rem] max-w-full text-right text-[0.75rem] mq450:flex-wrap">
          <Link
            to="/addImage"
            class="cursor-pointer no-underline [border:none] py-[0.38rem] pr-[1.38rem] pl-[1.81rem] bg-coral-100 rounded-3xs flex flex-row items-center justify-end whitespace-nowrap hover:bg-chocolate-100"
          >
            <div class="h-[2rem] w-[7.63rem] relative rounded-3xs bg-coral-100 hidden"></div>
            <div class="relative text-[0.94rem] leading-[1.25rem] font-semibold font-poppins text-white text-left z-[1]">
              Add New
            </div>
          </Link>

          <div class="flex flex-row items-start justify-start gap-[0.25rem]">
            <div class="rounded-lg bg-white flex flex-row items-center justify-start py-[0.25rem] pr-[0.56rem] pl-[0.5rem] gap-[0.38rem]">
              <img
                class="h-[1.31rem] w-[1.31rem] relative"
                alt=""
                src={calendar}
              />

              <div class="relative font-medium">Oct 16 - Oct 23</div>
              <img
                class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                alt=""
                src={arrowdown}
              />
            </div>
            <div class="rounded-lg bg-white flex flex-row items-center justify-start p-[0.25rem]">
              <img
                class="h-[1.31rem] w-[1.31rem] relative"
                alt=""
                src={setting}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-col items-center justify-start gap-[0.5rem] min-h-[2.63rem] max-w-full text-[1.13rem] text-black">
        <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.81rem] pl-[1.31rem] box-border max-w-full">
          <div class="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq750:flex-wrap">
            <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.19rem] pl-[0rem]">
              <div class="relative tracking-[-0.02em] capitalize font-medium">
                ImageId
              </div>
            </div>
            <div class="flex flex-col items-start justify-start py-[0rem] pr-[1.19rem] pl-[0rem]">
              <div class="relative tracking-[-0.02em] capitalize font-medium">
                Repository
              </div>
            </div>
            <div class="w-[6.75rem] flex flex-col items-start justify-start">
              <div class="relative tracking-[-0.02em] capitalize font-medium">
                Tag
              </div>
            </div>
            <div class="flex flex-col items-start justify-start py-[0rem] pr-[2.25rem] pl-[0rem]">
              <div class="h-[1.69rem] relative tracking-[-0.02em] capitalize font-medium inline-block">
                Created
              </div>
            </div>
            <div class="h-[1.69rem] relative tracking-[-0.02em] capitalize font-medium inline-block">
              Size
            </div>
            <div class="h-[1.69rem] relative tracking-[-0.02em] capitalize font-medium inline-block">
              edit
            </div>
            <div class="h-[1.69rem] relative tracking-[-0.02em] capitalize font-medium inline-block">
              action
            </div>
          </div>
        </div>
      </div>
      <div class="self-stretch space-y-3 overflow-y-auto scrollbar-thumb-dark-700 h-[250px] mb-[5rem] items-start justify-start pt-[-2rem] px-[0rem] pb-[0.75rem] box-border max-w-full">
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                // onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                // onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                //  onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                // onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                // onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                // onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                // onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                //  onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
        <div class="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-center py-[1rem] pr-[2.88rem] pl-[1.31rem] relative max-w-full border-[1px] border-solid border-whitesmoke lg:pr-[1.44rem] lg:box-border">
          <div class="w-[69.94rem] h-[4.75rem] relative rounded-2xl bg-white box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke"></div>
          <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq1050:flex-wrap">
            <div class="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] text-[1rem] text-bodytext-100 font-plus-jakarta-sans">
              <div class="relative tracking-[-0.02em] font-medium z-[1]">
                Avala Project
              </div>
            </div>
            <div class="w-[7.31rem] relative tracking-[-0.02em] inline-block shrink-0 z-[1]">
              Carter Mango
            </div>
            <div class="flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem]">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[7.88rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="relative tracking-[-0.02em] z-[1]">
                Sun, 10 May 2022
              </div>
            </div>
            <div class="w-[1.38rem] flex flex-col items-start justify-start pt-[0.31rem] px-[0rem] pb-[0rem] box-border">
              <div class="h-[1.31rem] relative tracking-[-0.02em] inline-block z-[1]">
                0
              </div>
            </div>

            <div class="w-[10.75rem] flex flex-row items-center justify-start gap-[4.38rem]">
              <div class="flex flex-row items-center justify-start gap-[1rem]">
                <Link to="/editImage" className="no-underline">
                  <div class="flex flex-row items-center justify-center py-[0.63rem] pr-[0.69rem] pl-[0.94rem] relative z-[1]">
                    <div class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-coral-200"></div>
                    <div class="relative text-[1.13rem] leading-[1.5rem] font-font-awesome-6-pro text-coral-100 text-left z-[1]">
                      
                    </div>
                  </div>
                </Link>

                {/* <img
            class="h-[1.25rem] w-[1.28rem] relative z-[1]"
            alt=""
          /> */}
              </div>
              <button
                className="bg-white"
                // onClick={openPopup}
              >
                <img
                  class="h-[1.25rem] w-[1.28rem] relative z-[1]"
                  alt=""
                  src={threedots}
                />
              </button>
            </div>
          </div>
          <img
            class="w-[0.22rem] h-[0.21rem] absolute my-0 mx-[!important] top-[0.83rem] right-[3.5rem] z-[1]"
            alt=""
            src="/public/vector-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesContainer;
