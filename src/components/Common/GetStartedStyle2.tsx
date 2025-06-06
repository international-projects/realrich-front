"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const GetStartedStyle2: React.FC = () => {
  return (
    <>
      <div className="get-started-area bg-main-color pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="get-started-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/woman2.png"
                  alt="image"
                  width={480}
                  height={600}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="get-started-content white-color">
                <span className="sub-title">READY TO STARTED?</span>
                <h2>
                  Let&apos;s Talk Something <br />
                  Amazing Together
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedStyle2;
