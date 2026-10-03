const events = [
  "Nuevo usuario registrado",
  "Pedido #1042 completado",
  "Producto actualizado",
  "Nuevo comentario recibido"
];
const list = document.querySelector("#activity");
events.forEach((event, i) => {
  const li = document.createElement("li");
  li.textContent = `${event} — hace ${i + 1} h`;
  li.style.padding = "12px 0";
  list.appendChild(li);
});
