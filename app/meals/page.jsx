import React from "react";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";
import Link from "next/link";
function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecisous Meals, created{" "}
          <span className={classes.highlight}> by you</span>{" "}
        </h1>
        <p>
          Choose your favroite receipe and cook it yourself, it is easy to do.
        </p>
        <p className={classes.cta}>
          <Link href="/maeals/share">Share your favrt meals</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealGrid meals={[]} />
      </main>
    </>
  );
}

export default Meals;
