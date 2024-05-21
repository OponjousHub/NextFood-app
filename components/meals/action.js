"use server";

import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export const GetMealData = async (formData) => {
  const mealData = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    // creator: formData.get('creator'),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  await saveMeal(mealData);
  redirect("/meals");
};
