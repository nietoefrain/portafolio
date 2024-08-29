document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const alertBox = document.getElementById('successAlert');
  alertBox.style.display = 'block';

  setTimeout(function() {
      alertBox.style.display = 'none';
  }, 5000); 

  this.reset();
});

$(document).ready(function(){
  const originalText = $('#hoverText').text();
  
  $('#hoverText').hover(
      function() {
          $(this).text('¡Bienvenido a mi Portafolio!');
      },
      function() {
          $(this).text(originalText);
      }
  );
});

$(document).ready(function(){
  const originalText = $('#hoverText').text();
  
  $('#hoverText').hover(
      function() {
          $(this).text('¡Bienvenido a mi Portafolio!');
      },
      function() {
          $(this).text(originalText);
      }
  );

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  
  $('#guessButton').click(function() {
    const userGuess = parseInt($('#guessInput').val());
    const feedback = $('#feedback');
    
    if (isNaN(userGuess)) {
      feedback.text('Por favor, introduce un número válido.');
    } else if (userGuess < randomNumber) {
      feedback.text('Demasiado bajo. ¡Intenta de nuevo!');
    } else if (userGuess > randomNumber) {
      feedback.text('Demasiado alto. ¡Intenta de nuevo!');
    } else {
      feedback.text('¡Felicidades! Adivinaste el número.');
    }
  });

  $('#project11Modal').on('shown.bs.modal', function () {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    $('#guessInput').val('');
    $('#feedback').text('');
  });
});

