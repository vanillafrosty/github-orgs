export const fetchOrg = (org) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/orgs/${org}/repos`,
  });
};
