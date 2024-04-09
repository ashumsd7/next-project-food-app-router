"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    image:
      formData.get("image") ??
      "https://cdn.pixabay.com/photo/2024/02/15/09/30/schnitzel-8575034_1280.png",
    creator: formData.get("name"),
    instructions: formData.get("instructions"),
    creator_email: formData.get("email"),
  };
  console.log("meal", meal);
  await saveMeal(meal);
  redirect("/meals");
}
