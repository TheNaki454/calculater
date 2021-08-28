function insert(num){
    document.form.symbol.value = 
    document.form.symbol.value + num;
}
function clean(){
    document.form.symbol.value = '';
}
function back(){
    var exp = document.form.symbol.value;
    document.form.symbol.value = exp.substring(0,exp.length-1);
}
function equal(){
    var exp = document.form.symbol.value;
    if(exp){
        document.form.symbol.value = eval(exp);
    }
}