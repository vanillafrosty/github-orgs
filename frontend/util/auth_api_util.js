export const fetchToken = () => {
  return $.ajax({
    method: 'GET',
    url: "https://github.com/login/oauth/authorize",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
};
