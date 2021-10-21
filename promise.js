console.dir(Promise);

let condition = 1;

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    condition ? resolve(condition) : reject(condition);
  }, 1000);
});

console.log(newPromise);

newPromise
  .then((firstThen) => {
    console.log("firstThen: ", firstThen);
    return firstThen + 1;
  })
  .then((secondThen) => {
    console.log("secondThen: ", secondThen);
    return secondThen + 2;
  })
  .then((thirdThen) => console.log("thirdThen: ", thirdThen))
  .catch((error) => console.log("catch: ", error))
  .finally(() => console.log("Ты молодец в любом наборе"));

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 0);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 500);
});

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 1000);
});

Promise.all([prom1, prom2, prom3])
  .then((ok) => {
    console.log("ok:", ok);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.race([prom1, prom2, prom3])
  .then((ok) => {
    console.log("ok:", ok);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.resolve(1);
//Promise.reject(0);
//Promise.finally();
condition = 1;
function mainProm() {
  return condition ? Promise.resolve("ok") : Promise.reject("ne ok");
}

const result = mainProm();
result
  .then((fffok) => {
    console.log(`ssssdsdsd ${fffok}`);
  })
  .catch((error) => {
    console.log(error);
  });
//console.log(result);
