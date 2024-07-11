let operater = "";
let firstnumber = "";
let secondnumber = "";

function operator(op){
    operater=op;
}
function clearresult(){
    operater="";
    firstnumber="";
    secondnumber="";
    document.getElementById('result').value="";
}
function append(num){
    if(operater==""){
        firstnumber+=num;
        document.getElementById('result').value=firstnumber;
    }
    else{
        secondnumber+=num;
        document.getElementById('result').value=secondnumber;
    }
}
function result(){
    let res="";
    switch(operater){
        case '+':
            res=parseInt(firstnumber)+parseInt(secondnumber);
            break;
        case '-':
            res=parseInt(firstnumber)-parseInt(secondnumber);
            break;
        case '*':
            res=parseInt(firstnumber)*parseInt(secondnumber);
            break;
        case '/':
            res=parseInt(firstnumber)/parseInt(secondnumber);
            break;                
    }
    document.getElementById('result').value=res;
}