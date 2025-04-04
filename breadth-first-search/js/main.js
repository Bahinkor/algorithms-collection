const isPersonSeller = (name) => name.endsWith("m");

const bfsSearch = (name) => {
  let searchQueue = [...graph[name]];
  let searched = new Set();

  while (searchQueue.length) {
    let person = searchQueue.shift();
    if (!searched.has(person)) {
      if (isPersonSeller(person)) {
        console.log(person + " is a mango seller!");
        return true;
      } else {
        searchQueue.push(...(graph[person] || []));
        searched.add(person);
      }
    }
  }
  return false;
};

const graph = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

bfsSearch("you");
