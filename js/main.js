function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var correct = 0;

    if(question1 == "D"){
        correct++;
    }

    if(question2 == "B"){
        correct++;
    }

    if(question3 == "A"){
        correct++;
    }

    if(question4 == "D"){
        correct++;
    }
    
    if(question5 == "B"){
        correct++;
    }

    if(question6 == "B"){
        correct++;
    }

    if(question7 == "D"){
        correct++;
    }

    if(question8 == "C"){
        correct++;
    }
    
    if(question9 == "D"){
        correct++;
    }

    var mensajes = ["Eres la mejor", "Está bien, pero tú puedes superar cualquier cosa!", "Vamos levantate"];
    var gifs = ["img/0.gif", "img/1.gif", "img/2.gif"];
    var rango;
    if (correct>=7){
        rango=0;
    }else if (correct>4&&correct<7){
        rango=1;
    }else if (correct<=4){
        rango=2;
    }

    //validación 

    if(document.quiz.question1[0].checked==false && document.quiz.question1[1].checked==false && document.quiz.question1[2].checked==false && document.quiz.question1[3].checked==false){
        alert("Contesta la pregunta 1 <3 ");
        return false;
    }else if(document.quiz.question2[0].checked==false && document.quiz.question2[1].checked==false && document.quiz.question2[2].checked==false && document.quiz.question2[3].checked==false){
        alert("Falta contestar la pregunta 2 <3");
        return false;
    }else if(document.quiz.question3[0].checked==false && document.quiz.question3[1].checked==false && document.quiz.question3[2].checked==false && document.quiz.question3[3].checked==false){
        alert("Falta contestar la pregunta 3 <3");
        return false;
    }else if(document.quiz.question4[0].checked==false && document.quiz.question4[1].checked==false && document.quiz.question4[2].checked==false && document.quiz.question4[3].checked==false){
        alert("Falta contestar la pregunta 4 <3");
        return false;
    }else if(document.quiz.question5[0].checked==false && document.quiz.question5[1].checked==false && document.quiz.question5[2].checked==false && document.quiz.question5[3].checked==false){
        alert("Falta contestar la pregunta 5 <3");
        return false;
    }else if(document.quiz.question6[0].checked==false && document.quiz.question6[1].checked==false && document.quiz.question6[2].checked==false && document.quiz.question6[3].checked==false){
        alert("Falta contestar la pregunta 6 <3");
        return false;
    }else if(document.quiz.question7[0].checked==false && document.quiz.question7[1].checked==false && document.quiz.question7[2].checked==false && document.quiz.question7[3].checked==false){
        alert("Falta contestar la pregunta 7 <3");
        return false;
    }else if(document.quiz.question8[0].checked==false && document.quiz.question8[1].checked==false && document.quiz.question8[2].checked==false && document.quiz.question8[3].checked==false){
        alert("Falta contestar la pregunta 8 <3");
        return false;
    }else if(document.quiz.question9[0].checked==false && document.quiz.question9[1].checked==false && document.quiz.question9[2].checked==false && document.quiz.question9[3].checked==false){
        alert("Falta contestar la pregunta 9 <3");
        return false;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("mensajes").innerHTML = mensajes[rango];
    document.getElementById("number_correct").innerHTML = "Tuviste " + correct + " preguntas acertadas.";
    document.getElementById("imagen").src = gifs[rango];
}