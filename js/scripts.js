//business logic
var score=function(q1,q2,q3,q4,q5){
  return (q1 + q2 + q3 + q4 + q5);
}

var section1=function(name1, name2, number, email){
  return (name1+name2+number+email);
}

//User interface logic
$(document).ready(function(){
  $("#check").click(function(event){
    event.preventDefault();
    var name1=parseInt($(name1).val());
    var name2=parseInt($(name2).val());
    var number=parseInt($(number).val());
    var email=parseInt($(email).val());
    var confirm=section1(name1,name2,number,email);
    var confirm=20;

    if (confirm!=20){
      alert("Please ensure you fill all the required fields");
    }
    else{
      alert("Proceed to section Two")
    }
  })


})
$(document).ready(function() {
  $("#sub").click(function(event) {
    var q1 = parseInt($("input:radio[name=one]:checked").val());
    var q2 = parseInt($("input:radio[name=two]:checked").val());
    var q3 = parseInt($("input:radio[name=three]:checked").val());
    var q4 = parseInt($("input:radio[name=four]:checked").val());
    var q5 = parseInt($("input:radio[name=five]:checked").val());
    event.preventDefault();
    var total = score(q1,q2,q3,q4,q5);

    if(total>=80){
      results.innerHTML=total;
    }

    else if(total<=79&&total>=70){
      results.innerHTML=("Great job! Your score is "+ total);
    }

    else if(total<=70&&total>=50){
      console.log("Above average! Your score is "+ total)
    }

    else {
      console.log("Stop joking! Your score is "+ total)
    };


  });
})
