import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";




const testimonialsData = [
  {
    content:"Finding a job that values my skills and accommodates my visualimpairment used to be a challenge. Thanks to this platform, I landed a fulfilling job in software development. The supportive community made all the difference!",
        author: "James",
    image:
    "https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ftestimonials%2Fdr_joerg_storm.webp&w=48&q=75",
  },
  {
    content:
      "I always felt my hearing impairment was a barrier to finding the right job. This website not only connected me with inclusive employers but also provided resources for effective communication. Now, I'm thriving in my marketing career!",
    author: "Hannah",
    image:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
  },
  
  {
    content:
    "As a wheelchair user, I faced obstacles in my job search. This   platform not only offered accessible job listings but also empoweredme with resources on workplace accessibility. I am now managing projects and making a difference!",    author: "Simran",
    image:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
  },
  {
    content:
      "Transitioning from the military with PTSD posed challenges. This platform understood my unique situation and connected me with employers who prioritize mental health support. Now, I'm excelling in IT support with a supportive team.",
    author: "Tarun",
    image:
      "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=",
  },
  {
    content:
      "Mobility impairment made traditional job search frustrating. This website not only listed accessible job opportunities but also provided guidance on workplace accommodations. I'm now thriving as an administrative assistant!",
    author: "Nikhil",
    image:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=w8SlKv-4u6xYyU07CXeBRvfW6F0iYx-a7HR2ChM8ZbU=",
  },
];

const Testimonials = () => {
  return (
    <Box
      bg="#f3f4f6"
      padding="2rem"
    >
      <Flex
        fontSize="2rem"
        fontWeight={700}
        textAlign="center"
        mb="1.9rem"
        justify="center"
        align="center"
      >
        <div>People loving using </div>
        <h1 color="#ffcf36" fontWeight="bolder" ml="0.5rem" pt="0.3rem">
          Adapt<span style={{ color: "#3261ff" }}>Ability</span>
        </h1>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} gap="1rem">
        {testimonialsData.map((testimonial, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="1rem"
            padding="1rem"
            fontWeight={500}
            flex={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={index === 0 ? 0 : { base: "1rem", md: 0 }}
          >
            <Text>{testimonial.content}</Text>
            <Flex
              fontWeight={500}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              gap="1rem"
              mt="1rem"
            >
              <Image
                src={testimonial.image}
                alt="Profile photo"
                borderRadius="3rem"
                height="3rem"
                width="3rem"
                objectFit="cover"
              />
              <div>{testimonial.author}</div>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
