//business logic
var score=function(q1,q2,q3,q4,q5){
  return (q1 + q2 + q3 + q4 + q5);
}

//User interface logic
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
