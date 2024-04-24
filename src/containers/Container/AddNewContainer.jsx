import React from "react";
import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import ArrowRight from "../../assets/Icon/ArrowRight.svg";
import logo from "../../assets/logo.svg";

const AddNewContainer = () => {
  return (
    <div className="containerBody"> 
      <section class="w-[71.13rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[2.56rem] max-w-full text-left text-[1.5rem] text-bodytext-100 font-poppins mq750:gap-[2.56rem]">
      <div class="self-stretch flex flex-row items-center justify-between gap-[4.25rem] max-w-full mq1050:flex-wrap">
            <div class="flex flex-row items-center justify-start gap-[0.31rem] max-w-full mq450:flex-wrap">
              <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.19rem]">
                Container
              </h2>
              <img
                class="h-[0.69rem] w-[0.44rem] relative object-contain"
                alt=""
                src={ArrowRight}
              />

              <div class="relative text-[1rem] tracking-[0.02em] capitalize">
                Add New Container
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
            <div class="w-[61rem] flex flex-row items-start justify-end max-w-full">
              <form class="m-0 w-[57.44rem] rounded-3xl bg-white flex flex-col items-center justify-center  pt-[1.44rem] pb-[3rem] pr-[4.44rem] pl-[3.84rem] box-border relative gap-[1.13rem] max-w-full mq1050:pr-[2.19rem] mq1050:box-border mq750:pt-[1.25rem] mq750:pb-[1.94rem] mq750:box-border">
                <div class="w-[57.44rem] h-[41.5rem] relative rounded-3xl bg-white hidden max-w-full z-[0]"></div>
                <div class="h-[4.81rem] flex flex-col items-center justify-start">
                  <img
                    class="w-[2.15rem] h-[1.94rem] relative z-[2]"
                    loading="eager"
                    alt=""
                    src={logo}
                  />

                  <h3 class="m-0 relative text-[1.25rem] leading-[2.5rem] capitalize font-medium font-poppins text-darkslategray-200 text-left z-[1] mq450:text-[1rem] mq450:leading-[2rem]">
                    Add new container
                  </h3>
                </div>
                <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] min-h-[5.63rem] max-w-full mq450:gap-[2.69rem]">
                  <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[1.38rem] min-w-[15.88rem] max-w-full z-[1]">
                    <input
                      class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                      type="text"
                      // placeholder="Name"
                    />

                    <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                      Name
                    </div>
                    <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                      <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                        Name
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[1.38rem] min-w-[15.88rem] max-w-full z-[1]">
                    <input
                      class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                      type="text"
                    />

                    <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                      Description
                    </div>
                    <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                      <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                        Description
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch flex flex-row items-start justify-start gap-[2.69rem] min-h-[5.63rem] max-w-full mq450:gap-[2.69rem] mq750:flex-wrap">
                  <div class="flex-1 flex flex-col items-center justify-center relative min-w-[15.88rem] max-w-full mq750:flex-1">
                    <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] relative gap-[1.38rem] z-[1]">
                      <input
                        class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                        type="text"
                      />

                      <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                        Image
                      </div>
                      <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                          Image
                        </div>
                      </div>
                    </div>
                    <img
                      class="w-[0.69rem] h-[0.44rem] absolute my-0 mx-[!important] right-[1.63rem] bottom-[1.5rem] z-[2]"
                      alt=""
                      src="/public/vector-12.svg"
                    />
                  </div>
                  <div class="flex-[0.9591] flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[1.38rem] min-w-[15.88rem] max-w-full z-[1] mq750:flex-1">
                    <input
                      class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                      type="text"
                    />

                    <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                      Volume
                    </div>
                    <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                      <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                        Volume
                      </div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
                  <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[1.38rem] min-w-[15.88rem] max-w-full z-[1]">
                    <input
                      class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                      type="text"
                    />

                    <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                      Network
                    </div>
                    <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                      <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                        Network
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[1.38rem] min-w-[15.88rem] max-w-full z-[1]">
                    <input
                      class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                      type="text"
                    />

                    <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                      Hostname
                    </div>
                    <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                      <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                        IDE
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-[0rem] h-[1.25rem] absolute my-0 mx-[!important] right-[27.88rem] bottom-[2.56rem] text-[0.88rem] leading-[1.25rem] capitalize font-manrope text-bodytext-50 text-left inline-block z-[1]"></div>
                <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
                  <div class="flex-1 flex flex-col items-start justify-start gap-[1.13rem] min-w-[15.88rem] max-w-full">
                    <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] relative gap-[1.38rem] z-[1]">
                      <input
                        class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                        type="text"
                      />

                      <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                        Ip
                      </div>
                      <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                          Ip
                        </div>
                      </div>
                    </div>
                    <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] relative gap-[1.38rem] z-[1]">
                      <input
                        class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                        type="text"
                      />

                      <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                        Endpoint
                      </div>
                      <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                          Endpoint
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex flex-col items-start justify-start gap-[2.94rem] min-w-[15.88rem] max-w-full mq450:gap-[2.94rem]">
                    <div class="self-stretch flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] relative gap-[1.38rem] z-[1]">
                      <input
                        class="[outline:none] bg-[transparent] w-full h-[3.13rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.19rem] left-[0rem] rounded-lg box-border border-[1px] border-solid border-darkslategray-300"
                        type="text"
                      />

                      <div class="relative text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-poppins text-bodytext-50 text-left">
                        Ports
                      </div>
                      <div class="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
                        <div class="relative text-[0.88rem] leading-[1.25rem] font-poppins text-bodytext-50 text-left z-[1]">
                          Ports
                        </div>
                      </div>
                    </div>
                    <button class="cursor-pointer [border:none] p-[0.94rem] bg-coral-100 self-stretch rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[2] hover:bg-chocolate-100">
                      <div class="h-[3.13rem] w-[24.44rem] relative rounded-lg bg-coral-100 hidden max-w-full"></div>
                      <b class="relative text-[0.88rem] leading-[1.25rem] capitalize font-poppins text-white text-left z-[1]">
                        add new Container
                      </b>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
    </div>
  );
};

export default AddNewContainer;
