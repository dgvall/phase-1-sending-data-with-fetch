// Add your code here

function submitData(nameString, emailString) {
  return fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: nameString,
      email: emailString,
  })
  })
  .then(res => res.json())
  .then(data => document.querySelector("body").append(data.id))
  .catch(error => document.querySelector("body").append(`${error} User Could Not Be Created. Please try again.`))
}
submitData(`Diego`, `diego@gmail.com`)
