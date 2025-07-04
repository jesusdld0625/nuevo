const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const personas = [
  { nombre: "Jesus", ciudad: "Barranquilla", edad: 18 },
  { nombre: "Carlos", ciudad: "Bogota", edad: 25 },
  { nombre: "Camilo", ciudad: "Medellin", edad: 17 },
  { nombre: "Juan", ciudad: "Sincelejo", edad: 16 },
  { nombre: "Laura", ciudad: "Cartagena", edad: 15 },
  { nombre: "Jose", ciudad: "Santa Marta", edad: 35 },
  { nombre: "Anderson", ciudad: "Barranquilla", edad: 30 },
];

const root = document.querySelector(".root");

let todos = "";

personas.map((persona) => {
  todos += `
  <div class="card" >
  <h2>${persona.nombre}</h2>
  <p>${persona.ciudad}</p>
  <span class=" ${persona.edad >= 18 ? "bg-cs" : "bg-st"}">${persona.edad}<span/>
  </div>
  `;
});

console.log(todos);

root.innerHTML = todos;
