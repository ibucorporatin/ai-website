import React from "react";
import "../../assets/css/get-start-today.css";
import Button from "../smallComponents/Button/Button";
import { Link } from "gatsby";

const GetStartToday = () => {
  return (
    <div className="get-start-today-container d-flex align-items-center justify-content-center flex-column text-center ">
      <h2>Get started today</h2>
      <p>
        Try out mParticle and see how to integrate and orchestrate customer data
        the right way for your business.
      </p>
      <div>
        <Button name="Sign up" />
        <Button name="Contact us" />
      </div>
      <p>
        Startups can now receive up to one year of complimentary access to
        mParticle.{" "}
        <Link to="https://www.mparticle.com/lpg/accelerator/">
          Receive access
        </Link>
      </p>
    </div>
  );
};

export default GetStartToday;
