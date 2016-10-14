import axios from 'axios';

let getRepos = (username) => axios.get(`https://api.github.com/users/${username}/repos`);

let getUserInfo = (username) => axios.get(`https://api.github.com/users/${username}`);

let helpers = {
  getGithubInfo: (username) => axios.all([getRepos(username), getUserInfo(username)])
    .then((arr) => {
      return {
        repos: arr[0].data,
        bio: arr[1].data
      };
    })
};

export default helpers;
