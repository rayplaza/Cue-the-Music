import tokenService from "./tokenService";

const BASE_URL = "/api/projects";

export function getAll() {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(proj) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(proj)
  }).then(res => res.json());
}
