// validation script here
const patterns = {
  telephone: /^(63|0)9\d{9}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,12}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^.+@[\w-]+\.[a-z]{2,15}([\.a-z]{2,15})?$/,
};

const inputs = document.querySelectorAll("input");

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    console.log(patterns[e.target.attributes.name.value]);

    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

const input = document.getElementById("singleInput");

input.addEventListener("keyup", (e) => {
  console.log("Event Target:", e.target); // Logs the input element
  console.log("Input Value:", e.target.value); // Logs the current value of the input
});
