"use server";
export const GetMealData = async (formData) => {
  const mealData = {
    name: formData.get("name"),
    email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instuction: formData.get("instuction"),
    image: formData.get("image"),
  };

  console.log(mealData);
};
