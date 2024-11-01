const call1 = (param) => {}; // init function

// callback hell
call1(function (result, error) {
  if (error) {
    //handle error
  }
  call2(result, function (result2, error2) {
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
