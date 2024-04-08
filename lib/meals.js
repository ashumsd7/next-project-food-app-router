import sql from "better-sqlite3";

const dp = sql("meals.db");

export async function getMeal() {
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 3000);
  });
  return dp.prepare("SELECT * FROM meals").all();
}
