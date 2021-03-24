function increase(clicked_id){
  console.log(clicked_id);
  var str = clicked_id.substring(8,9);
  var number = parseInt(document.getElementById(str).innerHTML);
  document.getElementById(str).innerHTML =parseInt(number + 1);
  if (number+1 >9){
    document.getElementById(str).innerHTML = 0;
  }
}


function decrease(clicked_id){
  console.log(clicked_id);
  var str = clicked_id.substring(8,9);
  var number = parseInt(document.getElementById(str).innerHTML);
  document.getElementById(str).innerHTML =parseInt(number - 1);
  if ((number+1 >9) || (number <1)){
    document.getElementById(str).innerHTML = 0;
  }
}

