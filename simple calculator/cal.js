
function getValue(firstNumber, secondNumber){
    x = document.getElementById("firstNumber").value;
    y = document.getElementById("secondNumber").value;
    }
    function add() {
    getValue();
    ans=Number(x)+Number(y);
    document.getElementById("result").innerHTML ="Result<br>"+x+" + "+y+" = "+ans;
    }
    