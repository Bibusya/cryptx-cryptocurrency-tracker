import React from "react";
import classes from "./styles/Title.module.css";

const Title = () => {
  const scrollHandler = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 900, behavior: "smooth" });
  };
  return (
    <>
      <section className={classes.card}>
        <div className={classes.title}>
          <h1>
            CRYPT<span>X</span>
            <br />
            <br /> Cryptocurrency Tracker
          </h1>
          <div className={classes["mouse_scroll"]}>
            <div className={classes.mouse}>
              <div className={classes.wheel}></div>
            </div>
            <div>
              <span className={classes["m_scroll_arrows" + "unu"]}></span>
              <span
                className={`${classes["m_scroll_arrows"]} ${classes["doi"]}`}
              ></span>
              <span
                className={`${classes["m_scroll_arrows"]} ${classes["trei"]}`}
              ></span>
            </div>
          </div>
        </div>
      </section>

      {/* <a
          onClick={scrollHandler}
          href="#"
          className={classes["scroll-down"]}
          address="true"
        ></a> */}
    </>
  );
};

export default Title;
