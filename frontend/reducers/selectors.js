//receive array of objects and return array of objects with less keys
export const filterRepos = (repos) => {
  let out = [];
  let repo, filteredRepo;
  for (let i=0; i<repos.length; i++) {
    repo = repos[i];
    filteredRepo = {
      name: repo.name,
      full_name: repo.full_name,
      forks_count: repo.forks_count,
      stargazers_count: repo.stargazers_count
    };
    out.push(filteredRepo);
  }
  return out;
}
