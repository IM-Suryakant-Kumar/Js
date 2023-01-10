function greet(personName, age, callbacks, callbacks2) {
  let msg = "Hello " + personName;
  let ageOfPerson = age;
  callbacks(msg);
  callbacks2(ageOfPerson);
}

function logGreeting(greeting) {
  console.log(greeting);
}

function showAge(age) {
  console.log(age);
}

greet("steve", 25, logGreeting, showAge);
