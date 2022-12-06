import http from "../http-common";

class ProjectDataService {

  create(data: FormData){
    return http.post("/projects", data);
  }

  search(input: string) {
    return http.get(`/projets?search_term=${input}`,)
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
}

export default new ProjectDataService();
