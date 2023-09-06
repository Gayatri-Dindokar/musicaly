dropdownContent = document.querySelector(".dropdown-content");
isvisible = false;
function clickable(){
    isvisible  = !isvisible ;
    if(isvisible ){
        dropdownContent.style.display = "block"
    }
    else{
        dropdownContent.style.display = "none"
    }


}
