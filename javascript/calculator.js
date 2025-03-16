function calculateReceived() {
  var input = document.getElementById("give-input").value;
  var amountGiven = parseInt(input, 10);
  var resultElement = document.getElementById("received-result");

  if (isNaN(amountGiven) || amountGiven < 0) {
      resultElement.innerHTML = 'You will receive <span class="result-number">0</span> <img src="assets/images/robux.png" alt="Robux Icon"> Robux';
  } else {
      var received = Math.floor(amountGiven * 0.7);
      resultElement.innerHTML = `You will receive <span class="result-number">${received}</span> <img src="assets/images/robux.png" alt="Robux Icon"> Robux`;
  }
}

function calculateToGive() {
  var input = document.getElementById("receive-input").value;
  var amountToReceive = parseInt(input, 10);
  var resultElement = document.getElementById("to-give-result");

  if (isNaN(amountToReceive) || amountToReceive < 0) {
      resultElement.innerHTML = 'You need to give <span class="result-number">0</span> <img src="assets/images/robux.png" alt="Robux Icon"> Robux';
  } else {
      var toGive = Math.ceil(amountToReceive / 0.7);
      resultElement.innerHTML = `You need to give <span class="result-number">${toGive}</span> <img src="assets/images/robux.png" alt="Robux Icon"> Robux`;
  }
}

// Initial calculations on page load
calculateReceived();
calculateToGive();