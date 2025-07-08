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
  "question": "Laisse moi vivre mon mâle alpha dream ",
  "response": "Margot (on sait tous que je suis un mâle alpha)",
  "answerimage": 'riimage002'
},  {
  "question": "Est-ce que je ressors le même discours à chaque fois ? Oui. Aujourd'hui, j'ai vu Chloé ~ (avec une voix toute pipou) ",
  "response": "Elise. Forcément Elise. ",
  "answerimage": 'riimage003'
}, {
  "question": "Au pire, tape dans un mur et après t'es plus en colère. Petit tips ",
  "response": "Elisa quand Elise est énervée d'être aussi gay",
  "answerimage": 'riimage001'
}, {
  "question": "The Marcel in you can do it ",
  "response": "Elise avec Marcel le goat",
  "answerimage": 'riimage003'
}, {
  "question": "Il pleut toute la journée bichette ",
  "response": "Margot quand Elisa se rend compte qu'on va faire la course solidaire 2024 sous la flotte",
  "answerimage": 'riimage002'
}, {
  "question": "FUIIIIIS! Fuis l'humanité ",
  "response": "Margot près qu'Elise ait croisé des gens et on n'aime pas les gens",
  "answerimage": 'riimage002'
}, {
  "question": "Parce que j'aime bien critiquer l'état",
  "response": "Elisa quand on lui demande pourquoi elle veut faire le SNU alors qu'elle critique tout",
  "answerimage": 'riimage001'
}, {
  "question": "J’en veut bien pour mes péchés svp ",
  "response": "Elise quand Margot dit que les témoins de Jéhovah de saverne offrent des cours bibliques",
  "answerimage": 'riimage003'
},  {
  "question": "Mdr le gars, il croyait vraiment que les gens seraient content de le voir vivant ",
  "response": "Margot quand Elisa parle d'un livre avec un connard qui est revenu d'entre les morts jsp sorry c'est pas clair j'ai pas réécouté tout le vocal, il faisait 1min c'est trop long",
  "answerimage": 'riimage002'
},  {
  "question": "Jojo sous tour de kayou ",
  "response": "Elisa quand Margot lui montre Joel de TLOU faire une tour de kayou après avoir vécu les pires traumas",
  "answerimage": 'riimage001'
},{
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
