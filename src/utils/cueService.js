import tokenService from "./tokenService";

const BASE_URL = "/api/cues";

function create(cueData) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(cueData)
    }).then(res => res.json());
}

export default {
    create,
}