import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";
import Link from "next/link";
import { getMeal } from "@/lib/meals";
import { dummyMeals } from "@/initdb";
import Loading from "./loading";

const MealData = async () => {
  const meals = await getMeal();
  return (
    <>
      <MealGrid meals={dummyMeals} />
    </>
  );
};
async function Meals() {
  // console.log("meals", meals);
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
        <Suspense fallback={<Loading />}>
          <MealData />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
