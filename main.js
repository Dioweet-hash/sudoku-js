let height = 0;
let width = 0;

size = 9*9;

iter = 0;
function goMenu(){
    document.getElementsByClassName("menu")[0].style.display = 'block';
    document.getElementsByClassName("win")[0].style.display = 'block';
    document.getElementsByClassName("main-container")[0].style.display = "none";

}

function shufleArray(array){
    for(let i = 1; i <= 9; i++){
        var count = array.length,randomnumber,temp;
        while(count){
            randomnumber = Math.random() * count-- | 0;
            temp = array[count];
            array[count] = array[randomnumber];
            array[randomnumber] = temp;}       
    }
    return array;         
}

 
function arrayWorker(){

    iter = 0;
    array = [1,2,3,4,5,6,7,8,9];

    for(let j = 1; j <= 9; j++){
        array = shufleArray(array);
        for(let i = 1; i <= 9; i++){
            iter++;
            document.getElementById(100+iter).innerHTML = array[i-1];
            document.getElementById(iter).innerHTML = array[i-1];
        }    
    }
}

function clearGrid(){
    for(let i = 1; i <= size; i++){
        //get random number from 1 to 9
        var randomnumber = Math.floor(Math.random() * 9) + 1;
        if(randomnumber >5){
            document.getElementById(i).style.backgroundColor = "white";
            document.getElementById(i).innerHTML = "";
            }
        else{
            document.getElementById(i).disabled = true;
            document.getElementById(i).style.backgroundColor = "gray";
            
        }
    }
}

function whiteAllGrid(){
    for(let i = 1; i <= size; i++){
        //document.getElementById(i).style.backgroundColor = "white";
        document.getElementById(i).innerHTML = "";
    }
}



function start(){
    document.getElementsByClassName("menu")[0].style.display = 'none';
    document.getElementsByClassName("main-container")[0].style.display = 'grid';
    document.getElementsByClassName("win")[0].style.display = 'none';
    document.getElementById("err-count").innerHTML = '0';
    whiteAllGrid();

    height = 9;
    width = 9;
    document.getElementById("height").innerHTML = height;
    document.getElementById("width").innerHTML = width;
    
    x = "Size: " + width + "x" + height;
    //document.getElementsByClassName("size-info")[0].innerHTML = x;
    arrayWorker();
    clearGrid();
}


function keyboardPanel(state){
    //element with id="state" value set to state
    //document.getElementById("state").innerHTML = state;
    if(state == "0"){
        document.getElementById("state").innerHTML = "";
    }
    else{
        document.getElementById("state").innerHTML = state;
    }
}

/* проверить правильнось изменяеймой клетки поля , и изменить ее цвет*/
function gridClicked(id){
    document.getElementById(id).innerHTML = document.getElementById("state").innerHTML;

    if(document.getElementById(id).innerHTML == ""){
        document.getElementById(id).style.backgroundColor = "white";}
    else if(document.getElementById(id).innerHTML != document.getElementById(100+parseInt(id)).innerHTML){
        document.getElementById(id).style.backgroundColor = "red";
        x = parseInt(document.getElementById("err-count").innerHTML)+1;
        document.getElementById("err-count").innerHTML = x;

       
    }
    else{
        document.getElementById(id).style.backgroundColor = "green";
    }

    //check if all cells in two grids are equal then call func go menu
    let counter = 0;
    for(let g = 1; g <= size ;g++){
        if(document.getElementById(g).innerHTML == document.getElementById(100+g).innerHTML){
            counter++;
        }
    }
    
    if(counter == size){
        goMenu();
    }

    

}
