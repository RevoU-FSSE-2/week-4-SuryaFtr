function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.querySelector("#next-button").addEventListener("click", switchMode);
function switchMode(){
    if(document.querySelector('#yes').checked == true){
        showSurveyYes();
    }
    else if(document.querySelector('#no').checked == true){
        showSurveyNo();
    }
}

function showSurveyYes(){
    document.querySelector("#survey-yes").style.display = "block";
    document.querySelector("#survey-no").style.display = "none";
}

function showSurveyNo(){
    document.querySelector("#survey-no").style.display = "block";
    document.querySelector("#survey-yes").style.display = "none";
}
