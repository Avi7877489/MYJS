// let counter = (function () {
//     let count = 0;
//     return function () {
//       count++;
//       console.log(count);
//     };
//   })();
//   counter();
//   counter();
//   counter();
  

  function counter(){
    let count = 0
    return {
        increment: function(){
            count++
            return count
        },
        decrimint: function(){
            count--
            return count
        }
    }
  }
  let countersetup = counter()
  console.log(countersetup.increment())
  console.log(countersetup.increment())
  console.log(countersetup.increment())
  console.log(countersetup.increment())
  console.log(countersetup.decrimint())