import { proxy, subscribe } from "valtio";

const userStore = proxy(
  JSON.parse(localStorage.getItem('user')!) || { user: {} }
);

subscribe(userStore, () => {
  localStorage.setItem('user', JSON.stringify(userStore));
});

export default userStore;