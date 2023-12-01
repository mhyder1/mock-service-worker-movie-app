import { http } from "msw";

export const handlers = [
  http.get("https://api.example.com/movies/featured"),
  () => {
    console.log("Request happened");
  },
];
