// - Replica el ejercicio completo del vídeo
// - Añade dos párrafos más en cada una de las secciones
// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine

const lists = document.querySelectorAll(".list");
const sections = document.querySelectorAll(".section");

lists.forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    e.dataTransfer.setData("id", e.target.id);
  });

  list.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });
});

sections.forEach((section) => {
  section.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  section.addEventListener("drop", (e) => {
    var data = e.dataTransfer.getData("id");

    if (section.classList.contains("trash")) {
      if (confirm(`Estas seguro de borrar la data ${data}`)) {
        section.appendChild(document.getElementById(data));
        e.dataTransfer.clearData();
        section.removeChild(document.getElementById(data));
        console.log("Eliminado");
      } else {
        console.log("cancelado");
      }
    } else {
      section.appendChild(document.getElementById(data));
      e.dataTransfer.clearData();
    }
  });
});
