import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

import calendar from "../../assets/Icon/calendar.svg";
import arrowdown from "../../assets/Icon/arrowdown.svg";
import setting from "../../assets/Icon/setting.svg";

import ArrowRight from "../../assets/Icon/ArrowRight.svg";
import FileUpload from "../../assets/Icon/FileUpload.svg";

const AddImage = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [previewImage, setPreviewImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imageTag, setImageTag] = useState("");
  const [repository, setRepository] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();


  const openFileInput = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleFileChange = (files) => {
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const removePreview = () => {
    setPreviewImage(null);
    setSelectedFile(null);
    const fileInput = document.getElementById("fileInput");
    fileInput.value = null; // Clear the file input value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageName || !imageTag || !repository || !selectedFile) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("name", imageName);
    formData.append("tag", imageTag);
    formData.append("repository", repository);
    formData.append("file", selectedFile);

    console.log(formData);
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      const headers = {
        Authorization: `Bearer ${token}`, // Construct the Authorization header
      };

      const response = await fetch(
        `${apiUrl}/api/images/add-images`,
        {
          method: "POST",
          headers: headers, // Add the headers to the request
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        // navigate("/container");
        // Handle success (e.g., show a success message, clear the form, etc.)
      } else {
        const errorData = await response.json();
        console.error("Error uploading image:", errorData);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className=" bg-slate-100  pt-10 pl-[260px] h-[95vh]">
      <section class="w-[71.125rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[5rem_0rem] max-w-full text-left text-[1.5rem] text-midnightblue font-poppins lg:gap-[5rem_0rem] mq750:gap-[5rem_0rem]">
        <div class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
          <div class="flex flex-row items-center justify-start gap-[0rem_0.344rem]">
            <h2 class="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.188rem]">
              Container
            </h2>
            <img
              class="h-[0.688rem] w-[0.438rem] relative object-contain"
              alt=""
              src={ArrowRight}
            />

            <div class="relative text-[1rem] tracking-[0.02em] capitalize">
              Add Image
            </div>
          </div>
    
        </div>
        <form
          onSubmit={handleSubmit}
          class="m-0 w-[57.44rem] rounded-3xl bg-white flex flex-col items-center justify-start pt-[2.13rem] pb-[2.75rem] pr-[2.81rem] pl-[2.75rem] box-border relative gap-[1.56rem] max-w-full z-[2] mq1050:pl-[1.38rem] mq1050:pr-[1.38rem] mq1050:box-border mq750:pt-[1.38rem] mq750:pb-[1.81rem] mq750:box-border"
        >
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
                Add Image
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
                  Image Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Image Name"
                  value={imageName}
                  onChange={(e) => setImageName(e.target.value)}
                  required
                />
              </div>
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="first_name"
                  class="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Image Tag
                </label>
                <input
                  type="text"
                  id="name"
                  value={imageTag}
                  onChange={(e) => setImageTag(e.target.value)}
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Image Tag"
                  required
                />
              </div>
            </div>

            <div class="self-stretch flex flex-row flex-wrap items-start justify-start gap-[3rem] max-w-full mq450:gap-[3rem]">
              <div class="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  for="Repository"
                  class="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Repository
                </label>
                <input
                  type="text"
                  id="Repository"
                  value={repository}
                  onChange={(e) => setRepository(e.target.value)}
                  class="bg-gray-50 border  h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Repository"
                  required
                />
              </div>{" "}
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  htmlFor="fileInput"
                  className="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  File Upload
                </label>

                <div className="relative w-full">
                  <input
                    type="file"
                    id="fileInput"
                    className="opacity-0 cursor-pointer absolute inset-0 w-full h-full"
                    onChange={(e) => handleFileChange(e.target.files)}
                    accept=".zip,application/zip" // Limit file selection to zip files
                    required
                  />
                  <div className="bg-gray-50 border w-full h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 relative">
                    <span className="text-gray-500 mt-1">File Upload</span>
                    <img
                      className="w-[1.25rem] h-[1.25rem] absolute right-[1.563rem] bottom-[1rem] align-center cursor-pointer"
                      src={FileUpload}
                      alt="Upload Icon"
                      onClick={() => openFileInput()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-[26.63rem] flex flex-row items-start justify-start py-[0rem] pr-[2.19rem] pl-[0rem] box-border max-w-full">
            <button
              type="submit"
              class="cursor-pointer [border:none] p-[0.94rem] bg-coral-100 flex-1 rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[4] hover:bg-chocolate-100"
            >
              <div class="h-[3.13rem] w-[24.44rem] relative rounded-lg bg-coral-100 hidden max-w-full"></div>
              <b class="relative text-[0.88rem] leading-[1.25rem] capitalize font-poppins text-white text-left z-[1]">
                Add Image
              </b>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddImage;
