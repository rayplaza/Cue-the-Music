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

export function update(proj) {
  return fetch(`${BASE_URL}/${proj._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(proj)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
}
