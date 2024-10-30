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
  

  // function counter(){
  //   let count = 0
  //   return {
  //       increment: function(){
  //           count++
  //           return count
  //       },
  //       decrimint: function(){
  //           count--
  //           return count
  //       }
  //   }
  // }
  // let countersetup = counter()
  // console.log(countersetup.increment())
  // console.log(countersetup.increment())
  // console.log(countersetup.increment())
  // console.log(countersetup.increment())
  // console.log(countersetup.decrimint())


  function createAquize(question,ans){

    let attemptcount = 0

    return function(userAns){
      attemptcount++
      if(userAns == ans){
        return 'Well Done' + 'no Of Attempt done' + attemptcount
      }else{
        return 'wrong ans' + 'no of attempt done' + attemptcount
      }
    }

    

  }

  let quiz1 = createAquize('Where does sun rice', 'east')
  console.log(quiz1('north'))
  console.log(quiz1('east'))

