    
    
    
    
    window.onload = function(){
        var entry = document.getElementById("entry");
        entry.value = "0";
        //Adds functionality for numbers 0-9
        var nine = document.getElementById("9");
        nine.addEventListener("click", function(){
            //if entry = 0 replace zero with number clicked
        if(entry.value == 0){
            entry.value = "";
            entry.value += "9";
        } else {
            entry.value += "9";
        }
        equals.style = "pointer-events: auto;";
        division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
    
        }); 
        var eight = document.getElementById("8");
        eight.addEventListener("click", function(){
                //if entry = 0 replace zero with number clicked

            if(entry.value == 0){
                entry.value = "";
                entry.value = "8";
            } else {
                entry.value += "8";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
            

        });
        var seven = document.getElementById("7");
        seven.addEventListener("click", function(){
            //if entry = 0 replace zero with number clicked            
            if(entry.value == 0){
                entry.value = "";
                entry.value += "7";
            } else {
                entry.value += "7";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
        });
        var six = document.getElementById("6");
        six.addEventListener("click", function(){
            //if entry = 0 replace zero with number clicked
            if(entry.value == 0){
                entry.value = "";
                entry.value += "6";
            } else {
                entry.value += "6";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
        });
        var five = document.getElementById("5");
        five.addEventListener("click", function(){
            //if entry = 0 replace zero with number clicked
            if(entry.value == 0){
                entry.value = "";
                entry.value += "5";
            } else {
                entry.value += "5";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
        });
        var four = document.getElementById("4");
        four.addEventListener("click", function(){
            //if entry = 0 replace zero with number clicked
            if(entry.value == 0){
                entry.value = "";
                entry.value += "4";
            } else {
                entry.value += "4";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
        });
        var three = document.getElementById("3");
        three.addEventListener("click", function(){
            //if entry = 0 replace zero with number clicked
            if(entry.value == 0){
                entry.value = "";
                entry.value += "3";
            } else {
                entry.value += "3";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
        });
        var two = document.getElementById("2");
        two.addEventListener("click", function(){
            //if entry = 0 replace zero with number clicked
            if(entry.value == 0){
                entry.value = "";
                entry.value += "2";
            } else {
                entry.value += "2";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
        });
        var one = document.getElementById("1");
        one.addEventListener("click", function(){
            //if entry = 0 replace zero with number clicked
            if(entry.value == 0){
                entry.value = "";
                entry.value += "1";
            } else {
                entry.value += "1";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
        });
        var zero = document.getElementById("0");
        zero.addEventListener("click", function(){
            //if entry = 0 do nothing
            if(entry.value == 0){
                entry.value = "0";
            } else {
                entry.value += "0";
            }
            equals.style = "pointer-events: auto;";
            division.style = "pointer-events: auto;";
            multiplication.style = "pointer-events: auto;";
            addition.style = "pointer-events: auto;";
            subtraction.style = "pointer-events: auto;";
        });

        //adds functionality for operators + - * \
        var division = document.getElementById("/");
        division.addEventListener("click", function(){
            entry.value += "/";
            equals.style = "pointer-events: none;";
            division.style = "pointer-events: none;";
            multiplication.style = "pointer-events: none;";
            addition.style = "pointer-events: none;";
            subtraction.style = "pointer-events: none;";
         
        });
        var multiplication = document.getElementById("*");
        multiplication.addEventListener("click", function(){
            entry.value += "*";
            equals.style = "pointer-events: none;";
            division.style = "pointer-events: none;";
            multiplication.style = "pointer-events: none;";
            addition.style = "pointer-events: none;";
            subtraction.style = "pointer-events: none;";
       
        });
        var addition = document.getElementById("+");
        addition.addEventListener("click", function(){
            entry.value += "+";
            equals.style = "pointer-events: none;";
            division.style = "pointer-events: none;";
            multiplication.style = "pointer-events: none;";
            addition.style = "pointer-events: none;";
            subtraction.style = "pointer-events: none;";

        
        });
        var subtraction = document.getElementById("-");
        subtraction.addEventListener("click", function(){
            entry.value += "-";
            equals.style = "pointer-events: none;";
            division.style = "pointer-events: none;";
            multiplication.style = "pointer-events: none;";
            addition.style = "pointer-events: none;";
            subtraction.style = "pointer-events: none;";
           
        });
        //adds decimal button functions
        var decimal = document.getElementById(".");
        decimal.addEventListener("click", function(){
            entry.value += ".";
        });
        //adds equal sign functions
        var equals = document.getElementById("=");
        equals.addEventListener("click", function(){
                var answer = eval(entry.value);
                var entryValue = entry.value;
                if(entryValue.charAt(entryValue.length - 1) == "+"){
                    entry.value += 0;  
                }
        //if answer is NaN then output "Undefined"
                if(isNaN(answer)){
                    entry.value = "Undefined";
                } else {
                entry.value = answer;
                console.log(answer);
                }
            
              
                

        });
        //adds clear button functions
        var clear = document.getElementById("clear");
        clear.addEventListener("click", function(){
            entry.value = "0";
        })
        
    }