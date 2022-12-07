import http from "../http-common";

class ProjectDataService {

  create(data: FormData){
    return http.post("/project", data);
  }

  search(input: string) {
    return http.get(`/projects?search_term=${input}`,)
  }

  invite(project: {}) {
    return http.post("/projectParticipation", project);
  }

  reject(data: {}) {
    return http.post("/projectParticipation/reject", data);
  }

  accept(data: {}) {
    return http.post("/projectParticipation/accept", data);
  }

  participations() {
    return http.get("/projectParticipation");
  }

  getRequestsParticipations() {
    return http.get("/projectParticipation/adm")
  }

  getCategories() {
    return http.get("/projectCategories")
  }
}

export default new ProjectDataService();
