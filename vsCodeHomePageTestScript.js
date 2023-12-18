function redClick(){
    document.body.style.backgroundColor = '#F778A1';  
    resetStyleBoxes(); 
    changeColorText( 'background-color: #F778A1;' ); 
}

function blueClick(){
    document.body.style.backgroundColor = '#6698FF'; 
    resetStyleBoxes(); 
    changeColorText( 'background-color: #6698FF;' ); 
}

function yellowClick(){
    document.body.style.backgroundColor = '#FFE87C'; 
    resetStyleBoxes(); 
    changeColorText( 'background-color: #FFE87C;' ); 
}

function greenClick(){
    document.body.style.backgroundColor = '#34A56F'; 
    resetStyleBoxes(); 
    changeColorText( 'background-color: #34A56F;' ); 
}

function whiteClick(){
    document.body.style.backgroundColor = 'white'; 
    changeColorText( 'background-color: #FFFFFF;' ); 
    setStyleBoxesBlack(); 
}

function resetStyleBoxes(){
    document.getElementById( "styleBox1" ).style.backgroundColor = 'white'; 
    document.getElementById( "styleBox2" ).style.backgroundColor = 'white'; 
    document.getElementById( "styleBox3" ).style.backgroundColor = 'white';
    document.getElementById( "insideStyle" ).style.color = 'black';
    document.getElementById( "styleBox1" ).style.border = '2px solid black'; 
    document.getElementById( "styleBox2" ).style.border = '2px solid black';
    document.getElementById( "styleBox3" ).style.border = '2px solid black'; 
    document.getElementById( "styleBox1" ).style.color = 'black'; 
    document.getElementById( "styleBox3" ).style.color = 'black';

    document.getElementById( "styleBoxMiddle" ).style.backgroundColor = 'white'; 
    document.getElementById( "styleBoxMiddle" ).style.border = '2px solid black'; 

}

function setStyleBoxesBlack(){
    document.getElementById( "styleBox1" ).style.backgroundColor = 'black'; 
    document.getElementById( "styleBox2" ).style.backgroundColor = 'black'; 
    document.getElementById( "styleBox3" ).style.backgroundColor = 'black';
    document.getElementById( "insideStyle" ).style.color = 'yellow';
    document.getElementById( "styleBox1" ).style.border = '2px solid #00ccff'; 
    document.getElementById( "styleBox2" ).style.border = '2px solid #00ccff';
    document.getElementById( "styleBox3" ).style.border = '2px solid #00ccff'; 
    document.getElementById( "styleBox1" ).style.color = '#33e96c'; 
    document.getElementById( "styleBox3" ).style.color = '#33e96c';  

    document.getElementById( "styleBoxMiddle" ).style.backgroundColor = 'black'; 
    document.getElementById( "styleBoxMiddle" ).style.border = '2px solid #00ccff'; 




}

function changeColorText( newcolorString ){
    document.getElementById( "chosenColor" ).innerText = newcolorString; 
}
