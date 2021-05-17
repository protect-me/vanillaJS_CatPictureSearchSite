import api from "./api/api.js";

export default class App {
  constructor() {
    const catData = api.fetchCats();
    catData.then((res) => console.log(res));
  }
}
