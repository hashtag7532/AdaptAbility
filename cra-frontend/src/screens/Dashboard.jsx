import React, { useState, useContext, useEffect } from "react";
import { auth } from "../Firebase";
import axios from "axios";
import { FaRegCalendarCheck, FaRegStar, FaTable } from "react-icons/fa";
import { getFirestore, doc, getDocs, collection } from "firebase/firestore";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Input,
  FormLabel,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  CheckboxGroup,
  useDisclosure,
  //   Badge,
} from "@chakra-ui/react";
import { FaFileContract } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Badge, Calendar } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { addApplicantProfile, updateUserProfile } from "../userFirestore";
import { IoNotificationsCircleOutline, IoStarSharp } from "react-icons/io5";
import { FcAcceptDatabase } from "react-icons/fc";

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event......",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [Jobs, setJobs] = useState([]);

  function time(posted) {
    // Extract Date object from Firebase Timestamp
    const timestamp = posted.toDate();

    const currentTime = new Date(); // Current time
    const differenceInMilliseconds = currentTime - timestamp;

    const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  }

  const addApplicant = () => {
    const rating = "4.7";
    const disability = selectedValues[0] ? selectedValues[0] : "Blind";
    const resume = user.resume[0]
      ? user.resume[0]
      : "A forward-thinking front-end developer, I specialize in architecting innovative and intuitive user interfaces. My skill set encompasses cutting-edge technologies, allowing me to transform design visions into captivating and user-centric web experiences.";
    addApplicantProfile(
      user.uid,
      user.name,
      user.Role,
      rating,
      resume,
      disability
    );
    alert("Application sent successfully");
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const db = getFirestore();
        const jobsCollection = await getDocs(collection(db, "jobs"));
        const jobsData = jobsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(jobsData);
        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  // Calendar
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  // Routing
  const navigate = useNavigate();

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gender, setGender] = useState("-");
  const [BloodGrp, setBloodGrp] = useState("-");
  const [Role, setRole] = useState("-");
  const [WorkExperience, setWorkExperience] = useState("-");
  const [selectedValues, setSelectedValues] = useState([]);

  const addDetails = () => {
    if (!user) {
      alert("Sign in first");
    } else {
      updateUserProfile(
        user.uid,
        gender,
        BloodGrp,
        Role,
        WorkExperience,
        selectedValues
      );
      setUser({
        ...user,
        gender: gender,
        bloodGrp: BloodGrp,
        Role: Role,
        workExperience: WorkExperience,
        disability: selectedValues,
      });
    }
    onClose();
    // window.location.reload();
  };
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleOCRRequest = async () => {
    const apiUrl = "https://api.edenai.run/v2/ocr/identity_parser";
    const apiKey =process.env.REACT_APP_EDENV_API_KEY // Replace with your actual API key

    const form = new FormData();
    form.append("providers", "affinda");
    form.append("file", imageFile);
    form.append("fallback_providers", "");

    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };

    try {
      const response = await axios.post(apiUrl, form, { headers });
      setResult(response.data.affinda.extracted_data[0].mrz.value);
    } catch (error) {
      console.error("Error during OCR request:", error);

      // Log the detailed error response
      if (error.response) {
        console.error("Error response data:", error.response.data);
        setError(error.response.data.error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const [notificationNumber, setNotificationNumber] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState([]);

  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        const db = getFirestore();
        const interviewCollection = collection(db, "interview");
        const interviewSnapshot = await getDocs(interviewCollection);

        const interviewData = interviewSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const userUid = user ? user.uid : null;

        if (userUid) {
          const userInterviewData = interviewData.filter(
            (item) => item.uid === userUid
          );
          console.log(userInterviewData);
          setNotificationDetails(userInterviewData);
        }
      } catch (error) {
        console.error("Error fetching interview data:", error);
      }
    };

    fetchInterviewData();
  }, []);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);

    // setNotificationDetails(fetchNotificationDetails());
  };

  const fetchNotificationDetails = () => {
    // Replace this with your logic to fetch notification details from the server
    return [
      { id: 1, text: "Notification 1" },
      { id: 2, text: "Notification 2" },
      // Add more notification details as needed
    ];
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "2rem",
          textAlign: "left",
          //   display: "flex",
          //   flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.7rem",
            fontSize: "1.75rem",
          }}
        >
          <div
            style={{
              // marginTop: "1rem",
              fontWeight: 725,
            }}
          >
            Good morning, {user ? user.name : "User"}
          </div>
          <div style={{ position: "relative", display: "inline-block" }}>
            <div onClick={handleIconClick}>
              <IoNotificationsCircleOutline size="2.45rem" color="#2234da" />
              {notificationDetails?.length >= 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    background: "#ff0000",
                    color: "#ffffff",
                    borderRadius: "50%",
                    width: "1rem",
                    height: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "0.75rem",
                  }}
                >
                  {notificationDetails?.length}
                </div>
              )}
            </div>
            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "2rem", // Adjust the distance from the icon as needed
                  right: "0",
                  background: "#ffffff",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.25rem",
                  padding: "0.5rem",
                  fontSize: "0.9rem",
                  zIndex: "1",
                }}
              >
                {notificationDetails.map((notification) => (
                  <div key={notification.uid}>
                    <a
                      href="https://ritojnan.github.io/streamworks/"
                      style={{ color: "blue" }}
                    >
                      Meet{" "}
                    </a>
                    {notification.Role} Role Comapany:{notification.Company}
                    Meeting ID:{3}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ fontWeight: 625 }}>User Profile</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            marginTop: "1rem",
            borderRadius: "1rem",
            // boxShadow: "1rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              flex: 0.5,
              borderRight: "1px solid lightgray",
              padding: "1rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src={
                  user
                    ? user.photo
                    : "https://imgs.search.brave.com/wl_4_Dm0dj1T1xWJ2Evsc_12M3MuKTZCxQ7Q-zWY1Lk/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBmL0dy/b3NzZXJfUGFuZGEu/SlBHLzUxMnB4LUdy/b3NzZXJfUGFuZGEu/SlBH"
                }
                alt=""
                style={{
                  width: "120px",
                  margin: "auto",
                  borderRadius: "1rem",
                  marginBottom: "1rem",
                  height: "120px",
                }}
              />
              <div style={{ fontWeight: 625 }}>{user ? user.name : "User"}</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <IoStarSharp color="#e38a43" />
                  <IoStarSharp color="#e38a43" />
                  <IoStarSharp color="#e38a43" />
                  <IoStarSharp color="#e38a43" />
                  <IoStarSharp color="#e38a43" />
                </div>
                <div>214 ratings</div>
              </div>
              <div
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                {user ? user.role : "Sign in to continue"}
              </div>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#ff5045",
                  borderRadius: "0.5rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  paddingTop: "0.35rem",
                  paddingBottom: "0.35rem",
                  margin: "auto",
                  width: "20%",
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={onOpen}
              >
                Edit
                <MdEdit style={{ marginLeft: "0.4rem" }} />
              </button>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgray",
                color: "gray",
              }}
            >
              <div>User profile</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  Gender:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.gender : "-"}
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.email : "-"}
                  </a>
                </div>
                <div>
                  Phone number:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? "943739262" : "-"}
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgray",
                color: "gray",
              }}
            >
              <div>Health Information</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  Blood group:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.BloodGrp : "-"}
                  </a>
                </div>
                <CheckboxGroup colorScheme="orange">
                  <div
                    onClick={(e) => {
                      if (e.target.value)
                        setSelectedValues((prev) => [...prev, e.target.value]);
                    }}
                  >
                    <Checkbox value="visual impairments">
                      Visual Impairments
                    </Checkbox>
                  </div>
                  <div
                    onClick={(e) => {
                      if (e.target.value)
                        setSelectedValues((prev) => [...prev, e.target.value]);
                    }}
                  >
                    <Checkbox value="hearing impairments">
                      Hearing Impairments
                    </Checkbox>
                  </div>
                  <div
                    onClick={(e) => {
                      if (e.target.value)
                        setSelectedValues((prev) => [...prev, e.target.value]);
                    }}
                  >
                    <Checkbox value="locomotor">Locomotor disability</Checkbox>
                  </div>
                  <div
                    onClick={(e) => {
                      console.log("pressed", e.target.value);
                      setSelectedValues((prev) => [...prev, e.target.value]);
                    }}
                  >
                    <Checkbox value="other">Other</Checkbox>
                  </div>
                </CheckboxGroup>
              </div>
            </div>
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgray",
                color: "gray",
              }}
            >
              <div>Disability info</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  UDID:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {result && (
                      <div>
                        <h3></h3>
                        {JSON.stringify(result, null, 2)}
                      </div>
                    )}
                  </a>
                </div>
                <div>
                  Disability PDF:{" "}
                  {/* <button
                    style={{
                      color: "#3261ff",
                    }}
                    onClick={() => navigate("/")}
                  > */}
                  <input type="file" onChange={handleFileChange} />
                  {/* </button> */}
                </div>
                <div>
                  <button
                    style={{
                      color: "#3261ff",
                    }}
                    onClick={handleOCRRequest}
                  >
                    Run OCR
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "1rem",
                color: "gray",
              }}
            >
              <div>Job</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  Role:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.Role : "-"}
                  </a>
                </div>
                <div>
                  Work experience:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.WorkExperience + " years" : "-"}
                  </a>
                </div>
                <div>
                  Resume:{" "}
                  <button
                    style={{
                      color: "#3261ff",
                    }}
                    onClick={() => navigate("/resumebuilder")}
                  >
                    Create / Enhance Resume {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "2rem",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        <div style={{ flex: 0.6 }}>
          <div style={{ fontWeight: 625 }}>Here are your statistics</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "1rem",
              gap: "1rem",
            }}
          >
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="xl"
              transition="transform 0.2s" // Add a smooth transition effect
              _hover={{ transform: "scale(1.05)" }} // Scale the card on hover
              style={{
                width: "100%",
                //   boxShadow: "inherit 100px",
              }}
            >
              <CardBody
                style={{
                  textAlign: "left",
                  marginTop: "-0.5rem",
                  marginBottom: "-0.5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaFileContract
                    style={{ margin: "auto" }}
                    size="2rem"
                    color="#2234da"
                  />
                  <div
                    style={{
                      paddingLeft: "0.2rem",
                      paddingRight: "0.2rem",
                      borderRadius: "0.2rem",
                      fontWeight: 650,
                    }}
                  >
                    <div style={{ color: "#2234da" }}>Active Contracts</div>
                    <div>2</div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="xl"
              transition="transform 0.2s" // Add a smooth transition effect
              _hover={{ transform: "scale(1.05)" }}
              style={{
                width: "100%",
                //   boxShadow: "inherit 100px",
              }}
            >
              <CardBody
                style={{
                  textAlign: "left",
                  marginTop: "-0.5rem",
                  marginBottom: "-0.5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaTable
                    style={{ margin: "auto" }}
                    size="2rem"
                    color="#2234da"
                  />
                  <div
                    style={{
                      paddingLeft: "0.2rem",
                      paddingRight: "0.2rem",
                      borderRadius: "0.2rem",
                      fontWeight: 650,
                    }}
                  >
                    <div style={{ color: "#2234da" }}>Interviews</div>
                    <div>{notificationDetails?.length}</div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="xl"
              transition="transform 0.2s" // Add a smooth transition effect
              _hover={{ transform: "scale(1.05)" }}
              style={{
                width: "100%",
                //   boxShadow: "inherit 100px",
              }}
            >
              <CardBody
                style={{
                  textAlign: "left",
                  marginTop: "-0.5rem",
                  marginBottom: "-0.5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {/* <FaFileContract
                    style={{ margin: "auto" }}
                    size="2rem"
                    color="#2234da"
                  /> */}
                  <FaRegCalendarCheck
                    style={{ margin: "auto" }}
                    size="2rem"
                    color="#2234da"
                  />
                  <div
                    style={{
                      paddingLeft: "0.2rem",
                      paddingRight: "0.2rem",
                      borderRadius: "0.2rem",
                      fontWeight: 650,
                    }}
                  >
                    <div style={{ color: "#2234da" }}>Accepted</div>
                    <div>0</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div
            style={{
              marginTop: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Calendar cellRender={cellRender} />
          </div>
        </div>
        <div style={{ textAlign: "left", flex: 0.4 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontWeight: 625,
            }}
          >
            <div>Recommended Jobs</div>
            <div style={{ color: "#ff5045", cursor: "pointer" }}>See More</div>
          </div>
          {Jobs.map((job) => {
            return (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                style={{ marginTop: "1rem" }}
                boxShadow="xl"
                transition="transform 0.3s" // Add a smooth transition effect
                _hover={{ transform: "scale(1.02)" }}
              >
                <CardBody style={{ textAlign: "left" }}>
                  <Heading size="md" style={{ paddingBottom: "0.5rem" }}>
                    {job?.Role}
                  </Heading>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.5rem",
                    }}
                  >
                    <Text pb="2">{job.CompanyName}</Text>•
                    <Text pb="2">{job?.Disability}</Text>•
                    <Text pb="2">{job?.Experience} years experience</Text>
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        gap: "0.5rem",
                      }}
                    >
                      <div>₹{job.Salary}</div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <FaRegStar />
                        {job.Rating}
                      </div>
                    </div>
                    <div onClick={addApplicant} style={{ color: "gray" }}>
                      <button
                        style={{
                          color: "#ff5045",
                          cursor: "pointer",
                          fontWeight: 700,
                          border: "1px solid lightgray",
                          borderRadius: "0.5rem",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          fontSize: "0.8rem",
                          marginRight: "0.5rem",
                        }}
                      >
                        Apply
                      </button>
                      {time(job.Posted)}
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>

      {/* // Modal  */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Gender</FormLabel>
            <Input
              onChange={(e) => setGender(e.target.value)}
              type="tel"
              placeholder="Enter gender"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>Blood group</FormLabel>
            <Input
              onChange={(e) => setBloodGrp(e.target.value)}
              type="tel"
              placeholder="Enter blood group"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>Role</FormLabel>
            <Input
              onChange={(e) => setRole(e.target.value)}
              type="tel"
              placeholder="Enter role"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>
              Work experience
            </FormLabel>
            <Input
              onChange={(e) => setWorkExperience(e.target.value)}
              type="tel"
              placeholder="Enter work experience in years"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              style={{
                backgroundColor: "#ff5045",
                color: "white",
                margin: "auto",
              }}
              onClick={addDetails}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dashboard;
