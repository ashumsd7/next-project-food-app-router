import React from "react";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";
import Link from "next/link";
import { getMeal } from "@/lib/meals";
import { dummyMeals } from "@/initdb";
async function Meals() {
  const meals = await getMeal();
  console.log("meals", meals);
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
          <Link href="/meals/share">Share your favrt meals</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealGrid meals={meals} />
      </main>
    </>
  );
}

export default Meals;
