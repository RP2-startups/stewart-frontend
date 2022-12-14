import http from "../http-common";

class ProjectDataService {

  create(data: FormData){
    return http.post("/project", data);
  }

  search(input: string) {
    return http.get(`/projects?search_term=${input}`,);
  }

  searchAll() {
    return http.get("/allprojects");
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

  acceptRequest(data: {}) {
    return http.post("/projectParticipation/accept-adm", data);
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

  get(id : string) {
    return http.get(`/project/${id}`);
  }
}

export default new ProjectDataService();
