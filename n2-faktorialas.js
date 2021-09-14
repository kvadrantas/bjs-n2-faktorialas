const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function skaiciausIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(parseInt(data));
    });
  });
}

async function tekstoIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(data);
    });
  });
}

async function main() {
  console.log(`\n\nSKAIČIAUS FAKTORIALO SKAIČIAVIMAS\n`);
  var sk = await skaiciausIvedimas("Įveskite skaičių: ");

  if (sk === 0) {
    console.log(`0! = 1`);
  } else {
    var string = '';
  var faktorialas = 1;

  for (sk; sk > 1; sk--) {
    string += sk + ' x ';
    faktorialas *= sk;
  }
  console.log(string + '1 = ', faktorialas);
  console.log(`\n --------------------------------------- \n`);
  }
  

  rl.close();
}
main();
