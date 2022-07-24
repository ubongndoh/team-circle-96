import num from './data.mjs'

function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here
  // pls remove the below and make some magic in here!


  //
  console.log('make magic in here!');
  const message = document.querySelector('.message');



  // form.onsubmit = function(e) {
  //   e.preventDefault();
  //var input_value = document.form.PhoneNumber.value;
  const input = document.getElementById("number");
  //console.log(input);
  input.addEventListener('keyup', checkCarrier)
  function checkCarrier(e) {
    let x = e.target.value;
    //console.log(x)
    // 
    if (x.startsWith('+234')) {
      x = x.replace('+234', '0')
    }
    for (let item of Object.keys(num)) {
      //console.log(num)
      if (x.startsWith(item)) {
        message.innerHTML = `<img src=${num[item]} alt='logo'>`;

      }

    }

  }


  // }


  const header = document.querySelector('h2');
  if (header) {
    header.textContent = 'make some magic here!!';
  }
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //