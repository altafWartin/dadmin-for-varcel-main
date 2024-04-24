import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Dashboard.module.css";
import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";
import Group239444 from "../../assets/Icon/Group 239444.png";
// import Progresswheel from "../../assets/Icon/Progresswheel.png";
import chart2 from "../../assets/Icon/chart2.svg";
import chartsuccess from "../../assets/Icon/chartsuccess.svg";
import donoughtChart from "../../assets/Icon/donought-chart.svg";
import Progresswheel from "../../assets/Icon/ProgressWheel.svg";
import vector1 from "../../assets/Icon/vector-1.svg";
import vector2 from "../../assets/Icon/Vector 10.png";
import vector3 from "../../assets/Icon/Vector3.svg";
import vector8 from "../../assets/Icon/Vector 8.png";
import elipes from "../../assets/Icon/elipes.svg";
import trendup from "../../assets/Icon/trendup.svg";
import trenddown from "../../assets/Icon/trendup-1.svg";
import graph from "../../assets/Icon/graph.svg";
import reportFrame from "../../assets/Icon/report-frame.svg";
import line from "../../assets/Icon/line.svg";
import vectro6 from "../../assets/Icon/Vector 6.png";
import menu from "../../assets/Icon/Menu.svg";
import WheelGroup from "../../assets/Icon/WheelGroup.svg";

const Dashboard = () => {
  return (
    <>
      <div className="w-full bg-slate-100">
        <main class="self-stretch pt-[1rem] pb-[2rem] flex flex-row items-start justify-start py-[0rem] px-[2rem] box-border  shrink-0">
          <section class="flex-1 flex flex-col items-start justify-start gap-[0.75rem] max-w-full text-center text-[1.13rem] text-darkslateblue-300 font-lato">
            {/* <div class="self-stretch flex flex-row items-start  ml-[230px]  justify-center gap-[0.63rem] lg:flex-wrap">
              <div class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-[1.25rem] pr-[0.75rem] pl-[0.88rem] box-border gap-[4.56rem] min-w-[13.56rem] max-w-[13.81rem] min-h-[15.31rem] lg:min-h-[auto]">
                <div class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden"></div>
                <h3 class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]">
                  Stat title here
                </h3>
                <div class="w-[6.31rem] h-[1.75rem] relative text-[2.25rem] font-semibold font-poppins flex items-center justify-center shrink-0 z-[1] mq450:text-[1.38rem] mq1050:text-[1.81rem]">
                  68%
                </div>
              </div>
              <div class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start pt-[1.25rem] pb-[1.75rem] pr-[0.75rem] pl-[0.88rem] box-border min-w-[13.56rem] max-w-[13.81rem]">
                <div class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden z-[1]"></div>
                <div class="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
                  <h3 class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]">
                    Stat title here
                  </h3>
                  <div class="self-stretch flex flex-row items-center justify-center py-[0rem] px-[1.19rem]">
                    <div class="h-[9.81rem] flex-1 relative">
                      <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[1]"></div>
                      <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]"></div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.44rem] pl-[1.69rem] mt-[-1.19rem] text-[1rem] text-darkslateblue-200">
                  <div class="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                    <b class="w-[1.75rem] relative flex items-center justify-center shrink-0 z-[4]">
                      00
                    </b>
                    <div class="w-[3rem] flex flex-row items-start justify-start relative">
                      <b class="flex-1 relative z-[4]">100</b>
                      <div class="h-[8.75rem] w-[8.75rem] my-0 mx-[!important] absolute top-[-8.06rem] left-[-6.06rem] flex flex-col items-center justify-start text-[2rem] text-darkslateblue-300">
                        <div class="self-stretch h-[8.75rem] relative rounded-[50%] bg-white z-[3]"></div>
                        <div class="w-[6.31rem] h-[1.75rem] relative flex items-center justify-center shrink-0 z-[4] mt-[-5.5rem] mq450:text-[1.19rem] mq1050:text-[1.63rem]">
                          68%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start pt-[1.25rem] pb-[1.75rem] pr-[0.75rem] pl-[0.88rem] box-border min-w-[13.56rem] max-w-[13.81rem]">
                <div class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden z-[1]"></div>
                <div class="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
                  <h3 class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]">
                    Stat title here
                  </h3>
                  <div class="self-stretch flex flex-row items-center justify-center py-[0rem] px-[1.19rem]">
                    <div class="h-[9.81rem] flex-1 relative">
                      <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[1]"></div>
                      <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]"></div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.44rem] pl-[1.69rem] mt-[-1.19rem] text-[1rem] text-darkslateblue-200">
                  <div class="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                    <b class="w-[1.75rem] relative flex items-center justify-center shrink-0 z-[4]">
                      00
                    </b>
                    <div class="w-[3rem] flex flex-row items-start justify-start relative">
                      <b class="flex-1 relative z-[4]">100</b>
                      <div class="h-[8.75rem] w-[8.75rem] my-0 mx-[!important] absolute top-[-8.06rem] left-[-6.06rem] flex flex-col items-center justify-start text-[2rem] text-darkslateblue-300">
                        <div class="self-stretch h-[8.75rem] relative rounded-[50%] bg-white z-[3]"></div>
                        <div class="w-[6.31rem] h-[1.75rem] relative flex items-center justify-center shrink-0 z-[4] mt-[-5.5rem] mq450:text-[1.19rem] mq1050:text-[1.63rem]">
                          68%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
              <div class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start pt-[1.25rem] pb-[1.75rem] pr-[0.75rem] pl-[0.88rem] box-border min-w-[13.56rem] max-w-[13.81rem]">
                <div class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden z-[1]"></div>
                <div class="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
                  <h3 class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]">
                    Stat title here
                  </h3>
                  <div class="self-stretch flex flex-row items-center justify-center py-[0rem] px-[1.19rem]">
                    <div class="h-[9.81rem] flex-1 relative">
                      <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[1]"></div>
                      <div class="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]"></div>
                    </div>
                  </div>
                </div>
                <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.44rem] pl-[1.69rem] mt-[-1.19rem] text-[1rem] text-darkslateblue-200">
                  <div class="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                    <b class="w-[1.75rem] relative flex items-center justify-center shrink-0 z-[4]">
                      00
                    </b>
                    <div class="w-[3rem] flex flex-row items-start justify-start relative">
                      <b class="flex-1 relative z-[4]">100</b>
                      <div class="h-[8.75rem] w-[8.75rem] my-0 mx-[!important] absolute top-[-8.06rem] left-[-6.06rem] flex flex-col items-center justify-start text-[2rem] text-darkslateblue-300">
                        <div class="self-stretch h-[8.75rem] relative rounded-[50%] bg-white z-[3]"></div>
                        <div class="w-[6.31rem] h-[1.75rem] relative flex items-center justify-center shrink-0 z-[4] mt-[-5.5rem] mq450:text-[1.19rem] mq1050:text-[1.63rem]">
                          68%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-[1.25rem] pr-[0.75rem] pl-[0.88rem] box-border gap-[4.56rem] min-w-[13.56rem] max-w-[13.81rem] min-h-[15.31rem] lg:min-h-[auto]">
                <div class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden"></div>
                <h3 class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]">
                  Stat title here
                </h3>
                <div class="w-[6.31rem] h-[1.75rem] relative text-[2.25rem] font-semibold font-poppins flex items-center justify-center shrink-0 z-[1] mq450:text-[1.38rem] mq1050:text-[1.81rem]">
                  68%
                </div>
              </div>
            </div> */}
            <img className="ml-[206px] mb-[-50px]" src={WheelGroup} alt="" />
            <div class="self-stretch ml-[35px] flex flex-row items-start justify-start gap-[0.63rem] max-w-full text-left text-[1rem] text-bodytext-50 font-poppins">
              <div class="flex-1 flex flex-col items-start justify-start gap-[0.75rem] max-w-[calc(100%_-_231px)] mq1050:max-w-full">
                <div class="self-stretch flex flex-row ml-[450px] items-start justify-center gap-[0.63rem] mq1050:flex-wrap">
                  <div class="flex-[0.933] rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-[1.25rem] pr-[0.75rem] pl-[0.88rem] box-border gap-[4.56rem] min-w-[13.56rem] max-w-[13.81rem] min-h-[15.31rem] text-center text-[1.13rem] text-darkslateblue-300 font-lato mq450:flex-1 mq1050:min-h-[auto]">
                    <div class="w-[13.81rem] h-[15.31rem] relative rounded-mini bg-white shadow-[0px_23px_28.6px_rgba(0,_0,_0,_0.03)] hidden"></div>
                    <h3 class="m-0 self-stretch h-[1.75rem] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 z-[1]">
                      Stat title here
                    </h3>
                    <div class="w-[6.31rem] h-[1.75rem] relative text-[2.25rem] font-semibold font-poppins flex items-center justify-center shrink-0 z-[1] mq450:text-[1.38rem] mq1050:text-[1.81rem]">
                      68%
                    </div>
                  </div>

                  <div class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] box-border gap-[3.13rem] min-w-[13.56rem] max-w-[13.81rem]">
                    <div class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"></div>
                    <div class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]">
                      <div class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
                        <div class="relative leading-[1.75rem] font-semibold">
                          Reports
                        </div>
                      </div>
                    </div>
                    <div class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100">
                      <div class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]">
                        <div class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]">
                          <div class="h-[1.38rem] relative inline-block shrink-0 z-[2]">
                            0
                          </div>
                          <div class="relative z-[2]">0</div>
                        </div>
                        <div class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]">
                          <div class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]">
                            <div class="relative z-[2]">0</div>
                            <div class="relative z-[2]">00</div>
                            <div class="relative z-[2]">0</div>
                          </div>
                          <div class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"></div>
                          <img
                            class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                            loading="eager"
                            alt=""
                            src={Group239444}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] box-border gap-[3.13rem] min-w-[13.56rem] max-w-[13.81rem]">
                    <div class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"></div>
                    <div class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]">
                      <div class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
                        <div class="relative leading-[1.75rem] font-semibold">
                          Reports
                        </div>
                      </div>
                    </div>
                    <div class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100">
                      <div class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]">
                        <div class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]">
                          <div class="h-[1.38rem] relative inline-block shrink-0 z-[2]">
                            0
                          </div>
                          <div class="relative z-[2]">0</div>
                        </div>
                        <div class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]">
                          <div class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]">
                            <div class="relative z-[2]">0</div>
                            <div class="relative z-[2]">00</div>
                            <div class="relative z-[2]">0</div>
                          </div>
                          <div class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"></div>
                          <img
                            class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                            loading="eager"
                            alt=""
                            src={Group239444}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] box-border gap-[3.13rem] min-w-[13.56rem] max-w-[13.81rem]">
                    <div class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"></div>
                    <div class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]">
                      <div class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
                        <div class="relative leading-[1.75rem] font-semibold">
                          Reports
                        </div>
                      </div>
                    </div>
                    <div class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100">
                      <div class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]">
                        <div class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]">
                          <div class="h-[1.38rem] relative inline-block shrink-0 z-[2]">
                            0
                          </div>
                          <div class="relative z-[2]">0</div>
                        </div>
                        <div class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]">
                          <div class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]">
                            <div class="relative z-[2]">0</div>
                            <div class="relative z-[2]">00</div>
                            <div class="relative z-[2]">0</div>
                          </div>
                          <div class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"></div>
                          <img
                            class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                            loading="eager"
                            alt=""
                            src={Group239444}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.38rem] pb-[0.38rem] box-border gap-[3.13rem] min-w-[13.56rem] max-w-[13.81rem]">
                    <div class="w-[13.81rem] h-[15.31rem] relative rounded-3xs bg-white hidden"></div>
                    <div class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.06rem] box-border z-[1]">
                      <div class="h-[1.44rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
                        <div class="relative leading-[1.75rem] font-semibold">
                          Reports
                        </div>
                      </div>
                    </div>
                    <div class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem] text-right text-[0.75rem] text-darkslateblue-100">
                      <div class="w-[6.69rem] flex flex-col items-start justify-start gap-[1rem]">
                        <div class="w-[0.44rem] flex flex-col items-start justify-start gap-[0.81rem]">
                          <div class="h-[1.38rem] relative inline-block shrink-0 z-[2]">
                            0
                          </div>
                          <div class="relative z-[2]">0</div>
                        </div>
                        <div class="self-stretch flex flex-row items-start justify-between relative gap-[1.25rem]">
                          <div class="w-[0.44rem] flex flex-col items-end justify-start gap-[1rem]">
                            <div class="relative z-[2]">0</div>
                            <div class="relative z-[2]">00</div>
                            <div class="relative z-[2]">0</div>
                          </div>
                          <div class="h-[4.99rem] w-[0.06rem] relative box-border z-[1] border-r-[1px] border-dashed border-coral-100"></div>
                          <img
                            class="h-[5rem] w-[10.63rem] absolute my-0 mx-[!important] top-[-2.54rem] right-[-5.31rem] z-[2]"
                            loading="eager"
                            alt=""
                            src={Group239444}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-[69.81rem] ml-[230px] flex flex-row items-start justify-center gap-[1rem] max-w-full mq1050:flex-wrap">
                  {/* <div class="w-[33.5rem] rounded-3xs bg-white flex flex-col items-center justify-start pt-[0.63rem] px-[0.31rem] pb-[0.31rem] box-border gap-[1.75rem] min-w-[33.5rem] max-w-full mq750:min-w-full mq1050:flex-1">
                    <div class="self-stretch h-[15.31rem] relative rounded-3xs bg-white hidden"></div>
                    <div class="self-stretch h-[1.48rem] overflow-hidden shrink-0 flex flex-row items-center justify-between py-[0rem] pr-[0.81rem] pl-[0.75rem] box-border gap-[1.25rem] z-[1]">
                      <div class="h-[1.44rem] w-[7.69rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
                        <div class="self-stretch h-[1.63rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
                          <div class="self-stretch relative leading-[1.75rem] font-semibold">
                            Reports
                          </div>
                        </div>
                      </div>
                      <img
                        class="h-[0.22rem] w-[0.88rem] relative object-contain"
                        loading="eager"
                        alt=""
                        src="/public/menu@2x.png"
                      />
                    </div>
                    <div class="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.81rem] pl-[1rem] box-border max-w-full text-right text-[0.75rem] text-darkslateblue-100">
                      <div class="flex-1 flex flex-row items-end justify-start gap-[0.69rem] max-w-full mq750:flex-wrap">
                        <div class="w-[0.81rem] flex flex-col items-start justify-start gap-[0.81rem]">
                          <div class="h-[1.38rem] relative inline-block shrink-0 z-[6]">
                            00
                          </div>
                          <div class="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                            <div class="relative z-[6]">00</div>
                            <div class="relative z-[6]">00</div>
                            <div class="relative z-[6]">00</div>
                            <div class="self-stretch h-[1.13rem] relative">
                              <div class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[6]">
                                00
                              </div>
                              <div class="absolute top-[0rem] left-[0rem] w-full h-full">
                                <div class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[7]">
                                  00
                                </div>
                                <div class="absolute top-[0rem] left-[0rem] inline-block w-full h-full z-[8]">
                                  00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.31rem] box-border min-w-[19.19rem] max-w-full">
                          <div class="self-stretch flex flex-col items-center justify-start pt-[1.63rem] px-[0rem] pb-[0.13rem] box-border relative max-w-full">
                            <img
                              class="w-full h-full absolute my-0 mx-[!important] top-[0.03rem] right-[-0.01rem] bottom-[0.1rem] max-h-full z-[1]"
                              alt=""
                              src="/public/line.svg"
                            />

                            <div class="self-stretch flex flex-row items-center justify-center max-w-full">
                              <div class="h-[7.94rem] flex-1 relative max-w-full">
                                <img
                                  class="absolute top-[-0.01rem] left-[0.02rem] w-full h-full z-[2]"
                                  alt=""
                                  src="/public/vector-11.svg"
                                />

                                <div class="absolute top-[1.31rem] left-[0.13rem] w-[29.44rem] h-[6.5rem]">
                                  <div class="absolute top-[-0.01rem] left-[-0.01rem] w-full h-full z-[3] flex items-center justify-center">
                                    <img
                                      class="w-full h-full z-[3] object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(1.116)]"
                                      alt=""
                                      src="/public/vector-22.svg"
                                    />
                                  </div>
                                  <img
                                    class="absolute top-[0.31rem] left-[5.54rem] w-[20.59rem] h-[4.28rem] z-[4]"
                                    loading="eager"
                                    alt=""
                                    src="/public/elipes.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="w-[0.06rem] h-[4.99rem] relative box-border z-[5] mt-[-3.69rem] border-r-[1px] border-dashed border-coral-100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <svg
                    width="537"
                    height="245"
                    viewBox="0 0 537 245"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="536.03" height="245" rx="10" fill="white" />
                    <line
                      opacity="0.05"
                      x1="46.2227"
                      y1="234.848"
                      x2="518.212"
                      y2="234.848"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="46.2227"
                      y1="200.058"
                      x2="518.212"
                      y2="200.058"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="46.2227"
                      y1="165.267"
                      x2="518.212"
                      y2="165.267"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="46.2227"
                      y1="130.477"
                      x2="518.212"
                      y2="130.477"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="46.2227"
                      y1="95.6858"
                      x2="518.212"
                      y2="95.6858"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="46.2227"
                      y1="60.8953"
                      x2="518.212"
                      y2="60.8953"
                      stroke="#0C063A"
                    />
                    <path
                      d="M47.1104 200.31C58.0801 178.663 84.1689 138.235 100.767 149.706C121.514 164.044 134.391 193.985 155.138 182.599C175.885 171.213 195.917 126.934 222.745 143.38C249.573 159.827 257.182 165.312 281.409 168.682C325.5 174.816 365.471 110.487 389.437 126.934C413.403 143.38 465.271 221.396 517.139 200.31"
                      stroke="url(#paint0_linear_4371_2687)"
                      stroke-width="4"
                    />
                    <path
                      d="M45.2881 119.544L50.8864 124.832C56.5175 129.922 67.8779 140.794 79.0091 148.553C90.173 156.608 101.272 161.55 112.73 151.172C123.861 140.794 134.993 114.108 146.451 114.256C157.55 114.108 168.714 140.794 179.845 148.553C191.205 156.608 202.435 145.736 213.566 151.172C224.893 156.608 236.156 177.364 247.287 169.605C258.549 161.55 269.877 124.98 281.008 127.451C292.237 129.922 303.598 149.209 314.729 170.113C325.893 191.215 336.991 191.215 348.45 178.02C361.137 165.39 367.331 160.45 380.975 153.493C395.367 147.11 404.433 156.608 415.564 145.884C426.925 135.358 438.154 103.73 449.285 98.4424C460.613 93.3523 471.875 114.108 483.006 116.925C494.269 119.544 505.596 103.73 511.162 95.8232L516.727 87.9163V214.428H511.129C505.498 214.428 494.138 214.428 483.006 214.428C471.843 214.428 460.744 214.428 449.285 214.428C438.154 214.428 427.023 214.428 415.564 214.428C404.466 214.428 393.302 214.428 382.171 214.428C370.81 214.428 359.581 214.428 348.45 214.428C337.122 214.428 325.86 214.428 314.729 214.428C303.467 214.428 292.139 214.428 281.008 214.428C269.778 214.428 258.418 214.428 247.287 214.428C236.123 214.428 225.024 214.428 213.566 214.428C202.435 214.428 191.303 214.428 179.845 214.428C168.746 214.428 157.582 214.428 146.451 214.428C135.091 214.428 123.861 214.428 112.73 214.428C101.402 214.428 90.1403 214.428 79.0091 214.428C67.7469 214.428 56.4193 214.428 50.8537 214.428H45.2881V119.544Z"
                      fill="url(#paint1_linear_4371_2687)"
                    />
                    <g filter="url(#filter0_d_4371_2687)">
                      <path
                        d="M46.7725 141.881L52.3708 147.411C58.0019 152.735 69.3623 164.107 80.4935 172.222C91.6574 180.647 102.756 185.816 114.214 174.961C125.346 164.107 136.477 136.195 147.935 136.35C159.034 136.195 170.198 164.107 181.329 172.222C192.689 180.647 203.919 169.276 215.05 174.961C226.378 180.647 237.64 202.356 248.771 194.241C260.033 185.816 271.361 147.566 282.492 150.151C293.722 152.735 305.082 172.908 316.213 194.772C327.377 216.843 338.476 216.843 349.934 203.042C362.621 189.832 368.816 184.665 382.459 177.389C396.851 170.712 405.918 180.647 417.049 169.431C428.409 158.421 439.639 125.34 450.77 119.81C462.097 114.486 473.36 136.195 484.491 139.141C495.753 141.881 507.081 125.34 512.646 117.07L518.212 108.8"
                        stroke="url(#paint2_linear_4371_2687)"
                        stroke-width="4"
                        stroke-linecap="round"
                      />
                    </g>
                    <g filter="url(#filter1_d_4371_2687)">
                      <ellipse
                        cx="140.922"
                        cy="137.563"
                        rx="5.19697"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M144.619 137.563C144.619 140.18 142.789 141.966 140.922 141.966C139.054 141.966 137.225 140.18 137.225 137.563C137.225 134.945 139.054 133.159 140.922 133.159C142.789 133.159 144.619 134.945 144.619 137.563Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter2_d_4371_2687)">
                      <ellipse
                        cx="202.054"
                        cy="174.4"
                        rx="5.19697"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M205.751 174.4C205.751 177.018 203.922 178.804 202.054 178.804C200.187 178.804 198.357 177.018 198.357 174.4C198.357 171.782 200.187 169.996 202.054 169.996C203.922 169.996 205.751 171.782 205.751 174.4Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter3_d_4371_2687)">
                      <ellipse
                        cx="281.08"
                        cy="151.206"
                        rx="5.19697"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M284.777 151.206C284.777 153.824 282.948 155.61 281.08 155.61C279.212 155.61 277.383 153.824 277.383 151.206C277.383 148.588 279.212 146.802 281.08 146.802C282.948 146.802 284.777 148.588 284.777 151.206Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter4_d_4371_2687)">
                      <ellipse
                        cx="395.144"
                        cy="176.446"
                        rx="5.19697"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M398.841 176.446C398.841 179.064 397.012 180.85 395.144 180.85C393.276 180.85 391.447 179.064 391.447 176.446C391.447 173.829 393.276 172.042 395.144 172.042C397.012 172.042 398.841 173.829 398.841 176.446Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter5_d_4371_2687)">
                      <ellipse
                        cx="460.006"
                        cy="119.826"
                        rx="5.19697"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M463.703 119.826C463.703 122.444 461.873 124.23 460.006 124.23C458.138 124.23 456.309 122.444 456.309 119.826C456.309 117.209 458.138 115.422 460.006 115.422C461.873 115.422 463.703 117.209 463.703 119.826Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g clip-path="url(#clip0_4371_2687)">
                      <path
                        d="M24.6824 27.9287L22.2184 23.5767H21.1624V27.9287H18.9224V16.7607H23.1144C23.9784 16.7607 24.7144 16.9154 25.3224 17.2247C25.9304 17.5234 26.3837 17.934 26.6824 18.4567C26.9917 18.9687 27.1464 19.5447 27.1464 20.1847C27.1464 20.9207 26.933 21.5874 26.5064 22.1847C26.0797 22.7714 25.445 23.1767 24.6024 23.4007L27.2744 27.9287H24.6824ZM21.1624 21.8967H23.0344C23.6424 21.8967 24.0957 21.7527 24.3944 21.4647C24.693 21.166 24.8424 20.7554 24.8424 20.2327C24.8424 19.7207 24.693 19.326 24.3944 19.0487C24.0957 18.7607 23.6424 18.6167 23.0344 18.6167H21.1624V21.8967ZM37.4124 23.3047C37.4124 23.6247 37.391 23.9127 37.3484 24.1687H30.8684C30.9217 24.8087 31.1457 25.31 31.5404 25.6727C31.935 26.0354 32.4204 26.2167 32.9964 26.2167C33.8284 26.2167 34.4204 25.8594 34.7724 25.1447H37.1884C36.9324 25.998 36.4417 26.702 35.7164 27.2567C34.991 27.8007 34.1004 28.0727 33.0444 28.0727C32.191 28.0727 31.423 27.886 30.7404 27.5127C30.0684 27.1287 29.5404 26.59 29.1564 25.8967C28.783 25.2034 28.5964 24.4034 28.5964 23.4967C28.5964 22.5794 28.783 21.774 29.1564 21.0807C29.5297 20.3874 30.0524 19.854 30.7244 19.4807C31.3964 19.1074 32.1697 18.9207 33.0444 18.9207C33.887 18.9207 34.639 19.102 35.3004 19.4647C35.9724 19.8274 36.4897 20.3447 36.8524 21.0167C37.2257 21.678 37.4124 22.4407 37.4124 23.3047ZM35.0924 22.6647C35.0817 22.0887 34.8737 21.63 34.4684 21.2887C34.063 20.9367 33.567 20.7607 32.9804 20.7607C32.4257 20.7607 31.9564 20.9314 31.5724 21.2727C31.199 21.6034 30.9697 22.0674 30.8844 22.6647H35.0924ZM41.2874 20.3447C41.5754 19.9394 41.97 19.6034 42.4714 19.3367C42.9834 19.0594 43.5647 18.9207 44.2154 18.9207C44.9727 18.9207 45.6554 19.1074 46.2634 19.4807C46.882 19.854 47.3674 20.3874 47.7194 21.0807C48.082 21.7634 48.2634 22.558 48.2634 23.4647C48.2634 24.3714 48.082 25.1767 47.7194 25.8807C47.3674 26.574 46.882 27.1127 46.2634 27.4967C45.6554 27.8807 44.9727 28.0727 44.2154 28.0727C43.5647 28.0727 42.9887 27.9394 42.4874 27.6727C41.9967 27.406 41.5967 27.07 41.2874 26.6647V32.1527H39.0474V19.0647H41.2874V20.3447ZM45.9754 23.4647C45.9754 22.9314 45.8634 22.4727 45.6394 22.0887C45.426 21.694 45.138 21.3954 44.7754 21.1927C44.4234 20.99 44.0394 20.8887 43.6234 20.8887C43.218 20.8887 42.834 20.9954 42.4714 21.2087C42.1194 21.4114 41.8314 21.71 41.6074 22.1047C41.394 22.4994 41.2874 22.9634 41.2874 23.4967C41.2874 24.03 41.394 24.494 41.6074 24.8887C41.8314 25.2834 42.1194 25.5874 42.4714 25.8007C42.834 26.0034 43.218 26.1047 43.6234 26.1047C44.0394 26.1047 44.4234 25.998 44.7754 25.7847C45.138 25.5714 45.426 25.2674 45.6394 24.8727C45.8634 24.478 45.9754 24.0087 45.9754 23.4647ZM53.8271 28.0727C52.9738 28.0727 52.2058 27.886 51.5231 27.5127C50.8404 27.1287 50.3018 26.59 49.9071 25.8967C49.5231 25.2034 49.3311 24.4034 49.3311 23.4967C49.3311 22.59 49.5284 21.79 49.9231 21.0967C50.3284 20.4034 50.8778 19.87 51.5711 19.4967C52.2644 19.1127 53.0378 18.9207 53.8911 18.9207C54.7444 18.9207 55.5178 19.1127 56.2111 19.4967C56.9044 19.87 57.4484 20.4034 57.8431 21.0967C58.2484 21.79 58.4511 22.59 58.4511 23.4967C58.4511 24.4034 58.2431 25.2034 57.8271 25.8967C57.4218 26.59 56.8671 27.1287 56.1631 27.5127C55.4698 27.886 54.6911 28.0727 53.8271 28.0727ZM53.8271 26.1207C54.2324 26.1207 54.6111 26.0247 54.9631 25.8327C55.3258 25.63 55.6138 25.3314 55.8271 24.9367C56.0404 24.542 56.1471 24.062 56.1471 23.4967C56.1471 22.654 55.9231 22.0087 55.4751 21.5607C55.0378 21.102 54.4991 20.8727 53.8591 20.8727C53.2191 20.8727 52.6804 21.102 52.2431 21.5607C51.8164 22.0087 51.6031 22.654 51.6031 23.4967C51.6031 24.3394 51.8111 24.99 52.2271 25.4487C52.6538 25.8967 53.1871 26.1207 53.8271 26.1207ZM62.3342 20.4407C62.6222 19.9714 62.9956 19.6034 63.4542 19.3367C63.9236 19.07 64.4569 18.9367 65.0542 18.9367V21.2887H64.4622C63.7582 21.2887 63.2249 21.454 62.8622 21.7847C62.5102 22.1154 62.3342 22.6914 62.3342 23.5127V27.9287H60.0942V19.0647H62.3342V20.4407ZM69.171 20.9047V25.1927C69.171 25.4914 69.2403 25.71 69.379 25.8487C69.5283 25.9767 69.7737 26.0407 70.115 26.0407H71.155V27.9287H69.747C67.859 27.9287 66.915 27.0114 66.915 25.1767V20.9047H65.859V19.0647H66.915V16.8727H69.171V19.0647H71.155V20.9047H69.171ZM76.1581 28.0727C75.4328 28.0727 74.7821 27.9447 74.2061 27.6887C73.6301 27.422 73.1714 27.0647 72.8301 26.6167C72.4994 26.1687 72.3181 25.6727 72.2861 25.1287H74.5421C74.5848 25.47 74.7501 25.7527 75.0381 25.9767C75.3368 26.2007 75.7048 26.3127 76.1421 26.3127C76.5688 26.3127 76.8994 26.2274 77.1341 26.0567C77.3794 25.886 77.5021 25.6674 77.5021 25.4007C77.5021 25.1127 77.3528 24.8994 77.0541 24.7607C76.7661 24.6114 76.3021 24.4514 75.6621 24.2807C75.0008 24.1207 74.4568 23.9554 74.0301 23.7847C73.6141 23.614 73.2514 23.3527 72.9421 23.0007C72.6434 22.6487 72.4941 22.174 72.4941 21.5767C72.4941 21.086 72.6328 20.638 72.9101 20.2327C73.1981 19.8274 73.6034 19.5074 74.1261 19.2727C74.6594 19.038 75.2834 18.9207 75.9981 18.9207C77.0541 18.9207 77.8968 19.1874 78.5261 19.7207C79.1554 20.2434 79.5021 20.9527 79.5661 21.8487H77.4221C77.3901 21.4967 77.2408 21.2194 76.9741 21.0167C76.7181 20.8034 76.3714 20.6967 75.9341 20.6967C75.5288 20.6967 75.2141 20.7714 74.9901 20.9207C74.7768 21.07 74.6701 21.278 74.6701 21.5447C74.6701 21.8434 74.8194 22.0727 75.1181 22.2327C75.4168 22.382 75.8808 22.5367 76.5101 22.6967C77.1501 22.8567 77.6781 23.022 78.0941 23.1927C78.5101 23.3634 78.8674 23.63 79.1661 23.9927C79.4754 24.3447 79.6354 24.814 79.6461 25.4007C79.6461 25.9127 79.5021 26.3714 79.2141 26.7767C78.9368 27.182 78.5314 27.502 77.9981 27.7367C77.4754 27.9607 76.8621 28.0727 76.1581 28.0727Z"
                        fill="#5D5B73"
                      />
                      <g opacity="0.3">
                        <path
                          d="M517.697 20.6925C517.011 20.0098 515.898 20.0098 515.212 20.6925C514.526 21.3752 514.526 22.482 515.212 23.1647C515.898 23.8474 517.011 23.8474 517.697 23.1647C518.383 22.4821 518.383 21.3752 517.697 20.6925Z"
                          fill="#0C063A"
                        />
                        <path
                          d="M512.426 20.6925C511.739 20.0098 510.627 20.0098 509.941 20.6925C509.254 21.3752 509.254 22.482 509.941 23.1647C510.627 23.8474 511.739 23.8474 512.426 23.1647C513.112 22.4821 513.112 21.3752 512.426 20.6925Z"
                          fill="#0C063A"
                        />
                        <path
                          d="M507.153 20.6925C506.467 20.0098 505.354 20.0098 504.668 20.6925C503.982 21.3752 503.982 22.482 504.668 23.1647C505.354 23.8474 506.467 23.8474 507.153 23.1647C507.84 22.4821 507.84 21.3752 507.153 20.6925Z"
                          fill="#0C063A"
                        />
                      </g>
                    </g>
                    <line
                      x1="280.602"
                      y1="234.667"
                      x2="280.602"
                      y2="154.853"
                      stroke="#FF8548"
                      stroke-dasharray="2 7"
                    />
                    <defs>
                      <filter
                        id="filter0_d_4371_2687"
                        x="40.7725"
                        y="106.8"
                        width="483.439"
                        height="115.742"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2687"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2687"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_4371_2687"
                        x="131.725"
                        y="131.659"
                        width="18.3936"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2687"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2687"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_4371_2687"
                        x="192.857"
                        y="168.496"
                        width="18.3936"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2687"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2687"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_4371_2687"
                        x="271.883"
                        y="145.302"
                        width="18.3936"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2687"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2687"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter4_d_4371_2687"
                        x="385.947"
                        y="170.542"
                        width="18.3936"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2687"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2687"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter5_d_4371_2687"
                        x="450.809"
                        y="113.922"
                        width="18.3936"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2687"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2687"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_4371_2687"
                        x1="46.7526"
                        y1="199.045"
                        x2="516.787"
                        y2="196.314"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD9B3D" />
                        <stop offset="1" stop-color="#4CD7F6" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4371_2687"
                        x1="40.3456"
                        y1="94.0378"
                        x2="516.727"
                        y2="92.7627"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5EC3FF" stop-opacity="0.04" />
                        <stop
                          offset="1"
                          stop-color="#FD5DEF"
                          stop-opacity="0.04"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_4371_2687"
                        x1="39.929"
                        y1="108.8"
                        x2="525.055"
                        y2="108.8"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF8548" />
                        <stop offset="1" stop-color="#FF5BEF" />
                      </linearGradient>
                      <clipPath id="clip0_4371_2687">
                        <rect
                          width="500.394"
                          height="23.6155"
                          fill="white"
                          transform="translate(17.8184 10.1208)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="566"
                    height="245"
                    viewBox="0 0 566 245"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="565.03" height="245" rx="10" fill="white" />
                    <line
                      opacity="0.05"
                      x1="48.7432"
                      y1="234.848"
                      x2="546.268"
                      y2="234.848"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="48.7432"
                      y1="200.058"
                      x2="546.268"
                      y2="200.058"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="48.7432"
                      y1="165.267"
                      x2="546.268"
                      y2="165.267"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="48.7432"
                      y1="130.477"
                      x2="546.268"
                      y2="130.477"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="48.7432"
                      y1="95.6858"
                      x2="546.268"
                      y2="95.6858"
                      stroke="#0C063A"
                    />
                    <line
                      opacity="0.05"
                      x1="48.7432"
                      y1="60.8953"
                      x2="546.268"
                      y2="60.8953"
                      stroke="#0C063A"
                    />
                    <path
                      d="M49.6875 200.31C61.2507 178.663 88.7509 138.235 106.247 149.706C128.116 164.044 141.69 193.985 163.56 182.599C185.429 171.213 206.545 126.934 234.824 143.38C263.104 159.827 271.125 165.312 296.662 168.682C343.138 174.816 385.271 110.487 410.534 126.934C435.797 143.38 490.471 221.396 545.145 200.31"
                      stroke="url(#paint0_linear_4371_2720)"
                      stroke-width="4"
                    />
                    <path
                      d="M47.751 119.544L53.6522 124.832C59.5879 129.922 71.5629 140.794 83.2964 148.553C95.0643 156.608 106.763 161.55 118.842 151.172C130.575 140.794 142.309 114.108 154.387 114.256C166.086 114.108 177.854 140.794 189.587 148.553C201.562 156.608 213.399 145.736 225.133 151.172C237.073 156.608 248.945 177.364 260.678 169.605C272.55 161.55 284.49 124.98 296.224 127.451C308.06 129.922 320.035 149.209 331.769 170.113C343.537 191.215 355.236 191.215 367.314 178.02C380.688 165.39 387.217 160.45 401.599 153.493C416.77 147.11 426.327 156.608 438.06 145.884C450.035 135.358 461.872 103.73 473.605 98.4424C485.546 93.3523 497.417 114.108 509.151 116.925C521.022 119.544 532.963 103.73 538.829 95.8232L544.696 87.9163V214.428H538.795C532.859 214.428 520.884 214.428 509.151 214.428C497.383 214.428 485.684 214.428 473.605 214.428C461.872 214.428 450.138 214.428 438.06 214.428C426.361 214.428 414.593 214.428 402.86 214.428C390.885 214.428 379.048 214.428 367.314 214.428C355.374 214.428 343.502 214.428 331.769 214.428C319.897 214.428 307.957 214.428 296.224 214.428C284.387 214.428 272.412 214.428 260.678 214.428C248.91 214.428 237.211 214.428 225.133 214.428C213.399 214.428 201.666 214.428 189.587 214.428C177.888 214.428 166.121 214.428 154.387 214.428C142.412 214.428 130.575 214.428 118.842 214.428C106.901 214.428 95.0298 214.428 83.2964 214.428C71.4249 214.428 59.4844 214.428 53.6177 214.428H47.751V119.544Z"
                      fill="url(#paint1_linear_4371_2720)"
                    />
                    <g filter="url(#filter0_d_4371_2720)">
                      <path
                        d="M49.293 141.881L55.1942 147.411C61.1299 152.735 73.1049 164.107 84.8383 172.222C96.6063 180.647 108.305 185.816 120.384 174.961C132.117 164.107 143.851 136.195 155.929 136.35C167.628 136.195 179.396 164.107 191.129 172.222C203.104 180.647 214.941 169.276 226.675 174.961C238.615 180.647 250.487 202.356 262.22 194.241C274.092 185.816 286.032 147.566 297.766 150.151C309.602 152.735 321.577 172.908 333.311 194.772C345.079 216.843 356.778 216.843 368.856 203.042C382.23 189.832 388.759 184.665 403.141 177.389C418.312 170.712 427.868 180.647 439.602 169.431C451.577 158.421 463.414 125.34 475.147 119.81C487.088 114.486 498.959 136.195 510.693 139.141C522.564 141.881 534.505 125.34 540.371 117.07L546.238 108.8"
                        stroke="url(#paint2_linear_4371_2720)"
                        stroke-width="4"
                        stroke-linecap="round"
                      />
                    </g>
                    <g filter="url(#filter1_d_4371_2720)">
                      <ellipse
                        cx="148.565"
                        cy="137.563"
                        rx="5.47812"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M152.543 137.563C152.543 140.102 150.658 141.966 148.565 141.966C146.472 141.966 144.587 140.102 144.587 137.563C144.587 135.023 146.472 133.159 148.565 133.159C150.658 133.159 152.543 135.023 152.543 137.563Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter2_d_4371_2720)">
                      <ellipse
                        cx="213.011"
                        cy="174.4"
                        rx="5.47812"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M216.989 174.4C216.989 176.94 215.105 178.804 213.011 178.804C210.918 178.804 209.033 176.94 209.033 174.4C209.033 171.86 210.918 169.996 213.011 169.996C215.105 169.996 216.989 171.86 216.989 174.4Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter3_d_4371_2720)">
                      <ellipse
                        cx="296.313"
                        cy="151.206"
                        rx="5.47812"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M300.291 151.206C300.291 153.746 298.406 155.61 296.313 155.61C294.22 155.61 292.335 153.746 292.335 151.206C292.335 148.666 294.22 146.802 296.313 146.802C298.406 146.802 300.291 148.666 300.291 151.206Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter4_d_4371_2720)">
                      <ellipse
                        cx="416.551"
                        cy="176.446"
                        rx="5.47812"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M420.529 176.446C420.529 178.986 418.645 180.85 416.551 180.85C414.458 180.85 412.573 178.986 412.573 176.446C412.573 173.906 414.458 172.042 416.551 172.042C418.645 172.042 420.529 173.906 420.529 176.446Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g filter="url(#filter5_d_4371_2720)">
                      <ellipse
                        cx="484.924"
                        cy="119.826"
                        rx="5.47812"
                        ry="5.90387"
                        fill="white"
                      />
                      <path
                        d="M488.903 119.826C488.903 122.366 487.018 124.23 484.924 124.23C482.831 124.23 480.946 122.366 480.946 119.826C480.946 117.286 482.831 115.422 484.924 115.422C487.018 115.422 488.903 117.286 488.903 119.826Z"
                        stroke="#AE8FF7"
                        stroke-width="3"
                      />
                    </g>
                    <g clip-path="url(#clip0_4371_2720)">
                      <path
                        d="M25.6453 27.9287L23.1813 23.5767H22.1253V27.9287H19.8853V16.7607H24.0773C24.9413 16.7607 25.6773 16.9154 26.2853 17.2247C26.8933 17.5234 27.3466 17.934 27.6453 18.4567C27.9546 18.9687 28.1093 19.5447 28.1093 20.1847C28.1093 20.9207 27.8959 21.5874 27.4693 22.1847C27.0426 22.7714 26.4079 23.1767 25.5653 23.4007L28.2373 27.9287H25.6453ZM22.1253 21.8967H23.9973C24.6053 21.8967 25.0586 21.7527 25.3573 21.4647C25.6559 21.166 25.8053 20.7554 25.8053 20.2327C25.8053 19.7207 25.6559 19.326 25.3573 19.0487C25.0586 18.7607 24.6053 18.6167 23.9973 18.6167H22.1253V21.8967ZM38.3753 23.3047C38.3753 23.6247 38.3539 23.9127 38.3113 24.1687H31.8313C31.8846 24.8087 32.1086 25.31 32.5033 25.6727C32.8979 26.0354 33.3833 26.2167 33.9593 26.2167C34.7913 26.2167 35.3833 25.8594 35.7353 25.1447H38.1513C37.8953 25.998 37.4046 26.702 36.6793 27.2567C35.9539 27.8007 35.0633 28.0727 34.0073 28.0727C33.1539 28.0727 32.3859 27.886 31.7033 27.5127C31.0313 27.1287 30.5033 26.59 30.1193 25.8967C29.7459 25.2034 29.5592 24.4034 29.5592 23.4967C29.5592 22.5794 29.7459 21.774 30.1193 21.0807C30.4926 20.3874 31.0153 19.854 31.6873 19.4807C32.3593 19.1074 33.1326 18.9207 34.0073 18.9207C34.8499 18.9207 35.6019 19.102 36.2633 19.4647C36.9353 19.8274 37.4526 20.3447 37.8153 21.0167C38.1886 21.678 38.3753 22.4407 38.3753 23.3047ZM36.0553 22.6647C36.0446 22.0887 35.8366 21.63 35.4313 21.2887C35.0259 20.9367 34.5299 20.7607 33.9433 20.7607C33.3886 20.7607 32.9193 20.9314 32.5353 21.2727C32.1619 21.6034 31.9326 22.0674 31.8473 22.6647H36.0553ZM42.2503 20.3447C42.5383 19.9394 42.9329 19.6034 43.4343 19.3367C43.9463 19.0594 44.5276 18.9207 45.1783 18.9207C45.9356 18.9207 46.6183 19.1074 47.2263 19.4807C47.8449 19.854 48.3303 20.3874 48.6823 21.0807C49.0449 21.7634 49.2263 22.558 49.2263 23.4647C49.2263 24.3714 49.0449 25.1767 48.6823 25.8807C48.3303 26.574 47.8449 27.1127 47.2263 27.4967C46.6183 27.8807 45.9356 28.0727 45.1783 28.0727C44.5276 28.0727 43.9516 27.9394 43.4503 27.6727C42.9596 27.406 42.5596 27.07 42.2503 26.6647V32.1527H40.0103V19.0647H42.2503V20.3447ZM46.9383 23.4647C46.9383 22.9314 46.8263 22.4727 46.6023 22.0887C46.3889 21.694 46.1009 21.3954 45.7383 21.1927C45.3863 20.99 45.0023 20.8887 44.5863 20.8887C44.1809 20.8887 43.7969 20.9954 43.4343 21.2087C43.0823 21.4114 42.7943 21.71 42.5703 22.1047C42.3569 22.4994 42.2503 22.9634 42.2503 23.4967C42.2503 24.03 42.3569 24.494 42.5703 24.8887C42.7943 25.2834 43.0823 25.5874 43.4343 25.8007C43.7969 26.0034 44.1809 26.1047 44.5863 26.1047C45.0023 26.1047 45.3863 25.998 45.7383 25.7847C46.1009 25.5714 46.3889 25.2674 46.6023 24.8727C46.8263 24.478 46.9383 24.0087 46.9383 23.4647ZM54.79 28.0727C53.9367 28.0727 53.1687 27.886 52.486 27.5127C51.8033 27.1287 51.2647 26.59 50.87 25.8967C50.486 25.2034 50.294 24.4034 50.294 23.4967C50.294 22.59 50.4913 21.79 50.886 21.0967C51.2913 20.4034 51.8407 19.87 52.534 19.4967C53.2273 19.1127 54.0007 18.9207 54.854 18.9207C55.7073 18.9207 56.4807 19.1127 57.174 19.4967C57.8673 19.87 58.4113 20.4034 58.806 21.0967C59.2113 21.79 59.414 22.59 59.414 23.4967C59.414 24.4034 59.206 25.2034 58.79 25.8967C58.3847 26.59 57.83 27.1287 57.126 27.5127C56.4327 27.886 55.654 28.0727 54.79 28.0727ZM54.79 26.1207C55.1953 26.1207 55.574 26.0247 55.926 25.8327C56.2887 25.63 56.5767 25.3314 56.79 24.9367C57.0033 24.542 57.11 24.062 57.11 23.4967C57.11 22.654 56.886 22.0087 56.438 21.5607C56.0007 21.102 55.462 20.8727 54.822 20.8727C54.182 20.8727 53.6433 21.102 53.206 21.5607C52.7793 22.0087 52.566 22.654 52.566 23.4967C52.566 24.3394 52.774 24.99 53.19 25.4487C53.6167 25.8967 54.15 26.1207 54.79 26.1207ZM63.2971 20.4407C63.5851 19.9714 63.9585 19.6034 64.4171 19.3367C64.8865 19.07 65.4198 18.9367 66.0171 18.9367V21.2887H65.4251C64.7211 21.2887 64.1878 21.454 63.8251 21.7847C63.4731 22.1154 63.2971 22.6914 63.2971 23.5127V27.9287H61.0571V19.0647H63.2971V20.4407ZM70.1339 20.9047V25.1927C70.1339 25.4914 70.2032 25.71 70.3419 25.8487C70.4912 25.9767 70.7365 26.0407 71.0779 26.0407H72.1179V27.9287H70.7099C68.8219 27.9287 67.8779 27.0114 67.8779 25.1767V20.9047H66.8219V19.0647H67.8779V16.8727H70.1339V19.0647H72.1179V20.9047H70.1339ZM77.121 28.0727C76.3957 28.0727 75.745 27.9447 75.169 27.6887C74.593 27.422 74.1343 27.0647 73.793 26.6167C73.4623 26.1687 73.281 25.6727 73.249 25.1287H75.505C75.5477 25.47 75.713 25.7527 76.001 25.9767C76.2997 26.2007 76.6677 26.3127 77.105 26.3127C77.5317 26.3127 77.8623 26.2274 78.097 26.0567C78.3423 25.886 78.465 25.6674 78.465 25.4007C78.465 25.1127 78.3157 24.8994 78.017 24.7607C77.729 24.6114 77.265 24.4514 76.625 24.2807C75.9637 24.1207 75.4197 23.9554 74.993 23.7847C74.577 23.614 74.2143 23.3527 73.905 23.0007C73.6063 22.6487 73.457 22.174 73.457 21.5767C73.457 21.086 73.5957 20.638 73.873 20.2327C74.161 19.8274 74.5663 19.5074 75.089 19.2727C75.6223 19.038 76.2463 18.9207 76.961 18.9207C78.017 18.9207 78.8597 19.1874 79.489 19.7207C80.1183 20.2434 80.465 20.9527 80.529 21.8487H78.385C78.353 21.4967 78.2037 21.2194 77.937 21.0167C77.681 20.8034 77.3343 20.6967 76.897 20.6967C76.4917 20.6967 76.177 20.7714 75.953 20.9207C75.7397 21.07 75.633 21.278 75.633 21.5447C75.633 21.8434 75.7823 22.0727 76.081 22.2327C76.3797 22.382 76.8437 22.5367 77.473 22.6967C78.113 22.8567 78.641 23.022 79.057 23.1927C79.473 23.3634 79.8303 23.63 80.129 23.9927C80.4383 24.3447 80.5983 24.814 80.609 25.4007C80.609 25.9127 80.465 26.3714 80.177 26.7767C79.8997 27.182 79.4943 27.502 78.961 27.7367C78.4383 27.9607 77.825 28.0727 77.121 28.0727Z"
                        fill="#5D5B73"
                      />
                      <g opacity="0.3">
                        <path
                          d="M545.732 20.6925C545.046 20.0098 543.933 20.0098 543.247 20.6925C542.561 21.3752 542.561 22.482 543.247 23.1647C543.933 23.8474 545.046 23.8474 545.732 23.1647C546.419 22.4821 546.419 21.3752 545.732 20.6925Z"
                          fill="#0C063A"
                        />
                        <path
                          d="M540.461 20.6925C539.775 20.0098 538.662 20.0098 537.976 20.6925C537.289 21.3752 537.289 22.482 537.976 23.1647C538.662 23.8474 539.775 23.8474 540.461 23.1647C541.147 22.4821 541.147 21.3752 540.461 20.6925Z"
                          fill="#0C063A"
                        />
                        <path
                          d="M535.188 20.6925C534.502 20.0098 533.389 20.0098 532.703 20.6925C532.017 21.3752 532.017 22.482 532.703 23.1647C533.389 23.8474 534.502 23.8474 535.188 23.1647C535.875 22.4821 535.875 21.3752 535.188 20.6925Z"
                          fill="#0C063A"
                        />
                      </g>
                    </g>
                    <line
                      x1="295.81"
                      y1="234.667"
                      x2="295.81"
                      y2="154.853"
                      stroke="#FF8548"
                      stroke-dasharray="2 7"
                    />
                    <path
                      d="M25.7288 230.572C25.7288 229.196 25.9528 228.124 26.4008 227.356C26.8488 226.58 27.6328 226.192 28.7528 226.192C29.8648 226.192 30.6448 226.58 31.0928 227.356C31.5408 228.124 31.7648 229.196 31.7648 230.572C31.7648 231.972 31.5408 233.06 31.0928 233.836C30.6448 234.612 29.8648 235 28.7528 235C27.6328 235 26.8488 234.612 26.4008 233.836C25.9528 233.06 25.7288 231.972 25.7288 230.572ZM30.6848 230.572C30.6848 229.876 30.6368 229.288 30.5408 228.808C30.4528 228.32 30.2648 227.928 29.9768 227.632C29.6968 227.336 29.2888 227.188 28.7528 227.188C28.2088 227.188 27.7928 227.336 27.5048 227.632C27.2248 227.928 27.0368 228.32 26.9408 228.808C26.8528 229.288 26.8088 229.876 26.8088 230.572C26.8088 231.292 26.8528 231.896 26.9408 232.384C27.0368 232.872 27.2248 233.264 27.5048 233.56C27.7928 233.856 28.2088 234.004 28.7528 234.004C29.2888 234.004 29.6968 233.856 29.9768 233.56C30.2648 233.264 30.4528 232.872 30.5408 232.384C30.6368 231.896 30.6848 231.292 30.6848 230.572ZM33.2639 230.572C33.2639 229.196 33.4879 228.124 33.9359 227.356C34.3839 226.58 35.1679 226.192 36.2879 226.192C37.3999 226.192 38.1799 226.58 38.6279 227.356C39.0759 228.124 39.2999 229.196 39.2999 230.572C39.2999 231.972 39.0759 233.06 38.6279 233.836C38.1799 234.612 37.3999 235 36.2879 235C35.1679 235 34.3839 234.612 33.9359 233.836C33.4879 233.06 33.2639 231.972 33.2639 230.572ZM38.2199 230.572C38.2199 229.876 38.1719 229.288 38.0759 228.808C37.9879 228.32 37.7999 227.928 37.5119 227.632C37.2319 227.336 36.8239 227.188 36.2879 227.188C35.7439 227.188 35.3279 227.336 35.0399 227.632C34.7599 227.928 34.5719 228.32 34.4759 228.808C34.3879 229.288 34.3439 229.876 34.3439 230.572C34.3439 231.292 34.3879 231.896 34.4759 232.384C34.5719 232.872 34.7599 233.264 35.0399 233.56C35.3279 233.856 35.7439 234.004 36.2879 234.004C36.8239 234.004 37.2319 233.856 37.5119 233.56C37.7999 233.264 37.9879 232.872 38.0759 232.384C38.1719 231.896 38.2199 231.292 38.2199 230.572Z"
                      fill="#161A41"
                    />
                    <path
                      d="M25.7288 230.572C25.7288 229.196 25.9528 228.124 26.4008 227.356C26.8488 226.58 27.6328 226.192 28.7528 226.192C29.8648 226.192 30.6448 226.58 31.0928 227.356C31.5408 228.124 31.7648 229.196 31.7648 230.572C31.7648 231.972 31.5408 233.06 31.0928 233.836C30.6448 234.612 29.8648 235 28.7528 235C27.6328 235 26.8488 234.612 26.4008 233.836C25.9528 233.06 25.7288 231.972 25.7288 230.572ZM30.6848 230.572C30.6848 229.876 30.6368 229.288 30.5408 228.808C30.4528 228.32 30.2648 227.928 29.9768 227.632C29.6968 227.336 29.2888 227.188 28.7528 227.188C28.2088 227.188 27.7928 227.336 27.5048 227.632C27.2248 227.928 27.0368 228.32 26.9408 228.808C26.8528 229.288 26.8088 229.876 26.8088 230.572C26.8088 231.292 26.8528 231.896 26.9408 232.384C27.0368 232.872 27.2248 233.264 27.5048 233.56C27.7928 233.856 28.2088 234.004 28.7528 234.004C29.2888 234.004 29.6968 233.856 29.9768 233.56C30.2648 233.264 30.4528 232.872 30.5408 232.384C30.6368 231.896 30.6848 231.292 30.6848 230.572ZM33.2639 230.572C33.2639 229.196 33.4879 228.124 33.9359 227.356C34.3839 226.58 35.1679 226.192 36.2879 226.192C37.3999 226.192 38.1799 226.58 38.6279 227.356C39.0759 228.124 39.2999 229.196 39.2999 230.572C39.2999 231.972 39.0759 233.06 38.6279 233.836C38.1799 234.612 37.3999 235 36.2879 235C35.1679 235 34.3839 234.612 33.9359 233.836C33.4879 233.06 33.2639 231.972 33.2639 230.572ZM38.2199 230.572C38.2199 229.876 38.1719 229.288 38.0759 228.808C37.9879 228.32 37.7999 227.928 37.5119 227.632C37.2319 227.336 36.8239 227.188 36.2879 227.188C35.7439 227.188 35.3279 227.336 35.0399 227.632C34.7599 227.928 34.5719 228.32 34.4759 228.808C34.3879 229.288 34.3439 229.876 34.3439 230.572C34.3439 231.292 34.3879 231.896 34.4759 232.384C34.5719 232.872 34.7599 233.264 35.0399 233.56C35.3279 233.856 35.7439 234.004 36.2879 234.004C36.8239 234.004 37.2319 233.856 37.5119 233.56C37.7999 233.264 37.9879 232.872 38.0759 232.384C38.1719 231.896 38.2199 231.292 38.2199 230.572Z"
                      fill="#161A41"
                    />
                    <path
                      d="M25.7288 230.572C25.7288 229.196 25.9528 228.124 26.4008 227.356C26.8488 226.58 27.6328 226.192 28.7528 226.192C29.8648 226.192 30.6448 226.58 31.0928 227.356C31.5408 228.124 31.7648 229.196 31.7648 230.572C31.7648 231.972 31.5408 233.06 31.0928 233.836C30.6448 234.612 29.8648 235 28.7528 235C27.6328 235 26.8488 234.612 26.4008 233.836C25.9528 233.06 25.7288 231.972 25.7288 230.572ZM30.6848 230.572C30.6848 229.876 30.6368 229.288 30.5408 228.808C30.4528 228.32 30.2648 227.928 29.9768 227.632C29.6968 227.336 29.2888 227.188 28.7528 227.188C28.2088 227.188 27.7928 227.336 27.5048 227.632C27.2248 227.928 27.0368 228.32 26.9408 228.808C26.8528 229.288 26.8088 229.876 26.8088 230.572C26.8088 231.292 26.8528 231.896 26.9408 232.384C27.0368 232.872 27.2248 233.264 27.5048 233.56C27.7928 233.856 28.2088 234.004 28.7528 234.004C29.2888 234.004 29.6968 233.856 29.9768 233.56C30.2648 233.264 30.4528 232.872 30.5408 232.384C30.6368 231.896 30.6848 231.292 30.6848 230.572ZM33.2639 230.572C33.2639 229.196 33.4879 228.124 33.9359 227.356C34.3839 226.58 35.1679 226.192 36.2879 226.192C37.3999 226.192 38.1799 226.58 38.6279 227.356C39.0759 228.124 39.2999 229.196 39.2999 230.572C39.2999 231.972 39.0759 233.06 38.6279 233.836C38.1799 234.612 37.3999 235 36.2879 235C35.1679 235 34.3839 234.612 33.9359 233.836C33.4879 233.06 33.2639 231.972 33.2639 230.572ZM38.2199 230.572C38.2199 229.876 38.1719 229.288 38.0759 228.808C37.9879 228.32 37.7999 227.928 37.5119 227.632C37.2319 227.336 36.8239 227.188 36.2879 227.188C35.7439 227.188 35.3279 227.336 35.0399 227.632C34.7599 227.928 34.5719 228.32 34.4759 228.808C34.3879 229.288 34.3439 229.876 34.3439 230.572C34.3439 231.292 34.3879 231.896 34.4759 232.384C34.5719 232.872 34.7599 233.264 35.0399 233.56C35.3279 233.856 35.7439 234.004 36.2879 234.004C36.8239 234.004 37.2319 233.856 37.5119 233.56C37.7999 233.264 37.9879 232.872 38.0759 232.384C38.1719 231.896 38.2199 231.292 38.2199 230.572Z"
                      fill="#161A41"
                    />
                    <path
                      d="M25.7288 195.572C25.7288 194.196 25.9528 193.124 26.4008 192.356C26.8488 191.58 27.6328 191.192 28.7528 191.192C29.8648 191.192 30.6448 191.58 31.0928 192.356C31.5408 193.124 31.7648 194.196 31.7648 195.572C31.7648 196.972 31.5408 198.06 31.0928 198.836C30.6448 199.612 29.8648 200 28.7528 200C27.6328 200 26.8488 199.612 26.4008 198.836C25.9528 198.06 25.7288 196.972 25.7288 195.572ZM30.6848 195.572C30.6848 194.876 30.6368 194.288 30.5408 193.808C30.4528 193.32 30.2648 192.928 29.9768 192.632C29.6968 192.336 29.2888 192.188 28.7528 192.188C28.2088 192.188 27.7928 192.336 27.5048 192.632C27.2248 192.928 27.0368 193.32 26.9408 193.808C26.8528 194.288 26.8088 194.876 26.8088 195.572C26.8088 196.292 26.8528 196.896 26.9408 197.384C27.0368 197.872 27.2248 198.264 27.5048 198.56C27.7928 198.856 28.2088 199.004 28.7528 199.004C29.2888 199.004 29.6968 198.856 29.9768 198.56C30.2648 198.264 30.4528 197.872 30.5408 197.384C30.6368 196.896 30.6848 196.292 30.6848 195.572ZM33.2639 195.572C33.2639 194.196 33.4879 193.124 33.9359 192.356C34.3839 191.58 35.1679 191.192 36.2879 191.192C37.3999 191.192 38.1799 191.58 38.6279 192.356C39.0759 193.124 39.2999 194.196 39.2999 195.572C39.2999 196.972 39.0759 198.06 38.6279 198.836C38.1799 199.612 37.3999 200 36.2879 200C35.1679 200 34.3839 199.612 33.9359 198.836C33.4879 198.06 33.2639 196.972 33.2639 195.572ZM38.2199 195.572C38.2199 194.876 38.1719 194.288 38.0759 193.808C37.9879 193.32 37.7999 192.928 37.5119 192.632C37.2319 192.336 36.8239 192.188 36.2879 192.188C35.7439 192.188 35.3279 192.336 35.0399 192.632C34.7599 192.928 34.5719 193.32 34.4759 193.808C34.3879 194.288 34.3439 194.876 34.3439 195.572C34.3439 196.292 34.3879 196.896 34.4759 197.384C34.5719 197.872 34.7599 198.264 35.0399 198.56C35.3279 198.856 35.7439 199.004 36.2879 199.004C36.8239 199.004 37.2319 198.856 37.5119 198.56C37.7999 198.264 37.9879 197.872 38.0759 197.384C38.1719 196.896 38.2199 196.292 38.2199 195.572Z"
                      fill="#161A41"
                    />
                    <path
                      d="M25.7288 160.572C25.7288 159.196 25.9528 158.124 26.4008 157.356C26.8488 156.58 27.6328 156.192 28.7528 156.192C29.8648 156.192 30.6448 156.58 31.0928 157.356C31.5408 158.124 31.7648 159.196 31.7648 160.572C31.7648 161.972 31.5408 163.06 31.0928 163.836C30.6448 164.612 29.8648 165 28.7528 165C27.6328 165 26.8488 164.612 26.4008 163.836C25.9528 163.06 25.7288 161.972 25.7288 160.572ZM30.6848 160.572C30.6848 159.876 30.6368 159.288 30.5408 158.808C30.4528 158.32 30.2648 157.928 29.9768 157.632C29.6968 157.336 29.2888 157.188 28.7528 157.188C28.2088 157.188 27.7928 157.336 27.5048 157.632C27.2248 157.928 27.0368 158.32 26.9408 158.808C26.8528 159.288 26.8088 159.876 26.8088 160.572C26.8088 161.292 26.8528 161.896 26.9408 162.384C27.0368 162.872 27.2248 163.264 27.5048 163.56C27.7928 163.856 28.2088 164.004 28.7528 164.004C29.2888 164.004 29.6968 163.856 29.9768 163.56C30.2648 163.264 30.4528 162.872 30.5408 162.384C30.6368 161.896 30.6848 161.292 30.6848 160.572ZM33.2639 160.572C33.2639 159.196 33.4879 158.124 33.9359 157.356C34.3839 156.58 35.1679 156.192 36.2879 156.192C37.3999 156.192 38.1799 156.58 38.6279 157.356C39.0759 158.124 39.2999 159.196 39.2999 160.572C39.2999 161.972 39.0759 163.06 38.6279 163.836C38.1799 164.612 37.3999 165 36.2879 165C35.1679 165 34.3839 164.612 33.9359 163.836C33.4879 163.06 33.2639 161.972 33.2639 160.572ZM38.2199 160.572C38.2199 159.876 38.1719 159.288 38.0759 158.808C37.9879 158.32 37.7999 157.928 37.5119 157.632C37.2319 157.336 36.8239 157.188 36.2879 157.188C35.7439 157.188 35.3279 157.336 35.0399 157.632C34.7599 157.928 34.5719 158.32 34.4759 158.808C34.3879 159.288 34.3439 159.876 34.3439 160.572C34.3439 161.292 34.3879 161.896 34.4759 162.384C34.5719 162.872 34.7599 163.264 35.0399 163.56C35.3279 163.856 35.7439 164.004 36.2879 164.004C36.8239 164.004 37.2319 163.856 37.5119 163.56C37.7999 163.264 37.9879 162.872 38.0759 162.384C38.1719 161.896 38.2199 161.292 38.2199 160.572Z"
                      fill="#161A41"
                    />
                    <path
                      d="M25.7288 126.572C25.7288 125.196 25.9528 124.124 26.4008 123.356C26.8488 122.58 27.6328 122.192 28.7528 122.192C29.8648 122.192 30.6448 122.58 31.0928 123.356C31.5408 124.124 31.7648 125.196 31.7648 126.572C31.7648 127.972 31.5408 129.06 31.0928 129.836C30.6448 130.612 29.8648 131 28.7528 131C27.6328 131 26.8488 130.612 26.4008 129.836C25.9528 129.06 25.7288 127.972 25.7288 126.572ZM30.6848 126.572C30.6848 125.876 30.6368 125.288 30.5408 124.808C30.4528 124.32 30.2648 123.928 29.9768 123.632C29.6968 123.336 29.2888 123.188 28.7528 123.188C28.2088 123.188 27.7928 123.336 27.5048 123.632C27.2248 123.928 27.0368 124.32 26.9408 124.808C26.8528 125.288 26.8088 125.876 26.8088 126.572C26.8088 127.292 26.8528 127.896 26.9408 128.384C27.0368 128.872 27.2248 129.264 27.5048 129.56C27.7928 129.856 28.2088 130.004 28.7528 130.004C29.2888 130.004 29.6968 129.856 29.9768 129.56C30.2648 129.264 30.4528 128.872 30.5408 128.384C30.6368 127.896 30.6848 127.292 30.6848 126.572ZM33.2639 126.572C33.2639 125.196 33.4879 124.124 33.9359 123.356C34.3839 122.58 35.1679 122.192 36.2879 122.192C37.3999 122.192 38.1799 122.58 38.6279 123.356C39.0759 124.124 39.2999 125.196 39.2999 126.572C39.2999 127.972 39.0759 129.06 38.6279 129.836C38.1799 130.612 37.3999 131 36.2879 131C35.1679 131 34.3839 130.612 33.9359 129.836C33.4879 129.06 33.2639 127.972 33.2639 126.572ZM38.2199 126.572C38.2199 125.876 38.1719 125.288 38.0759 124.808C37.9879 124.32 37.7999 123.928 37.5119 123.632C37.2319 123.336 36.8239 123.188 36.2879 123.188C35.7439 123.188 35.3279 123.336 35.0399 123.632C34.7599 123.928 34.5719 124.32 34.4759 124.808C34.3879 125.288 34.3439 125.876 34.3439 126.572C34.3439 127.292 34.3879 127.896 34.4759 128.384C34.5719 128.872 34.7599 129.264 35.0399 129.56C35.3279 129.856 35.7439 130.004 36.2879 130.004C36.8239 130.004 37.2319 129.856 37.5119 129.56C37.7999 129.264 37.9879 128.872 38.0759 128.384C38.1719 127.896 38.2199 127.292 38.2199 126.572Z"
                      fill="#161A41"
                    />
                    <path
                      d="M25.7288 91.572C25.7288 90.196 25.9528 89.124 26.4008 88.356C26.8488 87.58 27.6328 87.192 28.7528 87.192C29.8648 87.192 30.6448 87.58 31.0928 88.356C31.5408 89.124 31.7648 90.196 31.7648 91.572C31.7648 92.972 31.5408 94.06 31.0928 94.836C30.6448 95.612 29.8648 96 28.7528 96C27.6328 96 26.8488 95.612 26.4008 94.836C25.9528 94.06 25.7288 92.972 25.7288 91.572ZM30.6848 91.572C30.6848 90.876 30.6368 90.288 30.5408 89.808C30.4528 89.32 30.2648 88.928 29.9768 88.632C29.6968 88.336 29.2888 88.188 28.7528 88.188C28.2088 88.188 27.7928 88.336 27.5048 88.632C27.2248 88.928 27.0368 89.32 26.9408 89.808C26.8528 90.288 26.8088 90.876 26.8088 91.572C26.8088 92.292 26.8528 92.896 26.9408 93.384C27.0368 93.872 27.2248 94.264 27.5048 94.56C27.7928 94.856 28.2088 95.004 28.7528 95.004C29.2888 95.004 29.6968 94.856 29.9768 94.56C30.2648 94.264 30.4528 93.872 30.5408 93.384C30.6368 92.896 30.6848 92.292 30.6848 91.572ZM33.2639 91.572C33.2639 90.196 33.4879 89.124 33.9359 88.356C34.3839 87.58 35.1679 87.192 36.2879 87.192C37.3999 87.192 38.1799 87.58 38.6279 88.356C39.0759 89.124 39.2999 90.196 39.2999 91.572C39.2999 92.972 39.0759 94.06 38.6279 94.836C38.1799 95.612 37.3999 96 36.2879 96C35.1679 96 34.3839 95.612 33.9359 94.836C33.4879 94.06 33.2639 92.972 33.2639 91.572ZM38.2199 91.572C38.2199 90.876 38.1719 90.288 38.0759 89.808C37.9879 89.32 37.7999 88.928 37.5119 88.632C37.2319 88.336 36.8239 88.188 36.2879 88.188C35.7439 88.188 35.3279 88.336 35.0399 88.632C34.7599 88.928 34.5719 89.32 34.4759 89.808C34.3879 90.288 34.3439 90.876 34.3439 91.572C34.3439 92.292 34.3879 92.896 34.4759 93.384C34.5719 93.872 34.7599 94.264 35.0399 94.56C35.3279 94.856 35.7439 95.004 36.2879 95.004C36.8239 95.004 37.2319 94.856 37.5119 94.56C37.7999 94.264 37.9879 93.872 38.0759 93.384C38.1719 92.896 38.2199 92.292 38.2199 91.572Z"
                      fill="#161A41"
                    />
                    <defs>
                      <filter
                        id="filter0_d_4371_2720"
                        x="43.293"
                        y="106.8"
                        width="508.945"
                        height="115.742"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2720"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2720"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_4371_2720"
                        x="139.087"
                        y="131.659"
                        width="18.9561"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2720"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2720"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_4371_2720"
                        x="203.533"
                        y="168.496"
                        width="18.9561"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2720"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2720"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_4371_2720"
                        x="286.835"
                        y="145.302"
                        width="18.9561"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2720"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2720"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter4_d_4371_2720"
                        x="407.073"
                        y="170.542"
                        width="18.9561"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2720"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2720"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter5_d_4371_2720"
                        x="475.446"
                        y="113.922"
                        width="18.9561"
                        height="19.8079"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.376471 0 0 0 0 0.356863 0 0 0 0 1 0 0 0 0.17 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_4371_2720"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_4371_2720"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_4371_2720"
                        x1="49.3104"
                        y1="199.045"
                        x2="544.772"
                        y2="196.011"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FD9B3D" />
                        <stop offset="1" stop-color="#4CD7F6" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4371_2720"
                        x1="42.5411"
                        y1="94.0378"
                        x2="544.695"
                        y2="92.621"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#5EC3FF" stop-opacity="0.04" />
                        <stop
                          offset="1"
                          stop-color="#FD5DEF"
                          stop-opacity="0.04"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_4371_2720"
                        x1="42.0792"
                        y1="108.8"
                        x2="553.452"
                        y2="108.8"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF8548" />
                        <stop offset="1" stop-color="#FF5BEF" />
                      </linearGradient>
                      <clipPath id="clip0_4371_2720">
                        <rect
                          width="527.466"
                          height="23.6155"
                          fill="white"
                          transform="translate(18.7812 10.1208)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
