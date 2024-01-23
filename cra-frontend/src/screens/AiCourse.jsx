import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AiCourse.css";
import { Input, Button } from "antd";
import { BsStars } from "react-icons/bs";
import svg from "../assests/aicourse.svg";

const AiCourse = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [title, setTitle] = useState("");
  const handleInputChange = (e, id) => {
    const newInputFields = [...inputFields];
    newInputFields[id].value = e.target.value;
    setInputFields(newInputFields);
  };
  const handleAddUnit = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleDeleteLastUnit = () => {
    if (inputFields.length > 1) {
      const newInputFields = [...inputFields];
      newInputFields.pop();
      setInputFields(newInputFields);
    }
  };

  const handleGenerate = async () => {
    console.log("pressed");
    const response = await fetch("https://api.edenai.run/v2/text/generation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:
          `Bearer ${process.env.REACT_APP_EDENV_API_KEY}`,
      },
      body: JSON.stringify({
        providers: "openai",
        text: `Generate a list of topics and subtopics under the main parts of ${title}, namely '${inputFields[0].value}' and '${inputFields[1].value}'. The output should be in a well-structured JSON format. Here's an example of the expected output:
        [
          {
            "id": 1,
            "title": "${inputFields[1].value}",
            "subtopics": ["...."]
          },
          {
            "id": 2,
            "title": "${inputFields[1].value}",
            "subtopics": ["..."]
          }
        ]
        
        Please fill in the '${title}' with the main topic (${inputFields[0].value} or ${inputFields[1].value}) and 'subtopics' with relevant subtopics under each main topic.`,
        temperature: 0.2,
        max_tokens: 500,
        fallback_providers: "",
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const params = {
      paramName: data.openai.generated_text,
    };
    navigate("/aivideo", { state: params });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "2rem",
          justifyContent: "space-evenly",
          minHeight: "90vh",
        }}
      >
        <div style={{ width: "50%" }}>
          <div className="aicourse-main">AI Course Maker</div>
          <div className="aicourse-info">
            Enter in a course title, or what you want to learn about. Then enter
            a list of units, which are the specifics you want to learn. and our
            AI will generate a course for you!
          </div>
          <div className="aicourse-inputarea">
            <div className="aicourse-input-title">Title</div>
            <div>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="aicourse-input"
                placeholder="Enter the main topic of the course (e.g. 'Calculus')"
              />
            </div>
          </div>
          {inputFields.map((input, id) => (
            <div className="aicourse-inputarea" key={id}>
              <div className="aicourse-input-title">Unit {id + 1}</div>
              <div>
                <Input
                  value={input.value}
                  onChange={(e) => handleInputChange(e, id)}
                  className="aicourse-input"
                  placeholder="Enter the subtopic topic of the course"
                />
              </div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <Button
              className="aicourse-button"
              style={{ backgroundColor: "green", paddingTop: "0" }}
              onClick={handleAddUnit}
            >
              Add Unit{" "}
              <span
                style={{ color: "", fontSize: "1.15rem", marginLeft: "0.5rem" }}
              >
                +
              </span>
            </Button>
            <Button
              className="aicourse-button"
              style={{ backgroundColor: "red", paddingTop: "0" }}
              onClick={handleDeleteLastUnit}
            >
              Delete Unit{" "}
              <span
                style={{ color: "", fontSize: "1.15rem", marginLeft: "0.5rem" }}
              >
                -
              </span>
            </Button>
            <Button
              onClick={handleGenerate}
              className="aicourse-button"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2234da",
                padding: "0.35rem",
              }}
            >
              <div>Generate </div>
              <span
                style={{ color: "", fontSize: "1.15rem", marginLeft: "0.5rem" }}
              >
                <BsStars />
              </span>
            </Button>
          </div>
        </div>
        <div>
          <img src={svg} style={{ height: "100%", width: "100%" }} alt="" />
        </div>
      </div>
    </>
  );
};

export default AiCourse;
