(function () {
  emailjs.init("PtKvilS8-kHGshYTR");
})();
document
  .getElementById("contact")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs
      .sendForm("service_s4t9tmw", "template_k2n11mf", this)
      .then(() => alert("Message sent!"))
      .catch((err) => alert("Failed: " + JSON.stringify(err)));
  });
