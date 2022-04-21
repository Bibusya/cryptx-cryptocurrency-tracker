import React from "react";
import classes from "./Title.module.css";

const Title = () => {
  // const scrollHandler = (e) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 900, behavior: "smooth" });
  // };
  return (
    <>
      <section className={classes.card}>
        <h1>
          CRYPTX <br />
          <br /> Cryptocurrency Tracker
        </h1>
        <a
          // onClick={scrollHandler}
          href="#"
          className={classes["scroll-down"]}
          address="true"
        ></a>
      </section>
    </>
  );
};

export default Title;
