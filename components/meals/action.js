"use server";

import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export const GetMealData = async (formData) => {
  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("names"),
    creator_email: formData.get("email"),
    // creator: formData.get('creator'),
  };

  await saveMeal(mealData);
  redirect("/meals");
};
