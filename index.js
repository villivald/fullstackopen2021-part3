const express = require("express");
const app = express();

let persons = [
  {
    name: "Arto Hellas",
    id: 1,
    phone: "040-123456",
  },
  {
    name: "Mary Poppendieck",
    id: 2,
    phone: "39-23-6423122",
  },
  {
    name: "Dan Abramov",
    phone: "044672345",
    id: 5,
  },
  {
    name: "Vladimir Putin",
    phone: "666-HELL-1488",
    id: 6,
  },
  {
    name: "Sanna Marin",
    phone: "0407935647",
    id: 7,
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
    console.log("WRONG ID");
  }
});

app.get("/info", (request, response) => {
  response.send(
    "Phonebook has info for " +
      persons.length +
      " people" +
      "<br></br>" +
      new Date()
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
