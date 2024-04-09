import sql from "better-sqlite3";
// var slugify = require("slugify");
// import xss from "xss";
const dp = sql("meals.db");

export async function getMeal() {
  console.log(
    "loading................................................................"
  );
  await new Promise((res) => {
    setTimeout(() => {
      res();
      console.log(
        "Done loading................................................................"
      );
    }, 3000);
  });

  //   throw new Error("hey Something went wrong");
  return dp.prepare("SELECT * FROM meals").all();
}

export function getOneMeal(slug) {
  return dp.prepare("SELECT * FROM meals WHERE slug =?").get(slug);
}

export function saveMeal(meal) {
  console.log("got"), meal;
  //   const slug = slugify(meal.title, { lower: true });
  const slug = meal.title + Math.random().toString();
  //   const instructions = xss(meal.instructions);
  const fileName = slug + ".png";
  meal.image =
    "https://cdn.pixabay.com/photo/2024/02/15/09/30/schnitzel-8575034_1280.png";
  dp.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES 
    (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`
  ).run({
    slug,
    title: meal.title,
    image: meal.image,
    summary: meal.summary,
    instructions: meal.instructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
  });
  return fileName;
}
