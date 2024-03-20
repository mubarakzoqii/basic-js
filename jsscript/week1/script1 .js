function getGrade(marks) {
    let grade;
  
    switch (true) {
      case marks >= 90:
        grade = "A";
        break;
      case marks >= 80:
        grade = "B";
        break;
      case marks >= 70:
        grade = "C";
        break;
      default:
        grade = "sorry you're fail try again next time";
    }
  
    return grade;
  }
  console.log(getGrade(95));
  
  console.log(getGrade(85));
  
  console.log(getGrade(75));
  
  console.log(getGrade(60));
  
  console.log(getGrade(69));
  
  //function
  
  function stdGrades(marks) {
    if (marks >= 80 && marks <= 90) {
      return "A+";
    } else if (marks > 70 && marks <= 79) {
      return "A";
    } else if (marks > 60 && marks <= 69) {
      return "B";
    } else {
      console.log("sorry you're fail!");
    }
  }
  
  console.log(stdGrades(35));
  console.log(stdGrades(85));
  console.log(stdGrades(75));
  console.log(stdGrades(65));

  //Anonymous function:

  let anonfunction = function

}

   // Arrow functions:

   function  = () => {

   }

   // function scope and block scope

   function functionScope() {

      var name = "aku";
      console.log("my name is zoqi ");

      if(true) {
        var last-name = "mubarak"
        console.log("my last anme is" , last name);
      }
   }

   functionScope()

   function blockScope(){
       let name ="ali";
       console.log(name1);

       if (true) {
        let name2= "umar" ;
        console.log(name) ;
       }
       console.log (name1, name2) ;


   }

   blockScope()
  