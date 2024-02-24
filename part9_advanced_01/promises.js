const promise1 = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network calls

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise consumed.");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved.");
});

const Promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

Promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "Omkar", password: "123" });
    } else {
      reject("ERROR. something went wrong.");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected."));

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR. js went wrong.");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getGithubData(){
//     try {
//         const response=await fetch('https://api.github.com/users/shelkeom230')
//         // console.log(response);
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }


// getGithubData()

fetch('https://api.github.com/users/shelkeom230')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))