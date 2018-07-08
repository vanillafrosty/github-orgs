export const fetchRepos = (org) => {
  return $.ajax({
    method: 'GET',
    url: "api/organizations",
    data: { org: org }
  });
};
