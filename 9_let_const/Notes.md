* Temporal Dead Zone
* Block Scope
  --> Legal
* Variable Shadowing  |
  --> Illegal
* var/let/const       --> Table

## TABLE

| Keyword | Scope    | Reassign | Redeclare | TDZ(Temporal dead zone) |
| ------- | -------- | -------- | --------- | ----------------------- |
| var     | function | ✔       | ✔        | ❌                      |
| let     | block    | ✔       | ❌        | ✔                      |
| const   | block    | ❌       | ❌        | ✔                     |