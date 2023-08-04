# Expense tracker

An expense tracker application that uses mu-project and ember-js. You can add, edit and remove expenses and their categories. Additionally you can filter by all/year/month and gain insights into that period with some stats and charts. Frontend can be found in [this repository](https://github.com/wolfderechter/expense-tracker-frontend).

## Installation

* `git clone https://github.com/wolfderechter/expense-tracker`

## Development

1. `git clone https://github.com/wolfderechter/expense-tracker-frontend` in the same parent folder
2. `cd expense-tracker-frontend && npm install`
3. `cd ../expense-tracker`
4. `docker compose -f docker-compose.yml up`
5. Visit `localhost:4200`

## Production deployment

1. `cd expense-tracker`
2. `docker compose -f docker-compose.prod.yml up`
3. Visit `localhost:4200`

## SPARQL queriesapplication

Playground available at `http://localhost:8890/sparql` during development. Default graph can be empty or `http://mu.semte.ch/graphs/public`.

Example query:

```sparql
PREFIX schema: <http://schema.org/>
SELECT * WHERE {
  GRAPH <http://mu.semte.ch/graphs/public> {
  ?s a schema:Expense.
}
}
```
