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
    var name1=$("#name1").val();
    var name2=$("#name2").val();
    var number=$("#number").val();
    var email=$("#email").val();
    var confirm=section1(name1,name2,number,email);

    if (confirm==section1){
      alert("Please ensure you fill all the required fields");
    }
    else{
      $("#section1").hide();
      $("#section2").show();
      // alert("Proceed to section Two"
    }
  })
})

//section 2

$(document).ready(function() {
  $("input#check").click(function(){
      $("#sub").click(function(event) {
        event.preventDefault();
        var q1 = parseInt($("input:radio[name=one]:checked").val());
        var q2 = parseInt($("input:radio[name=two]:checked").val());
        var q3 = parseInt($("input:radio[name=three]:checked").val());
        var q4 = parseInt($("input:radio[name=four]:checked").val());
        var q5 = parseInt($("input:radio[name=five]:checked").val());
        var total = score(q1,q2,q3,q4,q5);

        if(total>=80){
          $("#section1").hide();
          $("#section2").hide();
          $("#result").show();
          results.innerHTML=("Wonderful! Your Score is "+total);
        }

        else if(total<=79&&total>=70){
          $("#section2").hide();
          $("#result").show();

          results.innerHTML=("Great job! Your Score is "+ total);
        }

        else if(total<=70&&total>=50){
          $("#section2").hide();
          $("#result").show();
          results.innerHTML=("Above average! Your Score is "+ total);
        }

        else {
          $("#section2").hide();
          $("#result").show();
          results.innerHTML=("Stop joking! Your Score is "+ total)
        };
      });
  })
  $("#result").click(function(){
    $("#section1").show();
  })
});
