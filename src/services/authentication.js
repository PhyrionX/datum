import requestService from "./request";

export function getAuth() {
  return requestService.http.get('http://localhost:8081/api/user');
}

export function users() {
  return requestService.http.get('api/users');
}

export function roles() {
  return requestService.http.get('api/roles');
}

export function projects() {
  return requestService.http.get('api/projects');
}

export function signUp(signUpInfo) {
  return requestService.http.post('http://localhost:8081/api/register', signUpInfo)
}

export function login(loginInfo) {
  return requestService.http.post('http://localhost:8081/api/login', loginInfo)
}

