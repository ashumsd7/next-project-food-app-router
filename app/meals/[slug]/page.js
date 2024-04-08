import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
const MealDetails = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>Title</h1>
          <p className={classes.creator}>
            by <a href={`mail:${}`}>Name</a>
          </p>
          <p className={classes.summary}>Summary</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions}
         dangerouslySetInnerHTML={{
          __html: "....."
         }}
        >

        </p>
      </main>
    </>
  );
};

export default MealDetails;
