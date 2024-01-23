import React, { useState } from "react";
import {
  Select,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { TbMessages } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import ChatCard from "./ChatCard";
// import Modal2 from "@mui/material/Modal";

const Community = () => {
  const [Groups, setGroups] = useState([
    {
      name: "Mobility Challenges",
      description: "Empowering individuals with mobility challenges.",
      posts: 150,
      messages: 850,
      forums: ["#JobOpportunities", "#CareerAdvice"],
    },
    {
      name: "Visual Impairment Network",
      description: "Connecting the visually impaired community.",
      posts: 120,
      messages: 720,
      forums: ["#TechJobs", "#AccessibleTech"],
    },
    {
      name: "Hearing Impairments and Hard of Hearing Hub",
      description:
        "Supporting the hearing impairments and hard of hearing community.",
      posts: 90,
      messages: 600,
      forums: ["#InclusiveWorkplaces", "#CommunicationTips"],
    },
    {
      name: "Neurodiversity Allies",
      description: "Advocating for neurodiversity in the workplace.",
      posts: 80,
      messages: 550,
      forums: ["#NeurodiverseTalent", "#InclusiveHiring"],
    },
    {
      name: "Cognitive Accessibility Forum",
      description: "Fostering cognitive accessibility awareness.",
      posts: 100,
      messages: 680,
      forums: ["#AccessibleDesign", "#InclusiveTechnology"],
    },
    {
      name: "Disability Entrepreneurs Network",
      description: "Empowering disabled entrepreneurs and professionals.",
      posts: 110,
      messages: 720,
      forums: ["#BusinessOpportunities", "#EntrepreneurialTips"],
    },
    {
      name: "Invisible Disabilities Community",
      description: "Connecting individuals with invisible disabilities.",
      posts: 70,
      messages: 500,
      forums: ["#SupportNetwork", "#InvisibleDisabilityAwareness"],
    },
    {
      name: "Accessible Travel Enthusiasts",
      description: "Exploring accessible travel options for everyone.",
      posts: 95,
      messages: 600,
      forums: ["#AccessibleDestinations", "#TravelTips"],
    },
    {
      name: "Community Advocates for Access",
      description: "Advocating for accessibility in public spaces.",
      posts: 120,
      messages: 800,
      forums: ["#AccessibleCities", "#PublicSpacesInclusion"],
    },
  ]);

  const [meetings, setMeetings] = useState([
    {
      meetingName: "Team Collaboration",
      userName: "John Doe",
      hashtag: "#Collab123",
      camera: "Online",
      time: "18 January 2024 at 10:00 AM",
    },
    {
      meetingName: "Project Review",
      userName: "Jane Smith",
      hashtag: "#Project456",
      camera: "Online",
      time: "18 January 2024 at 11:30 AM",
    },
    {
      meetingName: "Client Presentation",
      userName: "Client A",
      hashtag: "#Client789",
      camera: "Online",
      time: "18 January 2024 at 02:00 PM",
    },
    {
      meetingName: "Design Discussion",
      userName: "Designer X",
      hashtag: "#Design789",
      camera: "Online",
      time: "18 January 2024 at 03:45 PM",
    },
  ]);

  // Modal
  const {
    isOpen: isMeetModalOpen,
    onOpen: onMeetModalOpen,
    onClose: onMeetModalClose,
  } = useDisclosure();
  const {
    isOpen: isChatModalOpen,
    onOpen: onChatModalOpen,
    onClose: onChatModalClose,
  } = useDisclosure();

  const [newMeeting, setNewMeeting] = useState({
    meetingName: "",
    userName: "",
    hashtag: "",
    camera: "",
    time: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting((prevMeeting) => ({
      ...prevMeeting,
      [name]: value,
    }));
  };

  const handleAddMeeting = () => {
    // Validate the input or perform any other checks if needed
    if (newMeeting.meetingName.trim() === "") {
      alert("Please enter a meeting name");
      return;
    }

    // Add the new meeting to the meetings array
    setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);

    // Reset the newMeeting state for the next input
    setNewMeeting({
      meetingName: "",
      userName: "",
      hashtag: "",
      camera: "",
      time: "",
    });
    onMeetModalClose();
  };

  // Chat modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f3f4f6" }}>
      {/* <div>Caraousel</div> */}
      {/* <ChatCard /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ minHeight: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 625 }}>
                Categories
              </div>
              <Select
                placeholder="Sort By"
                variant="flushed"
                // style={{ width: "fit-content" }}
              >
                <option value="option1" style={{ padding: "0.5rem" }}>
                  Visually Impaired
                </option>
                <option value="option2" style={{ padding: "0.5rem" }}>
                  Differently Abled
                </option>
                <option value="option3" style={{ padding: "0.5rem" }}>
                  Others
                </option>
              </Select>
            </div>
            <div>
              {Groups.map((group) => {
                return (
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    boxShadow="xl"
                    transition="transform 0.3s" // Add a smooth transition effect
                    _hover={{ transform: "scale(1.02)" }}
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      cursor: "pointer",
                    }}
                    onClick={onChatModalOpen}
                    // onClick={() => alert("Hi")}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "10%",
                        backgroundColor: "blue",
                        opacity: "0.65",
                      }}
                    >
                      <TbMessages
                        style={{ color: "white", fontSize: "2rem" }}
                      />
                    </div>
                    <CardBody
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 650 }}>{group.name}</div>
                        <div>{group.description}</div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "0.5rem",
                            marginTop: "0.5rem",
                          }}
                        >
                          {group.forums?.map((forum, forumIndex) => {
                            let backgroundColor;
                            switch (forum) {
                              case "#JobOpportunities":
                                backgroundColor = "#FFEC8B"; // Light Goldenrod Yellow
                                break;
                              case "#CareerAdvice":
                                backgroundColor = "#98FB98"; // Pale Green
                                break;
                              case "#TechJobs":
                                backgroundColor = "#B0E0E6"; // Powder Blue
                                break;
                              case "#AccessibleTech":
                                backgroundColor = "#87CEFA"; // Light Sky Blue
                                break;
                              case "#InclusiveWorkplaces":
                                backgroundColor = "#F0FFF0"; // Honeydew
                                break;
                              case "#CommunicationTips":
                                backgroundColor = "#FFB6C1"; // Light Pink
                                break;
                              case "#NeurodiverseTalent":
                                backgroundColor = "#DDA0DD"; // Plum
                                break;
                              case "#InclusiveHiring":
                                backgroundColor = "#FFDAB9"; // Peachpuff
                                break;
                              case "#AccessibleDesign":
                                backgroundColor = "#FFA07A"; // Light Salmon
                                break;
                              case "#InclusiveTechnology":
                                backgroundColor = "#FFD700"; // Gold
                                break;
                              case "#BusinessOpportunities":
                                backgroundColor = "#AFEEEE"; // Pale Turquoise
                                break;
                              case "#EntrepreneurialTips":
                                backgroundColor = "#98FB98"; // Pale Green
                                break;
                              case "#SupportNetwork":
                                backgroundColor = "#FFC0CB"; // Pink
                                break;
                              case "#InvisibleDisabilityAwareness":
                                backgroundColor = "#ADD8E6"; // Light Blue
                                break;
                              case "#AccessibleDestinations":
                                backgroundColor = "#FFD700"; // Gold
                                break;
                              case "#TravelTips":
                                backgroundColor = "#FF7F50"; // Coral
                                break;
                              case "#AccessibleCities":
                                backgroundColor = "#FFDAB9"; // Peachpuff
                                break;
                              case "#PublicSpacesInclusion":
                                backgroundColor = "#FFE4C4"; // Bisque
                                break;
                              // Add more cases for other forums if needed
                              default:
                                backgroundColor = "#D3D3D3"; // Light Grey
                                break;
                            }
                            return (
                              <div
                                key={forumIndex}
                                style={{
                                  padding: "0.5rem",
                                  backgroundColor,
                                  borderRadius: "10rem",
                                  fontWeight: "600",
                                  fontSize: "0.75rem",
                                  textAlign: "center",
                                }}
                              >
                                {forum}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "1rem",
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 650 }}>{group.posts}</div>
                          <div style={{ fontWeight: 500 }}>POSTS</div>
                        </div>
                        <div>
                          <div style={{ fontWeight: 650 }}>
                            {group.messages}
                          </div>
                          <div style={{ fontWeight: 500 }}>MESSAGES</div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ flex: 0.5 }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 625,
              marginBottom: "1.25rem",
            }}
          >
            Meet
          </div>
          <Button
            style={{
              backgroundColor: "white",
              color: "gray",
              margin: "auto",
              width: "100%",
              padding: "2rem",
            }}
            boxShadow="2xl"
            transition="transform 0.3s" // Add a smooth transition effect
            _hover={{ transform: "scale(1.02)" }}
            onClick={onMeetModalOpen}
          >
            + Tap to add a meet
          </Button>
          <div>
            {meetings.map((meeting) => {
              return (
                <Card
                  overflow="hidden"
                  variant="outline"
                  boxShadow="xl"
                  transition="transform 0.3s" // Add a smooth transition effect
                  _hover={{ transform: "scale(1.02)" }}
                  style={{
                    marginTop: "1rem",
                    // marginBottom: "1rem",
                    cursor: "pointer",
                    // gridColumn: 1 / 2,
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 625,
                        marginBottom: "1rem",
                      }}
                    >
                      {meeting.meetingName}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontWeight: "520",
                      }}
                    >
                      <IoPersonOutline />
                      <div>{meeting.userName}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.9rem",
                        fontWeight: "520",
                      }}
                    >
                      <div>#</div>
                      <div>{meeting.hashtag}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontWeight: "520",
                      }}
                    >
                      <IoCameraOutline />
                      <div>{meeting.camera}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontWeight: "520",
                      }}
                    >
                      <LuClock4 />
                      <div>{meeting.time}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      {/* // Modal  */}

      {/* Meet Modal */}
      <Modal isOpen={isMeetModalOpen} onClose={onMeetModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel style={{ paddingTop: "0.4rem" }}>Meeting Name</FormLabel>
            <Input
              type="tel"
              name="meetingName"
              value={newMeeting.meetingName}
              onChange={handleInputChange}
              placeholder="Meeting Name"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>User Name</FormLabel>
            <Input
              type="tel"
              name="userName"
              value={newMeeting.userName}
              onChange={handleInputChange}
              placeholder="User Name"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>Hashtag</FormLabel>
            <Input
              type="tel"
              name="hashtag"
              value={newMeeting.hashtag}
              onChange={handleInputChange}
              placeholder="Hashtag"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>Camera</FormLabel>
            <Input
              type="tel"
              name="camera"
              value={newMeeting.camera}
              onChange={handleInputChange}
              placeholder="Camera"
            />
            <FormLabel>Time</FormLabel>
            <Input
              type="tel"
              name="time"
              value={newMeeting.time}
              onChange={handleInputChange}
              placeholder="Time"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              style={{
                backgroundColor: "#ff5045",
                color: "white",
                margin: "auto",
              }}
              onClick={handleAddMeeting}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal size={"5xl"} isOpen={isChatModalOpen} onClose={onChatModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ChatCard />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Community;
