import React, { useState } from "react";
// import poppins from './poppins.otf'

import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import blob from "../assests/disable.svg";
import invoice from "../assests/Invoice.svg";
import management from "../assests/Management.svg";
import accounting from "../assests/accountinng.svg";
import arrow from "../assests/Vector4.svg";
import pie from "../assests/Vector1.svg";
import pie2 from "../assests/Vector.svg";
import vector2 from "../assests/Vector3.svg";
import arrow10 from "../assests/Arrow10.svg";
import star1 from "../assests/Stars1.svg";
import arrow3 from "../assests/Arrow3.svg";
import { CiCalendar } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { GoLaw } from "react-icons/go";
import Testimonials from "../screens/Testimonials";
export default function LandingTop() {
  const [click1, Setclick1] = useState(false);
  const [click2, Setclick2] = useState(false);
  const [click3, Setclick3] = useState(false);
  const [click4, Setclick4] = useState(false);
  return (
    <>
      <div className="home-container" style={{ position: "relative" }}>
        <img
          className="arrow1"
          src={arrow10}
          alt=""
          style={{
            position: "absolute",
            opacity: "30%",
            bottom: "-130px",
            right: "0px",
          }}
        />
        <div className="flexup">
          <div className="home-content-top-title">
            <span>Special platform</span> for Special Needs
          </div>
          <div
            className="home-content-top"
            style={{ fontFamily: "poppins", fontWeight: "bold" }}
          >
            <p className="p1">
              Empowering Every Ability : <br />
              Journey to a Fulfilling Career Starts Here.
            </p>
            <img className="home-image" src={blob} alt="profile" />
          </div>
        </div>
        <div className="home-content-below-title">
          We understand the unique strengths and talents that individuals <br />
          with disabilities bring to the workforce
        </div>
        <div className="buttons">
          <a
            href="https://calendly.com/akshatgattanidpsv"
            style={{ textDecoration: "none" }}
            className="btn btn1"
          >
            Make an Appointment
          </a>
          <a
            href="https://www.google.com/maps/place/SJT,+VIT+University,+Vellore,+Tamil+Nadu+632014/@12.9710279,79.1613698,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad47a28d145d6f:0xd1465a973c93afe3!8m2!3d12.9710227!4d79.1639447!16s%2Fg%2F11c3q3j7vt?entry=ttu"
            className="btn btn2"
            style={{ textDecoration: "none" }}
          >
            Visit Us
          </a>
        </div>
        <div
          className="home-content-below-title2"
          style={{ fontSize: "2vh", color: "#b3b0ca", fontFamily: "poppins" }}
        >
          *Request will be Queued
        </div>
      </div>
      <div className="company">
        <p className="p2">
          Helped People to get into{" "}
          <span style={{ color: "#2234da" }}> 100 + </span>Great Companies
          Worldwide
        </p>
        <div className="block-companies">
          <div className="comapanies">Lyra</div>{" "}
          <span className="slash" style={{ color: "#2234da" }}>
            |
          </span>
          <div className="comapanies">CM Securities</div>
          <span className="slash" style={{ color: "#2234da" }}>
            |
          </span>
          <div className="comapanies">Balaji Tanks & Vessels</div>
          <span className="slash" style={{ color: "#2234da" }}>
            |
          </span>
          <div className="comapanies">SBI</div>
          <span className="slash" style={{ color: "#2234da" }}>
            |
          </span>
          <div className="comapanies">Status Airvision</div>
        </div>
      </div>
      <div className="section1" style={{ position: "relative" }}>
        <img
          className="pie"
          src={pie}
          alt=""
          style={{ position: "absolute", left: "-60px", opacity: "55%" }}
        />
        <img
          className="pie2"
          src={pie2}
          alt=""
          style={{ position: "absolute", opacity: "55%", zIndex: "1" }}
        />

        <p className="section-title">
          Unlock Your Potential. Excel in Your Career <br />
          Journey with Inclusive Employment!
        </p>
        <p className="subheading">
          Discover Your Path. Navigate Your Career Journey with Confidence.
          Personalized Job Matching.
        </p>
        <p className="subheading" id="2" style={{ marginTop: "-15px" }}>
          Empowering Solutions. Accessibility Advocacy. Inclusive Employment
          Opportunities.
        </p>

        <div
          className="box-container"
          style={{ zIndex: "2", fontFamily: "poppins" }}
        >
          <div className="boxes-line" id="b1">
            <div className="box" style={{ backgroundColor: "#2c4c4b" }}>
              <FaDollarSign style={{ color: "#50c5a3" }} />
            </div>
            <span className="lowerhead" style={{ color: "white" }}>
              Easy Money
            </span>
            <div className="subheading">
              <p>
                Disability Inclusive Employment Solutions - Consulting and
                Compliance Services
              </p>
            </div>
          </div>
          <div className="boxes-line" id="b2">
            <div className="box" style={{ backgroundColor: "#4f2e4d" }}>
              <HiOutlineReceiptTax style={{ color: "#fa3daf" }} />
            </div>
            <span className="lowerhead" style={{ color: "white" }}>
              Employment{" "}
            </span>
            <div className="subheading">
              <p>
                Comprehensive services in accessible employment planning,
                recruitment, and advisory for diverse abilities.
              </p>
            </div>
          </div>
          <div className="boxes-line" id="b3">
            <div className="box" style={{ backgroundColor: "#4e483c" }}>
              <GoLaw style={{ color: "yellow" }} />
            </div>
            <span className="lowerhead" style={{ color: "white" }}>
              Legal Assistance
            </span>
            <div className="subheading">
              <p>
                Providing legal consultation and compliance services with a
                focus on accessibility and inclusivity in law practice.
              </p>
            </div>
          </div>
          <div className="boxes-line" id="b4">
            <div className="box" style={{ backgroundColor: "#1c495c" }}>
              <CiCalendar style={{ color: "#04a8e1" }} />
            </div>
            <span className="lowerhead" style={{ color: "white" }}>
              Effortless Interview
            </span>
            <div className="subheading">
              <p>
                Simplify your scheduling with user-friendly and accessible
                appointment booking solutions.
              </p>
            </div>
          </div>
        </div>

        <a
          href=""
          className="btn3 "
          style={{ textDecoration: "none" }}
        >
          Join Us Now
        </a>
      </div>
      
      <div className="description-container" style={{ position: "relative" }}>
        <img
          id="star"
          className="image200"
          src={star1}
          alt=""
          style={{ position: "absolute", opacity: "20%" }}
        />
        <img
          id="arrow"
          className="image200"
          src={arrow3}
          alt=""
          style={{ position: "absolute", opacity: "20%" }}
        />

        <div className="description" id="d1">
          <div className="description-title">
            Simplify Your <br />
            Job Search with <br />
            Advanced Filters
            <div className="subheading" id="description-heading">
              Find your ideal job effortlessly using our advanced filters.
              Customize your search based on your preferences, skills, and
              accessibility requirements.
            </div>
          </div>
          <img className="image1" src={invoice} alt="" />
        </div>
        <div className="description" id="d2">
          <img className="image1" src={management} alt="" />
          <div className="description-title">
            Accessible Work <br />places 
            For Everyone
            <div className="subheading" id="description-heading">
              Explore job opportunities in companies committed to creating
              accessible and inclusive workplaces for individuals with
              disabilities. Your career journey starts with us!
            </div>
          </div>
        </div>
        <div className="description" id="d3">
          <div className="description-title">
            Personalized Career <br />
            Guidance and Support
            <div className="subheading" id="description-heading">
              Receive personalized career guidance and support from experts who
              understand the unique challenges and strengths of disabled
              professionals. We're here to empower your career growth.
            </div>
          </div>
          <img id="image3" src={accounting} alt="" />
        </div>
      </div>
      <Testimonials />
      <div
        className="section1"
        id="s2"
        style={{
          marginTop: "0",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="section-title">Frequently Asked Questions !</div>
        <img
          src={arrow}
          alt=""
          className="four"
          style={{
            position: "absolute",
            top: "30px",
            right: "-70px",
            opacity: "25%",
          }}
        />
        <img
          src={vector2}
          alt=""
          className="four"
          style={{
            position: "absolute",
            bottom: "30px",
            left: "100px",
            opacity: "25%",
          }}
        />

        <div
          className="questions"
          style={{ color: click1 ? "white" : "#b6d6fc" }}
        >
          <h5
            onClick={() => {
              Setclick1(!click1);
            }}
          >
            {" "}
            What specialized services do you offer for job seekers with
            disabilities?{" "}
            <span style={{ fontWeight: "bolder", fontSize: "4.5vh" }}>
              {click1 ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
            </span>
          </h5>
          <p
            style={{
              opacity: click1 ? 0 : 1,
              height: click1 ? 0 : "auto",
              overflow: "hidden",
              fontFamily: "poppins",
              color: "#82888d",
              transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
            }}
          >
            We understand the unique needs of job seekers with disabilities and
            provide specialized services. Our platform offers advanced filters
            to help you find jobs that match your accessibility requirements.
            Additionally, we collaborate with inclusive employers to create
            accessible workplaces for everyone.
          </p>
        </div>
        <span className="dots" style={{ color: "#82888d" }}>
          ....................................................................................................................................................
        </span>
        <div
          className="questions"
          style={{ color: click2 ? "white" : "#b6d6fc" }}
        >
          <h5
            onClick={() => {
              Setclick2(!click2);
            }}
          >
            {" "}
            How can my organization benefit from using your job portal for
            disabled employees?{" "}
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "4.5vh",
                marginLeft: "2vw",
              }}
            >
              {click2 ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
            </span>
          </h5>
          <p
            style={{
              opacity: click2 ? 0 : 1,
              height: click2 ? 0 : "auto",
              overflow: "hidden",
              fontFamily: "poppins",
              color: "#82888d",
              transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
            }}
          >
            Using our job portal for disabled employees can facilitate inclusive
            hiring practices, ensuring that your organization benefits from a
            diverse and talented workforce. Our platform is designed to
            streamline the recruitment process, making it more accessible and
            accommodating for both employers and job seekers with disabilities.
          </p>
        </div>
        <span className="dots" style={{ color: "#82888d" }}>
          ....................................................................................................................................................
        </span>

        <div
          className="questions"
          style={{ color: click3 ? "white" : "#b6d6fc" }}
        >
          <h5
            onClick={() => {
              Setclick3(!click3);
            }}
          >
            {" "}
            In which industries does your job portal specialize?{" "}
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "4.5vh",
                marginLeft: "2vw",
              }}
            >
              {click3 ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
            </span>
          </h5>
          <p
            style={{
              opacity: click3 ? 0 : 1,
              height: click3 ? 0 : "auto",
              overflow: "hidden",
              color: "#82888d",
              fontFamily: "poppins",
              transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
            }}
          >
            Our job portal specializes in catering to disabled job seekers
            across various industries, ensuring that opportunities are available
            in sectors such as IT, healthcare, retail, and services. We are
            committed to supporting inclusivity in the workplace for individuals
            with diverse abilities.
          </p>
        </div>
        <span className="dots" style={{ color: "#82888d" }}>
          ....................................................................................................................................................
        </span>

        <div
          className="questions"
          style={{ color: click4 ? "white" : "#b6d6fc" }}
        >
          <h5
            onClick={() => {
              Setclick4(!click4);
            }}
          >
            {" "}
            How can organizations get started with your disabled employees' job
            portal?{" "}
            <span
              style={{
                fontWeight: "bolder",
                fontSize: "4.5vh",
                marginLeft: "2vw",
              }}
            >
              {click4 ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
            </span>
          </h5>
          <p
            style={{
              opacity: click4 ? 0 : 1,
              height: click4 ? 0 : "auto",
              color: "#82888d",
              overflow: "hidden",
              fontFamily: "poppins",
              transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
            }}
          >
            Getting started is easy! Organizations can reach out to our team
            through the contact details provided on our portal. We will guide
            you through the onboarding process, helping you tailor your job
            listings and recruitment strategies to create an inclusive and
            accessible hiring environment for disabled individuals.
          </p>
        </div>
      </div>
    </>
  );
}
