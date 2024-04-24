import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";

import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import close from "../../assets/Icon/close.png";

import ArrowRight from "../../assets/Icon/ArrowRight.svg";

const AddNewWorkflow = () => {
  const [paramCount, setParamCount] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [labelName, setLabelName] = useState("");
  const [labelNames, setLabelNames] = useState([]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleLabelChange = (event) => {
    setLabelName(event.target.value);
  };

  const submitLabel = () => {
    setLabelNames((prevLabelNames) => [...prevLabelNames, labelName]);
    setParamCount(paramCount + 1);
    setLabelName("");
    closePopup();
  };

  const handleDelete = (index) => {
    // Create a copy of the labelNames array
    const updatedLabelNames = [...labelNames];
    // Remove the element at the specified index
    updatedLabelNames.splice(index, 1);
    // Update the state with the modified array
    setLabelNames(updatedLabelNames);
    // Update paramCount to reflect the changes
    setParamCount(paramCount - 1);
  };

  useEffect(() => {
    console.log(labelName, "labelName");
    console.log(labelNames, "labelNames");
  }, [labelName, labelNames]);

  return (
    <div className="containerBody">
      {isPopupOpen && (
        <div class="fixed top-1/2 left-1/2 transform bg-blend-difference -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
          <button
            class="absolute top-2 right-2 bg-white"
            onClick={() => setPopupOpen(false)}
          >
            {/* Add your cut icon SVG here */}
            <img src={close} class="h-6 w-6 text-gray-500" alt="" />
          </button>
          <div class="relative h-[21.31rem] text-[0.88rem] text-dimgray font-poppins">
            <div class="w-full relative h-[21.31rem]  text-[0.88rem] text-dimgray font-poppins">
              <div class="absolute w-full top-[9.19rem] right-[0rem] left-[0rem] h-[12.13rem]">
                <input
                  placeholder="Enter label name"
                  type="text"
                  value={labelName}
                  onChange={handleLabelChange}
                  className="w-full mb-3 px-3 right-[0rem] left-[0rem] rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                />
                <button
                  onClick={submitLabel}
                  className="mb-3 w-full top-[0rem] right-[0rem] left-[0rem] hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
                >
                  Submit
                </button>
              </div>
              <div class="absolute top-[calc(50%_-_139.5px)] left-[calc(50%_-_89.5px)] text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
                Workflow Actions
              </div>
              <img
                class="absolute top-[0rem] left-[10.19rem] w-[2.15rem] h-[1.94rem]"
                alt=""
                src={logo}
              />

              <div class="absolute top-[4.44rem] justify-center left-[2.06rem] tracking-[-0.02em] whitespace-pre-wrap text-center inline-block w-[18.31rem]">
                Enter input lable name.
              </div>
            </div>
          </div>
        </div>
      )}
      <section
        // style={{ paddingLeft: "17rem", paddingTop: "8rem" }}
        class=" w-full h-[130vh] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[5rem] max-w-full text-left text-[1.5rem] text-bodytext-100 font-poppins lg:gap-[5rem] mq750:gap-[5rem]"
      >
        <div class="self-stretch flex flex-row items-center justify-between gap-[4.25rem] max-w-full mq1050:flex-wrap">
          <div class="flex flex-row items-center justify-start gap-[0.31rem] max-w-full mq450:flex-wrap">
            <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.19rem]">
              Workflow
            </h2>
            <img
              class="h-[0.69rem] w-[0.44rem] relative object-contain"
              alt=""
              src={ArrowRight}
            />

            <div class="relative text-[1rem] tracking-[0.02em] capitalize">
              Add Workflow
            </div>
          </div>
          <div class="flex flex-row items-start justify-end gap-[1.38rem] max-w-full text-right text-[0.75rem] mq450:flex-wrap">
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
                Add Workflow
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

            <div class="self-stretch items-start justify-start  max-w-full mq450:gap-[3rem]">
              {/* Existing Param1 and Param2 fields */}
              {[...Array(paramCount)].map((_, index) => (
                <div
                  key={index}
                  className="flex-1 flex  flex-col w-full items-start  justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] z-[3]"
                >
                  <label
                    htmlFor={labelNames[index]}
                    className="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                  >
                    {labelNames[index]}
                  </label>
                  <div className="flex items-center w-full">
                    <input
                      type="text"
                      // id={labelNames[index]} // You can set the id if needed
                      className="bg-gray-50 border h-[3.13rem] capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder={labelNames[index]}
                      required
                    />
                    <i
                      className="bi bi-trash ml-2 cursor-pointer mx-4 text-red-500"
                      onClick={() => handleDelete(index)}
                    ></i>
                  </div>
                </div>
              ))}
              <div className="w-full flex flex-row items-start justify-end py-[0rem] pr-[4.19rem] pl-[0rem] box-border max-w-full">
                <button
                  type="button"
                  // onClick={addParamField}
                  onClick={openPopup}
                  className=" flex justify-end bg-white cursor-pointer p-2 height-5 weight-5 rounded ̰"
                  disabled={paramCount === 6}
                >
                  <i className="bi bi-plus-square text-bodytext-50 fs-4"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="w-[26.63rem] flex flex-row items-start justify-start py-[0rem] pr-[2.19rem] pl-[0rem] box-border max-w-full">
            <button class="cursor-pointer [border:none] p-[0.94rem] bg-coral-100 flex-1 rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[4] hover:bg-chocolate-100">
              <div class="h-[3.13rem] w-[14.44rem] relative rounded-lg bg-coral-100 hidden max-w-full"></div>
              <b class="relative text-[0.88rem] leading-[1.25rem] capitalize font-poppins text-white text-left z-[1]">
                Add Workflow
              </b>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddNewWorkflow;
