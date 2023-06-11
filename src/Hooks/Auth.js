export default function Auth() {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  if (user && token) {
    return { user: JSON.parse(user), token };
  }
  return false;
}
