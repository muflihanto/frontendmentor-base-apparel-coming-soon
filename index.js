const init = () => {
  const form = document.getElementsByTagName("form")[0];
  const label = document.getElementsByClassName("label-email")[0];
  const email = document.getElementById("email");

  const cleanup = () => {
    if (label.classList.contains("error")) {
      label.classList.remove("empty");
      label.classList.remove("error");
    }
  };

  const emailValidation = () => {
    cleanup();
    if (email.value === "") {
      label.classList.add("error");
      label.classList.add("empty");
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value)) {
      label.classList.add("error");
    } else {
      Swal.fire("Thank You!", "You've been added to our mailing list and will now be among the first to hear about new arrivals, big events and special offers.", "success");
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailValidation();
    email.addEventListener("keyup", cleanup, { once: true });
  });
};
init();
