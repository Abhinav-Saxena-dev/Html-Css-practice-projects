const formvald= ()=>{
    let x= document.forms["myForm"]["fname"].value;
    let y= document.forms["myForm"]['num'].value;
    if(x === ""){
        alert("Fill name nigga type chutiya");
        return false;
    }
    else if(y <1 || y>10){
        alert("Range is 1 to 10 my nigga chutiya");
        return false;
    }
}