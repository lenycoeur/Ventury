/*---- REGISTER SCRIPT ----*/
document
  .getElementById("register")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Enregistrement des données du formulaire dans le localStorage
    localStorage.setItem(
      "formData",
      JSON.stringify({ username, email, password })
    );

    // Redirection après avoir enregistré les données
    alert("well done");
    window.location.href = "index.html";
  });
