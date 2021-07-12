var getInput = document.getElementById("answer").innertext;
console.log(getInput);
function mySubmit() {
    var text;
    var database = [
        {answer: "Apple", clue: "Steve Jobs"},
        {answer: "Mango", clue: "Fruit"}
    ];
    for(var i=0;i<database.length;i++){
        if(database[i].answer === getInput){
            text = database[i].clue;
            console.log(text);
        }
        else{
            text = "The answer is incorrect";
            console.log(text);
        }
        document.getElementById("demo").innertext = text;
    }
}