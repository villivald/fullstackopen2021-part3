const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
app.use(express.static("build"));
app.use(cors());
app.use(express.json());
morgan.token("content", (req, res) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :content"
  )
);

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

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
