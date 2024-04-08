import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getOneMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
const MealDetails = ({ params }) => {
  const { slug } = params;

  const meal = getOneMeal(slug);
  console.log("meal", meal);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            className={classes.image}
            src={meal.image}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mail:${meal?.email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetails;
