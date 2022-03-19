const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value == "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  const contacts = {
    email: email.value,
    password: password.value,
  };
  console.log(contacts);

  event.currentTarget.reset();
});
