import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "us-east-1",
});

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meal fails!");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(mealData) {
  mealData.slug = slugify(mealData.title, { lower: true });
  mealData.instructions = xss(mealData.instructions);

  const extention = mealData.image.name.split(".").pop();
  const filename = `${mealData.slug}.${extention}`;

  // const stream = fs.createWriteStream(`public/images/${filename}`);

  const bufferediImage = await mealData.image.arrayBuffer();

  s3.putObject({
    Bucket: "oponjous-nest-image-bucket",
    Key: filename,
    Body: Buffer.from(bufferediImage),
    ContentType: mealData.image.type,
  });

  // stream.write(Buffer.from(bufferediImage), (error) => {
  //   if (error) {
  //     throw new Error("Could not save the image!");
  //   }
  // });
  mealData.image = `${filename}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) 
    VALUES ( 
      @title, 
      @summary, 
      @instructions, 
      @creator, 
      @creator_email,
      @image, 
      @slug
    )`
  ).run(mealData);
}
