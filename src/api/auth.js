export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  // save user in db & get token
  fetch(`http://localhost:5000/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // save token in LocalStorage
      localStorage.setItem("aircnc-token", data.token);
    });
};
