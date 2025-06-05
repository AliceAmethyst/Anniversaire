// create an array and add some questions and answes
// note: arrays are zero based. That means array [0] is the first one
var currentquestion = 0;
var questions = [{
  "question": "Trump staying by himself, he's so baby girl 🤭🤭",
  "response": "Elisa 🎀",
  "answerimage": 'riimage001'
}, {
  "question": "LAVEZ MOI LES YEUX A LA JAVEL, JE VEUX OUBLIER CETTE SCENE DE CUL INTERMINABLE",
  "response": "Margot (send help)",
  "answerimage": 'riimage002'
}, {
  "question": "en réponse au message 'that was very heterosexual': Very me coded, donc",
  "response": "Elise et le déni",
  "answerimage": 'riimage003'
}, {
  "question": "Spill the tea baby",
  "response": "Margot",
  "answerimage": 'riimage002'
}, {
  "question": "DIS LUI QUE TOI, TON CHAT AU MOINS IL EST RACISTE ",
  "response": "Elise, quand Elisa parle du chat musclé de Thomas Fritsch",
  "answerimage": 'riimage003'
}, {
  "question": "Je la bouffe quand tu veux mais elle est en train de die donc bon ",
  "response": "Margot, avec la guerrière au cheveux bleus dans Arcane (j'ai vraiment dit ça, moi???)",
  "answerimage": 'riimage002'
},{
  "question": "Le culot open the gyeemet ",
  "response": "Elise (après avoir vu Chloé)",
  "answerimage": 'riimage003'
}, {
  "question": "Point de vue équipe rouge : mental breakdance ",
  "response": "Elisa et la QSMP",
  "answerimage": 'riimage001'
},   {
  "question": "On a du retard mais promis j'ai une excuse ",
  "response": "Elisa (qui d'autre, en même temps ?)",
  "answerimage": 'riimage001'
}, {
  "question": "C'était la dernière question <3 ",
  "response": "Elise",
  "answerimage": 'riimage003'
}];

(function() {
  // your page initialization code here
  fnReset(); //call reset on document ready

  document.getElementById("rinextquestion").addEventListener('click', function(event) {
    fnNext();
  });

  document.getElementById("riimage001").addEventListener('click', function(event) {
    fnCheck("riimage001", this);
  });
  document.getElementById("riimage002").addEventListener('click', function(event) {
    fnCheck("riimage002", this);
  });

  document.getElementById("riimage003").addEventListener('click', function(event) {
    fnCheck("riimage003", this);
  });
  document.getElementById("rireset").addEventListener('click', function(event) {
    fnReset();
  });

})();

function fnReset() {
  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('rinextquestion').classList.add('rihide');
  document.getElementById('rireset').classList.add('rihide');
  document.getElementById('riquestionbox').classList.remove('rihide');
  currentquestion = 0;
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}

function fnNext() {
  document.getElementById('riquestionresponse').classList.add('rihide');
  if (currentquestion < questions.length - 1) {
    currentquestion = currentquestion + 1;
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('rireset').classList.add('rihide');
  } else {
    document.getElementById('rinextquestion').classList.add('rihide');
    document.getElementById('riquestionbox').classList.add('rihide');
    document.getElementById('rireset').classList.remove('rihide');
  }
  document.getElementById('riquestionresponse').classList.add('rihide');
  document.getElementById('riquestiontext').innerHTML = questions[currentquestion].question;
}

function fnCheck(answerimage, obj) {
  document.getElementById('riquestionresponse').classList.remove('ricorrect');
  document.getElementById('riquestionresponse').classList.remove('riincorrect');
  if (questions[currentquestion].answerimage === answerimage) {
    // show correct
    document.getElementById('riquestionresponse').classList.add('ricorrect');
    document.getElementById('riquestionresponse').innerHTML = "Correct: C'est " + questions[currentquestion].response;
    document.getElementById('rinextquestion').classList.remove('rihide');
  } else {
    // show incorrect
    document.getElementById('riquestionresponse').classList.add('riincorrect');
    document.getElementById('riquestionresponse').innerHTML = "Faux, ce n'est pas " + obj.name;
  }
  document.getElementById('riquestionresponse').classList.remove('rihide');
}
