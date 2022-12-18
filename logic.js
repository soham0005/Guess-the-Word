const words=["Java","Dictionary","Ruby","Realme","Seven","Beautiful","Synchronous"];
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}






let startBtn=document.getElementById("startBtn");
startBtn.addEventListener('click',startGame);

function startGame(){
    let randomWord=words[Math.floor(Math.random()*words.length)];
    document.getElementById("displayWords").innerHTML=`<h4>Word is: ${randomWord.shuffle()}</h4>`;

}

function checkInput(){
    if(document.getElementById("input").innerHTML==""){
        alert("Input Cannot be Empty")
    }
    else{
        let userInput=document.getElementById("input").innerHTML;
        console.log(userInput);
    }
}