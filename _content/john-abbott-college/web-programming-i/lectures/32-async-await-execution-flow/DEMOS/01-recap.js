// 👉 callback hell
call1(function (result1, error1) {
  if (error1) {
    //handle error
  }
  call2(result1, function (result2, error2) {
    if (error2) {
      //handle error
    }
    call3(result2, function (result3, error2) {
      if (error3) {
        //handle error
      }
      // do something with result3
    });
  });
});

// 👉 Traditional Promises
call1()
  .then((result1) => call2(result1))
  .then((result2) => call3(result2))
  .then((result3) => {
    // Do something with result3
  })
  .catch((error) => {
    // Handle errors in one place ❤️
  });

// 👉 Modern Promises
async function main() {
  try {
    const result1 = await call1();
    const result2 = await call2(result);
    const result3 = await call3(result2);
    // Do something with result3
  } catch (error) {
    // Handle errors
  }
}

// 👉 Promise ALL
async function main() {
  try {
    const [result1, result2, result3] = await Promise.all([
      call1(),
      call2(),
      call3(),
    ]);
    // Do something with results
  } catch (error) {
    // Handle errors
  }
}
