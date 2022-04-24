function listening(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ak7wY639e/model.json', modelReady);
}
 function modelReady(){
    classifier.classify(gotResults);
}
var Dog =0;
var Horse =0;
var Lion =0;
var Monkey =0;
var Background_noises =0; 
img = document.getElementById("animal");
function gotResults(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_number_red = Math.floor(Math.random() * 255) + 1;
    random_number_green = Math.floor(Math.random() * 255) + 1;
    random_number_blue = Math.floor(Math.random() * 255) + 1;

    document.getElementById("noise").innerHTML = results[0].label;
    document.getElementById("animals_detected").innerHTML =(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("noise").style.color ="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";
    document.getElementById("animals_detected").style.color ="rgb("+random_number_red+","+random_number_green+","+random_number_blue+")";

    if(results[0].label == "barking/dog")
    {
    img.src = 'dog.jpeg'; 
    Dog = Dog+1;
    }
    else if(results[0].label =="monkey noises") {
        
    img.src = 'monkey.jpeg';
    Monkey= Monkey+1; 
}
else if(results[0].label =="horse noises/neighing") {
    Horse=Horse+1;
img.src = 'horse.jpeg';

}
else if(results[0].label =="roaring") { 
    Lion=Lion+1;
 
img.src = 'lion.jpeg'; 
}
    else{ 
img.src = 'ear.jpeg'; 
}
}
}


