import request from "./index";

export async function getAbout() {
  return await request.get("/api/about");
}
