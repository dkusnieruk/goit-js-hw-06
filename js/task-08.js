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

  const solutionOutput = {email : email.value,   password: password.value };

  console.log(solutionOutput);

  event.currentTarget.reset();
}

// console.log(solutionForm);