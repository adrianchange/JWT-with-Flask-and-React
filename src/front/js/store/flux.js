const getState = ({ getStore, getActions, setStore }) => {
  const URL =
    "https://3001-4geeksacade-reactflaskh-0m9j0kmpwz7.ws-eu63.gitpod.io";
  return {
    store: {
      token: localStorage.getItem("token"),
    },
    actions: {
      signup: (email, pass) => {
        fetch(URL + "/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: pass }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },

      login: (email, pass) => {
        const store = getStore();
        fetch(URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: pass }),
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ token: data });
            sessionStorage.setItem("token", JSON.stringify(data));
          })
          .catch((err) => console.log(err));
      },

      private: () => {
        const store = getStore();
        fetch(URL + "api/private", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        })
          .then((response) => response.json())
          .then(() => console.log(store.token))
          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;
