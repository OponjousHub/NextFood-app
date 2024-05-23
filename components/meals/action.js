"use server";

import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const GetMealData = async (prevState, formData) => {
  const isInvalidInput = (text) => {
    return !text || text.trim() === "";
  };
  const mealData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("names"),
    creator_email: formData.get("email"),
    // creator: formData.get('creator'),
  };

  if (
    isInvalidInput(mealData.title) ||
    isInvalidInput(mealData.summary) ||
    isInvalidInput(mealData.instructions) ||
    isInvalidInput(mealData.creator) ||
    isInvalidInput(mealData.creator_email) ||
    !mealData.creator_email.includes("@") ||
    !mealData.image ||
    mealData.image.size === 0
  ) {
    return { message: "Please fill all inputs" };
  }
  await saveMeal(mealData);
  revalidatePath("/meals");
  redirect("/meals");
};
