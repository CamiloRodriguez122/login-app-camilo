
const formulario = document.getElementById("formLogin");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  mensaje.classList.remove("ok");

  if (usuario === "" || clave === "") {
    mensaje.textContent = "Completa usuario y contraseña.";
    return;
  }

  mensaje.classList.add("ok");
  mensaje.textContent = "Campos válidos. (Demo: no hay autenticación real.)";
});