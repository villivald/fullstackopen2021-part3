const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("tiny"));

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

// GET ALL PERSONS
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

// DELETE A PERSON
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

// GET A SINGLE PERSON
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

// GENERATE ID
const generatedId = () => {
  return Math.floor(Math.random() * 1000000) + persons.length;
};

// POST A NEW PERSON
app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "Name is missing",
    });
  } else if (persons.some((e) => e.name === body.name)) {
    return response.status(400).json({
      error: "Name must be unique",
    });
  }

  const person = {
    name: body.name,
    phone: body.phone,
    id: generatedId(),
  };

  persons = persons.concat(person);
  response.json(person);
});

// INFO PAGE
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
