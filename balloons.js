function createBalloon() {
    const colors = ['turquoise', '#776ef3', '#4ae3e8', '#f0a8f3', '#f35abd'];
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = (6 + Math.random() * 4) + 's';
    document.body.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 7000);
  }

  const balloonInterval = setInterval(createBalloon, 200);

  setTimeout(() => {
    clearInterval(balloonInterval);
    console.log("Balloon creation stopped.");
  }, 3000);