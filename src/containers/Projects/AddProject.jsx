import React from "react";
import logo from "../../assets/logo.svg";

import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";

import ArrowRight from "../../assets/Icon/ArrowRight.svg";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const AddProject = () => {
  return (
    <div className=" bg-slate-100  pt-10 pl-[260px] h-[95vh]">
      <section class="w-[71.125rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[5rem_0rem] max-w-full text-left text-[1.5rem] text-midnightblue font-poppins lg:gap-[5rem_0rem] mq750:gap-[5rem_0rem]">
        <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
          <div class="flex flex-row items-center justify-start gap-[0rem_0.344rem]">
            <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.188rem]">
              Projects
            </h2>
            <img
              class="h-[0.688rem] w-[0.438rem] relative object-contain"
              alt=""
              src={ArrowRight}
            />

            <div class="relative text-[1rem] tracking-[0.02em] capitalize">
              Add Project
            </div>
          </div>
          <div class="flex flex-row items-start justify-start gap-[0rem_1.375rem] max-w-full text-right text-[0.75rem] mq450:flex-wrap">
            <div class="flex flex-row items-start justify-start gap-[0rem_0.25rem]">
              <div class="rounded-lg bg-white flex flex-row items-center justify-start py-[0.25rem] pr-[0.625rem] pl-[0.5rem] gap-[0rem_0.375rem]">
                <img
                  class="h-[1.313rem] w-[1.313rem] relative"
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
                  class="h-[1.313rem] w-[1.313rem] relative"
                  alt=""
                  src={setting}
                />
              </div>
            </div>
          </div>
        </div>
        <form class="m-0 w-[57.44rem] rounded-3xl bg-white flex flex-col items-center justify-start pt-[2.13rem] pb-[2.75rem] pr-[2.81rem] pl-[2.75rem] box-border relative gap-[1.56rem] max-w-full z-[2] mq1050:pl-[1.38rem] mq1050:pr-[1.38rem] mq1050:box-border mq750:pt-[1.38rem] mq750:pb-[1.81rem] mq750:box-border">
          <div class="w-[24.44rem] h-[5.13rem] relative hidden max-w-full z-[0]">
            <div class="absolute w-full top-[1.81rem] right-[0rem] left-[0rem] rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-300"></div>
            <div class="absolute top-[3.31rem] right-[1rem] w-[1rem] h-[0.63rem]">
              <div class="absolute top-[0rem] right-[0rem] text-[1.13rem] leading-[0.63rem] font-font-awesome-6-pro text-bodytext-50 text-left inline-block w-full h-full">
                
              </div>
            </div>
            <div class="absolute top-[2.81rem] left-[1rem] text-[0.88rem] leading-[1.25rem] font-manrope text-bodytext-50 text-left">
              role
            </div>
            <div class="absolute top-[0.25rem] left-[0.5rem] text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-manrope text-bodytext-50 text-left">
              role
            </div>
          </div>
          <div class="w-[57.44rem] h-[36rem] relative rounded-3xl bg-white hidden max-w-full z-[1]"></div>
          <div class="w-[0rem] h-[1.25rem] absolute my-0 mx-[!important] bottom-[2.13rem] left-[16.38rem] text-[0.88rem] leading-[1.25rem] capitalize font-manrope text-bodytext-50 text-left inline-block z-[3]"></div>
          <div class="flex flex-row items-start justify-start py-[0rem] pr-[0.38rem] pl-[0rem] box-border max-w-full">
            <div class="flex flex-col items-center justify-start max-w-full">
              <img
                class="w-[2.15rem] h-[1.94rem] relative z-[4]"
                loading="eager"
                alt=""
                src={logo}
              />

              <h3 class="m-0 relative text-[1.25rem] leading-[2.5rem] capitalize font-medium font-poppins text-darkslategray-200 text-left z-[3] mq450:text-[1rem] mq450:leading-[2rem]">
                Add Project
              </h3>
              <div class="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 whitespace-pre-wrap text-center z-[4]">
                Improve business performance with Comvi dashboards
              </div>
            </div>
          </div>
          <div class="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
              <div class="flex-1  flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm font-medium text-bodytext-50 dark:text-white"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Description"
                  required
                />
              </div>
            </div>

            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[3rem] max-w-full mq450:gap-[3rem]">
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2  text-sm w-full uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Start Date
                </label>
                <div className="w-full ">
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                  >
                    <DemoContainer
                      components={[
                        "DatePicker",
                        "MobileDatePicker",
                        "DesktopDatePicker",
                        "StaticDatePicker",
                      ]}
                    >
                      {" "}
                      <DesktopDatePicker
                        className="bg-gray-50  w-full  h-[3.63rem] text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        defaultValue={dayjs()}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>{" "}
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2  text-sm w-full uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  End Date
                </label>
                <div className="w-full ">
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                  >
                    <DemoContainer
                      components={[
                        "DatePicker",
                        "MobileDatePicker",
                        "DesktopDatePicker",
                        "StaticDatePicker",
                      ]}
                    >
                      {" "}
                      <DesktopDatePicker
                        className="bg-gray-50  w-full  h-[3.63rem] text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        defaultValue={dayjs()}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>{" "}
            </div>
          </div>
          <div class="w-[26.63rem] flex flex-row items-start justify-start py-[0rem] pr-[2.19rem] pl-[0rem] box-border max-w-full">
            <button class="cursor-pointer [border:none] p-[0.94rem] bg-coral-100 flex-1 rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[4] hover:bg-chocolate-100">
              <div class="h-[3.13rem] w-[24.44rem] relative rounded-lg bg-coral-100 hidden max-w-full"></div>
              <b class="relative text-[0.88rem] leading-[1.25rem] capitalize font-poppins text-white text-left z-[1]">
                Add Project
              </b>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProject;
