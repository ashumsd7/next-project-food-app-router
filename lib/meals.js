import sql from "better-sqlite3";

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
  return dp.prepare("SELECT * FROM meals").all();
}
