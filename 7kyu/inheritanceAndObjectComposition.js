/* Preloaded is a function person:

function person(firstName, lastName, age, gender, employed, occupation, married) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    employed: employed,
    occupation: occupation,
    married: married,
    sayName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduce: function () {
      return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`;
    }
  };
}

Define a function constructionWorker which "inherits" from the person function as demonstrated in the Overview and accepts the following parameters in the following order: firstName, lastName, age, gender, married, boss. The keys of the object returned should be identical to the name of the parameters mentioned above. Apart from that, a construction worker is always employed so employed should be set to true. Their occupation is also naturally a "construction worker".

On top of all that, a constructionWorker should have a method sayBossName which returns a string of the following format: "My boss is called BOSS_NAME and is a very nice person!" where BOSS_NAME is the name of the boss of said construction worker. */

//* My solution:
function constructionWorker(firstName, lastName, age, gender, married, boss) {
  let worker = person(firstName, lastName, age, gender, married, boss);

  worker.firstName = firstName;
  worker.lastName = lastName;
  worker.age = age;
  worker.gender = gender;
  worker.married = married;
  worker.boss = boss;
  worker.employed = true;
  worker.occupation = "construction worker";
  worker.sayBossName = function () {
    return `My boss is called ${worker.boss} and is a very nice person!`;
  };

  return worker;
}
