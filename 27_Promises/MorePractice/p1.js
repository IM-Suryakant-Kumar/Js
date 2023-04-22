const GITHUB_API = "https://api.github.com/users/sujeet78";

const user = fetch(GITHUB_API);

user
  .then((response) => response.json())
  .then((data) => {})
