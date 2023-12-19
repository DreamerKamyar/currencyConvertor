import translate from "google-translate-api-x";
export default async function translator() {
  const res = await translate("Ik spreek Engels", { to: "en" });
  console.log(res.text);
}
translator();
console.log("test");
