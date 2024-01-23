import React, { useState } from "react";
import "./Disabilityrights.css";
import AIchatbotRights from "../components/AIchatbotRights";

const DisabilityRightsInfo = () => {
  const [currentPage, setCurrentPage] = useState("Flash Cards");
  const [flashCardData, setFlashCardData] = useState([
    {
      section: "Rights",
      title: "Non-Discrimination",
      desc: "Right to be free from discrimination based on disability in all aspects of employment, as per the Americans with Disabilities Act (ADA).",
    },
    {
      section: "Schemes",
      title: "Ticket to Work Program",
      desc: "Initiative facilitating access to employment services and vocational rehabilitation for Social Security disability beneficiaries.",
    },
    {
      section: "Schemes",
      title: "Work Opportunity Tax Credit (WOTC)",
      desc: "Tax credit for employers hiring individuals from certain target groups, including people with disabilities.",
    },
    {
      section: "Benefits",
      title: "Employee Assistance Programs (EAP)",
      desc: "Access to counseling and support services for personal and work-related issues.",
    },
    {
      section: "Benefits",
      title: "Disability Insurance Benefits",
      desc: "Some employers offer disability insurance, providing income replacement in the event of a disability preventing work.",
    },
    {
      section: "Rights",
      title: "Reasonable Accommodations",
      desc: "Right to request and receive reasonable accommodations that enable equal opportunities in the workplace.",
    },
    {
      section: "Rights",
      title: "Equal Pay",
      desc: "Right to receive equal pay for equal work, regardless of disability status.",
    },
    {
      section: "Rights",
      title: "Confidentiality",
      desc: "Right to the confidentiality of medical information and protection from unnecessary inquiries about disability.",
    },
    {
      section: "Rights",
      title: "Job Protection",
      desc: "Right to protection against retaliation for asserting rights under disability anti-discrimination laws.",
    },
    {
      section: "Schemes",
      title: "Social Security Disability Insurance (SSDI)",
      desc: "Government program providing financial support to individuals with disabilities who are unable to work.",
    },
    {
      section: "Schemes",
      title: "Vocational Rehabilitation Services",
      desc: "State-funded programs offering rehabilitation services and job placement assistance for individuals with disabilities.",
    },
    {
      section: "Schemes",
      title: "Job Accommodation Network (JAN)",
      desc: "Free consulting service providing information on workplace accommodations and disability employment issues.",
    },
    {
      section: "Benefits",
      title: "Health Insurance Protections",
      desc: "Access to health insurance coverage without discrimination based on disability, under the Affordable Care Act.",
    },
    {
      section: "Benefits",
      title: "Flexible Work Arrangements",
      desc: "Benefit from flexible work schedules and telecommuting options, promoting work-life balance.",
    },
    {
      section: "Benefits",
      title: "Training and Career Development",
      desc: "Opportunities for training, skill development, and career advancement to enhance employability.",
    },
  ]);
  return (
    <div style={{ textAlign: "left", padding: "2rem", fontSize: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
          // border: "2px solid gray",
          marginBottom: "2rem",
          fontWeight: 600,
          fontSize: "1.7rem",
          justifyContent: "center",
          color: "#2234da",
          // padding: "1rem",
        }}
      >
        <div
          style={{
            textDecoration:
              currentPage === "Flash Cards" ? "underline" : "none",
            color: currentPage === "Flash Cards" ? "#e38a43" : "#2234da",
          }}
          onClick={() => setCurrentPage("Flash Cards")}
        >
          Flash Cards
        </div>
        <div
          style={{
            textDecoration:
              currentPage === "Educational Content" ? "underline" : "none",
            color:
              currentPage === "Educational Content" ? "#e38a43" : "#2234da",
          }}
          onClick={() => setCurrentPage("Educational Content")}
        >
          Educational Content
        </div>
        <div
          style={{
            textDecoration:
              currentPage === "Legal Resources" ? "underline" : "none",
            color: currentPage === "Legal Resources" ? "#e38a43" : "#2234da",
          }}
          onClick={() => setCurrentPage("Legal Resources")}
        >
          Legal Resources
        </div>
        <div
          style={{
            textDecoration:
              currentPage === "Legal Aid Chatbot" ? "underline" : "none",
            color: currentPage === "Legal Aid Chatbot" ? "#e38a43" : "#2234da",
          }}
          onClick={() => setCurrentPage("Legal Aid Chatbot")}
        >
          Legal Aid Chatbot
        </div>
        {/* <div
          style={{
            textDecoration:
              currentPage === "Government Schemes" ? "underline" : "none",
          }}
          onClick={() => setCurrentPage("Government Schemes")}
        >
          Government Schemes
        </div> */}
      </div>
      {currentPage === "Flash Cards" && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            // margin: "2rem",
            gap: "2rem",
          }}
        >
          {flashCardData?.map((Card) => {
            return (
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front" style={{ padding: "1rem" }}>
                    {/* <p style={{ fontWeight: 600 }}>FLIP CARD</p> */}
                    <p style={{ fontWeight: 800, fontSize: "1.5rem" }}>
                      {Card.title}
                    </p>
                    <p>Hover Me</p>
                  </div>
                  <div class="flip-card-back" style={{ padding: "0.75rem" }}>
                    <p style={{ fontWeight: 600 }}>{Card.section}</p>
                    <div>
                      <strong style={{ marginRight: "0.3rem" }}>
                        {Card.title}:
                      </strong>
                      {Card.desc}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {currentPage === "Educational Content" && (
        <div>
          <div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 625,
                marginBottom: "1.3rem",
              }}
            >
              <a
                style={{
                  fontWeight: 600,
                  marginRight: "0.5rem",
                  color: "#2234da",
                }}
              >
                Navigating Employment:
              </a>
              A Guide for Individuals with Disabilities
            </div>
            <div
              style={{ fontSize: "1.5rem", fontWeight: 550, marginTop: "1rem" }}
            >
              Introduction:
            </div>
            Understanding Your Rights: Overview of Disability Rights:
            Explanation of the fundamental rights and protections provided to
            individuals with disabilities under relevant legislation, such as
            the Americans with Disabilities Act (ADA) or equivalent in your
            region. Reasonable Accommodations: Detailed information on
            reasonable accommodations in the workplace and how to request them.
            Include examples and emphasize the employer's obligation to provide
            accommodations that enable equal opportunities.
            <div
              style={{ fontSize: "1.5rem", fontWeight: 550, marginTop: "1rem" }}
            >
              Section 1: Preparing for Job Hunting{" "}
            </div>
            1. Self-Assessment: Identifying Strengths and Skills: Guidance on
            assessing personal strengths, skills, and interests to help
            individuals identify suitable career paths. Setting Career Goals:
            Tips on setting realistic short-term and long-term career goals
            based on personal aspirations and market demand. 2. Building a
            Strong Resume: Crafting an Inclusive Resume: Guidelines for creating
            a resume that highlights abilities, achievements, and experiences,
            emphasizing the value that individuals with disabilities bring to
            the workplace. Addressing Employment Gaps: Strategies for addressing
            employment gaps, emphasizing skills gained during any period of
            unemployment or gaps due to disability-related reasons. 3.
            Leveraging Assistive Technologies: Using Assistive Technologies in
            Job Search: An overview of assistive technologies and how they can
            be utilized in job hunting, from resume creation to online job
            searches. Accessible Job Platforms: Recommendations for using job
            platforms that prioritize accessibility and provide features
            beneficial to individuals with disabilities.
            <div
              style={{ fontSize: "1.5rem", fontWeight: 550, marginTop: "1rem" }}
            >
              Section 2: Navigating the Job Market
            </div>
            1. Disclosing Disability: Deciding When to Disclose: Guidance on
            making informed decisions about disclosing a disability during the
            job application process, taking into account individual preferences
            and legal considerations. Communicating Accommodation Needs: Tips on
            effectively communicating accommodation needs during the interview
            process and negotiating accommodations with potential employers. 2.
            Interview Preparation: Researching Employers: Strategies for
            researching potential employers to assess their commitment to
            diversity and inclusivity. Practicing Common Interview Questions:
            Interactive exercises and sample answers to common interview
            questions, tailored to address disability-related concerns. 3. Legal
            Protections in the Workplace: Understanding ADA Protections: A
            detailed overview of ADA protections in the workplace, including
            protection against discrimination and provisions for reasonable
            accommodations. Rights During Employment: Explanation of ongoing
            rights and protections during employment, emphasizing the importance
            of an inclusive and accessible work environment.
            <div
              style={{ fontSize: "1.5rem", fontWeight: 550, marginTop: "1rem" }}
            >
              Conclusion:
            </div>
            Empowering Success: Building a Support Network: Encouragement to
            build a support network of mentors, peers, and advocates who can
            provide guidance and assistance throughout the job hunting and
            employment journey. Continuous Learning: Emphasis on continuous
            learning, self-advocacy, and staying informed about evolving
            workplace rights and resources.
          </div>
        </div>
      )}
      {currentPage === "Legal Resources" && (
        <div>
          <div
            style={{
              fontSize: "1.75rem",
              fontWeight: 625,
              marginBottom: "1.3rem",
            }}
          >
            <a
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Empowering Disability Advocacy in the Workplace:
            </a>
            A Comprehensive Guide to Rights, Laws, and Legal Support Services
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 625,
              marginBottom: "1.3rem",
              paddingTop: "1.3rem",
            }}
          >
            Here are some information and resources related to disability rights
            and legal support services:
          </div>
          <div style={{}}>
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              1. Americans with Disabilities Act (ADA):
            </a>
            The ADA prohibits discrimination against individuals with
            disabilities in various areas, including employment. ADA National
            Network provides information, training, and resources related to
            ADA. <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              2. Job Accommodation Network (JAN):{" "}
            </a>
            JAN provides free, expert, and confidential guidance on workplace
            accommodations and disability employment issues.{" "}
            <a
              href="https://askjan.org/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Job Accommodation Network (JAN)
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              3. Equal Employment Opportunity Commission (EEOC):{" "}
            </a>
            EEOC enforces federal laws related to workplace discrimination,
            including ADA. EEOC - Disability Discrimination{" "}
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              4. National Council on Disability (NCD):{" "}
            </a>
            NCD is an independent federal agency promoting policies and
            practices that ensure people with disabilities have equal
            opportunities.{" "}
            <a
              href="https://ncd.gov/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              National Council on Disability
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              5. Disability Rights Legal Center (DRLC):{" "}
            </a>
            DRLC provides legal representation to people with disabilities on a
            wide range of disability-related legal issues.{" "}
            <a
              href="https://drlcenter.org/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Disability Rights Legal Center{" "}
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              6. Disability Rights Advocates (DRA):{" "}
            </a>
            DRA is a non-profit legal center advocating for the civil rights of
            people with disabilities.{" "}
            <a
              href="https://dralegal.org/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Disability Rights Advocates{" "}
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              7. National Disability Rights Network (NDRN):{" "}
            </a>
            NDRN provides legal representation and advocacy for individuals with
            disabilities.{" "}
            <a
              href="https://www.ndrn.org/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              National Disability Rights Network{" "}
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              8. Office of Disability Employment Policy (ODEP):{" "}
            </a>
            ODEP provides information and resources to promote the inclusion of
            people with disabilities in the workforce. Office of Disability
            Employment Policy <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              9. Disability.gov:
            </a>{" "}
            Disability.gov is a comprehensive online resource for information on
            disability programs and services.{" "}
            <a
              href="https://www.disability.gov/"
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              Disability.gov{" "}
            </a>
            <br style={{ paddingTop: "0.5rem" }} />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              10. Legal Aid Organizations:
            </a>{" "}
            Check with local legal aid organizations that may offer assistance
            to individuals with disabilities.
            <br />
            <a style={{ fontWeight: 600, marginRight: "0.5rem" }}>
              11. Employee Assistance Programs (EAP):{" "}
            </a>
            Many employers offer EAPs, which can provide confidential counseling
            and assistance for employees facing challenges, including
            disability-related issues.
          </div>
        </div>
      )}
      {currentPage === "Legal Aid Chatbot" && (
        <div>
          <div
            style={{
              fontSize: "1.75rem",
              fontWeight: 625,
              marginBottom: "1.3rem",
            }}
          >
            <a
              style={{
                fontWeight: 600,
                marginRight: "0.5rem",
                color: "#2234da",
              }}
            >
              "Empowering Conversations, One Message at a Time: Unlocking
              Answers, Solving Queries, and Bringing Ease to Your Experience
              with our Intelligent Chatbot!"
            </a>
            {/* A Comprehensive Guide to Rights, Laws, and Legal Support Services */}
            <AIchatbotRights />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisabilityRightsInfo;
