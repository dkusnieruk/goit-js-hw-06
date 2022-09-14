const solutionForm = document.querySelector(`form`);


solutionForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Uzupełnij wszystkie pola , kolego !");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  console.log({email : email.value,   password: password.value });

  event.currentTarget.reset();
}

// console.log(solutionForm);