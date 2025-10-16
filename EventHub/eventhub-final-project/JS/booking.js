(function () {
  emailjs.init("PtKvilS8-kHGshYTR");
})();
document
  .getElementById("booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs
      .sendForm("service_s4t9tmw", "template_jyuhmlb", this)
      .then(() => alert("Booking request sent!"))
      .catch((err) => alert("Failed: " + JSON.stringify(err)));
  });
