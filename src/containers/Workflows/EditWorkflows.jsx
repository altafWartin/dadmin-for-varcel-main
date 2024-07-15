import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo.svg";
import close from "../../assets/Icon/close.png";
import ArrowRight from "../../assets/Icon/ArrowRight.svg";

const EditWorkflow = () => {   const apiUrl = process.env.REACT_APP_API_URL;

  const { workflowId } = useParams();
  const [projectId, setProjectId] = useState("");
  const [paramCount, setParamCount] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [labelName, setLabelName] = useState("");
  const [labelNames, setLabelNames] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dynamicFields, setDynamicFields] = useState([]);

  // Handle change in input fields
  const handleInputChange = (index, event) => {
    const newData = [...dynamicFields];
    newData[index].value = event.target.value;
    setDynamicFields(newData);
  };

  useEffect(() => {
    const fetchWorkflowById = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${apiUrl}/api/workflow/get-workflow/${workflowId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch workflow");
        }
        const data = await response.json();
        console.log("Edit project response:", data.data);

        setProjectId(data.data.projectId);
        setName(data.data.name);
        setDescription(data.data.description);
        setDynamicFields(data.data.dynamicData || []);
        setParamCount(data.data.dynamicData.length || 0);
      } catch (error) {
        console.error("Error fetching workspace:", error);
        // Handle error (e.g., show error message to user)
      }
    };

    if (workflowId) {
      fetchWorkflowById();
    }
  }, [workflowId]);

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
    if (labelName.trim() === "") return;

    // Update labelNames state
    setLabelNames((prevLabelNames) => [...prevLabelNames, labelName.trim()]);

    // Update dynamicFields state
    setDynamicFields((prevFields) => [
      ...prevFields,
      { key: labelName.trim(), value: "" }
    ]);

    // Increase paramCount
    setParamCount(paramCount + 1);

    // Reset labelName and close the popup
    setLabelName("");
    closePopup();
  };

  const handleDelete = (index) => {
    const updatedDynamicFields = [...dynamicFields];
    updatedDynamicFields.splice(index, 1);
    setDynamicFields(updatedDynamicFields);
    setParamCount(paramCount - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bodyData = {
        id: workflowId,
        name: name,
        description: description,
        dynamicData: dynamicFields,
      };

      console.log("bodyData", bodyData);

      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://d-admin-backend.onrender.com/api/workflow/update-workflow",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bodyData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update workflow");
      }

      const data = await response.json();
      console.log("Response data:", data);
      // Handle success (e.g., show success message)
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error (e.g., show error message to user)
    }
  };
  return (
    <div className="containerBody">
      {isPopupOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[25.88rem] p-8 bg-white rounded-3xl shadow-lg backdrop-blur-[8px]">
          <button
            className="absolute top-2 right-2 bg-white"
            onClick={() => setPopupOpen(false)}
          >
            <img src={close} className="h-6 w-6 text-gray-500" alt="Close" />
          </button>
          <div className="relative h-[21.31rem] text-[0.88rem] text-dimgray font-poppins">
            <div className="w-full absolute top-[9.19rem] right-0 left-0 h-[12.13rem]">
              <input
                placeholder="Enter label name"
                type="text"
                value={labelName}
                onChange={handleLabelChange}
                className="w-full mb-3 px-3 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
              />
              <button
                onClick={submitLabel}
                className="mb-3 w-full hover:bg-coral-100 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-200"
              >
                Submit
              </button>
            </div>
            <div className="absolute top-[calc(50% - 139.5px)] left-[calc(50% - 89.5px)] text-[1.25rem] leading-[2.5rem] capitalize font-medium text-darkslategray-100">
              Workflow Actions
            </div>
            <img
              className="absolute top-0 left-[10.19rem] w-[2.15rem] h-[1.94rem]"
              alt=""
              src={logo}
            />
            <div className="absolute top-[4.44rem] left-[2.06rem] tracking-[-0.02em] whitespace-pre-wrap text-center inline-block w-[18.31rem]">
              Enter input label name.
            </div>
          </div>
        </div>
      )}
      <section className="w-full min-h-screen flex flex-col items-center justify-start py-0 px-[1.25rem] box-border gap-5 max-w-full text-left text-[1.5rem] text-bodytext-100 font-poppins lg:gap-5 mq750:gap-5">
        <div className="self-stretch flex flex-row items-center justify-between gap-4 max-w-full mq1050:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-0.31rem max-w-full mq450:flex-wrap">
            <h2 className="m-0 h-[2.25rem] relative text-inherit tracking-[0.02em] font-semibold font-inherit flex items-center mq450:text-[1.19rem]">
              Workflow
            </h2>
            <img
              className="h-[0.69rem] w-[0.44rem] relative object-contain"
              alt=""
              src={ArrowRight}
            />
            <div className="relative text-[1rem] tracking-[0.02em] capitalize">
              Edit Workflow
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="m-0 w-[57.44rem] rounded-3xl bg-white flex flex-col items-center justify-start pt-[2.13rem] pb-[2.75rem] pr-[2.81rem] pl-[2.75rem] box-border relative gap-[1.56rem] max-w-full z-[2] mq1050:pl-[1.38rem] mq1050:pr-[1.38rem] mq750:pt-[1.38rem] mq750:pb-[1.81rem] mq750:box-border">
          <div className="w-[24.44rem] h-[5.13rem] relative hidden max-w-full z-[0]">
            <div className="absolute w-full top-[1.81rem] right-0 left-0 rounded-lg box-border h-[3.13rem] border-[1px] border-solid border-darkslategray-300"></div>
            <div className="absolute top-[3.31rem] right-[1rem] w-[1rem] h-[0.63rem]">
              <div className="absolute top-[0rem] right-0 text-[1.13rem] leading-[0.63rem] font-font-awesome-6-pro text-bodytext-50 text-left inline-block w-full h-full">
                
              </div>
            </div>
            <div className="absolute top-[2.81rem] left-1 text-[0.88rem] leading-[1.25rem] font-manrope text-bodytext-50 text-left">
              role
            </div>
            <div className="absolute top-[0.25rem] left-[0.5rem] text-[0.88rem] leading-[1.13rem] uppercase font-semibold font-manrope text-bodytext-50 text-left">
              role
            </div>
          </div>
          <div className="w-[57.44rem] h-[36rem] relative rounded-3xl bg-white hidden max-w-full z-[1]"></div>
          <div className="w-[0rem] h-[1.25rem] absolute my-0 mx-[!important] bottom-[2.13rem] left-[16.38rem] text-[0.88rem] leading-[1.25rem] capitalize font-manrope text-bodytext-50 text-left inline-block z-[3]"></div>
          <div className="flex flex-row items-start justify-start py-0 pr-[0.38rem] pl-0 box-border max-w-full">
            <div className="flex flex-col items-center justify-start max-w-full">
              <img
                className="w-[2.15rem] h-[1.94rem] relative z-[4]"
                loading="eager"
                alt=""
                src={logo}
              />
              <h3 className="m-0 relative text-[1.25rem] leading-[2.5rem] capitalize font-medium font-poppins text-darkslategray-200 text-left z-[3] mq450:text-[1rem] mq450:leading-[2rem]">
                Edit Workflow
              </h3>
              <div className="relative text-[0.88rem] tracking-[-0.02em] font-poppins text-bodytext-50 whitespace-pre-wrap text-center z-[4]">
                Improve business performance with Comvi dashboards
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
            <div className="self-stretch  flex flex-row flex-wrap items-start justify-center gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
              <div className="flex-1 w-[200px] flex flex-col items-start justify-center pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] z-[3]">
                <div className="center flex justify-center w-full">
                  <div>
                    <label
                      htmlFor="projectId"
                      className="block text-sm font-medium text-bodytext-50 dark:text-white"
                    >
                      PROJECT ID
                    </label>
                    <div className="bg-gray-50 border w-[300px] h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                      {projectId}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.69rem] max-w-full mq450:gap-[2.69rem]">
              <div className="flex-1  flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  htmlFor="name"
                  className="block ml-2 text-sm font-medium text-bodytext-50 dark:text-white"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] min-w-[15.88rem] max-w-full z-[3]">
                <label
                  htmlFor="description"
                  className="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-50 border h-[3.13rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Description"
                  required
                />
              </div>
            </div>
            <div className="self-stretch items-start justify-start max-w-full">
              {/* Render dynamic fields */}
              {dynamicFields.map((field, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col w-full items-start justify-start pt-[0.25rem] px-[0.5rem] pb-[1.13rem] box-border relative gap-[0.5rem] z-[3]"
                >
                  <label
                    htmlFor={`param${index + 1}`}
                    className="block ml-2 text-sm uppercase font-medium text-bodytext-50 dark:text-white"
                  >
                    {field.key}
                  </label>
                  <div className="flex items-center w-full">
                    <input
                      type="text"
                      id={`param${index + 1}`}
                      className="bg-gray-50 border h-[3.13rem] capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-coral-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder={field.value}
                      value={field.value}
                      onChange={(e) => handleInputChange(index, e)}

                      required
                    />
                    <i
                      className="bi bi-trash ml-2 cursor-pointer mx-4 text-red-500"
                      onClick={() => handleDelete(index)}
                    ></i>
                  </div>
                </div>
              ))}
              <div className="w-full flex flex-row items-start justify-end py-0 pr-[4.19rem] pl-0 box-border max-w-full">
                <button
                  type="button"
                  onClick={openPopup}
                  className="flex justify-end bg-white cursor-pointer p-2 height-5 weight-5 rounded"
                  disabled={paramCount === 6}
                >
                  <i className="bi bi-plus-square text-bodytext-50 fs-4"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[26.63rem] flex flex-row items-start justify-start py-0 pr-[2.19rem] pl-0 box-border max-w-full">
            <button className="cursor-pointer border-none p-[0.94rem] bg-coral-100 flex-1 rounded-lg flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[4] hover:bg-chocolate-100">
              <div className="h-[3.13rem] w-[14.44rem] relative rounded-lg bg-coral-100 hidden max-w-full"></div>
              <b className="relative text-[0.88rem] leading-[1.25rem] capitalize font-poppins text-white text-left z-[1]">
                Save
              </b>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditWorkflow;
