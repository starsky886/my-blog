import request from "./index";

export async function getProjects() {
  return await request.get("/api/project");
}
