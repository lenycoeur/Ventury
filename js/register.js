/*---- REGISTER SCRIPT ----*/
document.getElementById("register").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // save data
    localStorage.setItem(
      "formData",
      JSON.stringify({ email, password })
    );

    const storedFormData = JSON.parse(localStorage.getItem("formData"));

    alert("well done");
    window.location.href = "index.html";
  });
