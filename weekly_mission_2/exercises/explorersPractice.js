//Ejrecico 2 de la Weekly Mission 2 de Backend
//Uso de metodos para tratar con arrays y objectos.

const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((explorer) => console.log(explorer.name));
//2. Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((explorer) => console.log(`name: ${explorer.name} stack: ${explorer.stack}`));
//3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const newList = explorers.map((explorer) => explorer.stack);
console.log(newList);
//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const onlyStackJs = explorers.filter((explorer) => explorer.stack.includes("js"));
console.log(onlyStackJs);
//5. Busca el primer explorer que sea de la CDMX, usa FIND
explorers.find((explorer) => console.log(`El ${explorer.name} es chilango? `, explorer.city === "CDMX"));
//6. Obtén la suma de todos los exercises_completed, usa REDUCE
const sum = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0);
console.log("La suma de todos los ejercicios completos son: " + sum);
//7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const validacion = explorers.some((explorer) => explorer.missions.frontend.isFinished === true);
console.log("Algun explorer termino la mission de frontend? " + validacion);
//8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const validacion2 = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true);
console.log("Todos los explorers terminaron la mission de onboarding? " + validacion2);