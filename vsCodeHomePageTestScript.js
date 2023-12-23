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

//define an array that holds urls 
var albumUrls = [
    "../Desktop/Reik.png",
    "../Downloads/Rebelde_album_cover.jpg",
    "../Desktop/carlosBaute.png"
];

var albumCaptions = [
    "<em>Levemente,</em> Reik", 
    "<em>Solo Quedate En Silencio,</em> RBD",
    "<em>Colgando En Tus Manos,</em> Carlos Baute"
];

var currAlbum = 1; 

///////////////////
var songUrls = [
    "ReikLevemente.mp3",
    //"../Downloads/ReikLevemente.ogg",
    //"../Downloads/ReikLevemente.ogg"
    "RBD-SoloQuedateEnSilencio.mp3",
    "CarlosBaute.mp3"
];

function nextAlbum(){
    var albumPic = document.getElementById( "albumPic" ); 
    var albumCaption = document.getElementById( "albumCaption" ); 
    var musicSrc = document.getElementById( "musicSrc" ); 

    //set the album pic to the next url 
    albumPic.src = albumUrls[ currAlbum ];
    albumCaption.innerHTML = albumCaptions[ currAlbum ]; 
    musicSrc.src = songUrls[ currAlbum ]; 

    //increment the index, and reset it to 0 if we reach the array length 
    currAlbum ++; 
    if( currAlbum === albumUrls.length ) currAlbum = 0; 

}

function prevAlbum(){
    var albumPic = document.getElementById( "albumPic" ); 
    var albumCaption = document.getElementById( "albumCaption" ); 
    var musicSrc = document.getElementById( "musicSrc" ); 


    //decrement the index, and reset it to array.length -1 if we reach 0

    if( currAlbum > 1 ) currAlbum -= 2; 
    else if( currAlbum === 1 ) currAlbum = albumUrls.length -1; 
    else if( currAlbum === 0 ) currAlbum = albumUrls.length - 2; 

    //set the album pic to the prev url 
    albumPic.src = albumUrls[ currAlbum ]; 
    albumCaption.innerHTML = albumCaptions[ currAlbum ]; 
    musicSrc.src = songUrls[ currAlbum ]; 

    currAlbum ++; 
    if( currAlbum === albumUrls.length ) currAlbum = 0; 

}

