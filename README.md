# Expense tracker

uses mu-project and ember-js

1. `git clone git@github.com:wolfderechter/expense-tracker.git`

2. `cd expense-tracker`

3. `docker compose up`

4. `cd frontend`

5. `npm install`

6. `eds --proxy http://host` or alternatively: `ember serve --proxy http://localhost:80/`

7. `go to localhost:4200/expense`

## SPARQL queries

Playground available at `http://localhost:8890/sparql`. Default graph can be empty or `http://mu.semte.ch/application`.

Example query:

```sparql
PREFIX schema: <http://schema.org/>
SELECT * WHERE {
  GRAPH <http://mu.semte.ch/application> {
  ?s a schema:Expense.
}
}
```
