const nameInput = document.getElementById('userName');
const ageInput = document.getElementById('userAge');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const outputArea = document.getElementById('outputArea');

function displayResultCard(title, icon, value) {
  const card = document.createElement('div');
  card.className = 'result-card';
  card.innerHTML = `
    <div class="result-title">
      <i class="fa-solid ${icon}"></i> ${title}
    </div>
    <h2 class="result-value">${value}</h2>
  `;
  return card;
}

function createGreetingCard() {
  const userName = nameInput.value.trim();
  const userAge = parseInt(ageInput.value, 10);
  const firstNumber = Number(num1Input.value);
  const secondNumber = Number(num2Input.value);

  if (!userName || !ageInput.value || !num1Input.value || !num2Input.value) {
    alert('Please fill in all fields!');
    return;
  }

  outputArea.innerHTML = '';

  var welcomeMessage = 'Welcome, ' + userName + '!';
  let ageMessage = 'You are ' + userAge + ' years old.';
  const cardTitle = 'User Greeting Card';

  console.log(' DATA TYPES ');
  console.log('Type of userName:', typeof userName);
  console.log('Type of userAge:', typeof userAge);
  console.log('Type of firstNumber:', typeof firstNumber);
  console.log('Type of secondNumber:', typeof secondNumber);

  outputArea.appendChild(displayResultCard(
    'User',
    'fa-user',
    userName
  ));

  outputArea.appendChild(displayResultCard(
    'Age',
    'fa-calendar',
    userAge + ' years'
  ));

  const msgCard = document.createElement('div');
  msgCard.className = 'result-card main-result';
  msgCard.innerHTML = `
    <div class="result-title">
      <i class="fa-solid fa-star"></i> Greeting
    </div>
    <h2>${welcomeMessage}</h2>
  `;
  outputArea.appendChild(msgCard);

  console.log('welcomeMessage (var):', welcomeMessage);
  console.log('ageMessage (let):', ageMessage);
  console.log('cardTitle (const):', cardTitle);
}

function executeSmartOperations() {
  const userName = nameInput.value.trim();
  const userAge = parseInt(ageInput.value, 10);
  const firstNumber = Number(num1Input.value);
  const secondNumber = Number(num2Input.value);

  if (!userName || !ageInput.value || !num1Input.value || !num2Input.value) {
    alert('Please fill in all fields!');
    return;
  }

  outputArea.innerHTML = '';

  console.log(' ARITHMETIC OPERATIONS ');

  const sum = firstNumber + secondNumber;
  const subtraction = firstNumber - secondNumber;
  const multiplication = firstNumber * secondNumber;
  const division = secondNumber !== 0 ? firstNumber / secondNumber : 'Cannot divide by zero';
  const remainder = secondNumber !== 0 ? firstNumber % secondNumber : 'N/A';

  outputArea.appendChild(displayResultCard(
    'Addition',
    'fa-plus',
    firstNumber + ' + ' + secondNumber + ' = ' + sum
  ));

  outputArea.appendChild(displayResultCard(
    'Subtraction',
    'fa-minus',
    firstNumber + ' - ' + secondNumber + ' = ' + subtraction
  ));

  outputArea.appendChild(displayResultCard(
    'Multiplication',
    'fa-xmark',
    firstNumber + ' * ' + secondNumber + ' = ' + multiplication
  ));

  outputArea.appendChild(displayResultCard(
    'Division',
    'fa-divide',
    secondNumber !== 0 ? firstNumber + ' / ' + secondNumber + ' = ' + division : division
  ));

  outputArea.appendChild(displayResultCard(
    'Remainder',
    'fa-percent',
    secondNumber !== 0 ? firstNumber + ' % ' + secondNumber + ' = ' + remainder : remainder
  ));

  console.log('Addition:', firstNumber, '+', secondNumber, '=', sum);
  console.log('Subtraction:', firstNumber, '-', secondNumber, '=', subtraction);
  console.log('Multiplication:', firstNumber, '*', secondNumber, '=', multiplication);
  console.log('Division:', firstNumber, '/', secondNumber, '=', division);
  console.log('Remainder:', firstNumber, '%', secondNumber, '=', remainder);

  console.log(' COMPARISON OPERATORS ');

  const isAdult = userAge >= 18;
  const sameNumber = firstNumber === secondNumber;
  const firstGreater = firstNumber > secondNumber;
  const ageNotZero = userAge !== 0;

  outputArea.appendChild(displayResultCard(
    'Comparison',
    'fa-code-compare',
    (isAdult ? 'Adult ✓' : 'Minor ✕') + '\n' +
    (sameNumber ? 'Numbers Equal ✓' : 'Numbers Different ✕') + '\n' +
    (firstGreater ? 'First > Second ✓' : 'First > Second ✕')
  ));

  console.log('Is Adult (>= 18):', isAdult);
  console.log('Same Number (===):', sameNumber);
  console.log('First > Second:', firstGreater);
  console.log('Age !== 0:', ageNotZero);

  console.log(' LOGICAL OPERATORS ');

  const logicalAnd = isAdult && sameNumber;
  const logicalOr = isAdult || sameNumber;
  const logicalNot = !isAdult;

  outputArea.appendChild(displayResultCard(
    'Logical Results',
    'fa-brain',
    'AND: ' + logicalAnd + '\n' + 'OR: ' + logicalOr + '\n' + 'NOT Adult: ' + logicalNot
  ));

  console.log('Logical AND (&&):', isAdult, '&&', sameNumber, '=', logicalAnd);
  console.log('Logical OR (||):', isAdult, '||', sameNumber, '=', logicalOr);
  console.log('Logical NOT (!):', '!', isAdult, '=', logicalNot);

  console.log(' STRING CONCATENATION & ASSIGNMENT ');

  var userInfo = 'User: ' + userName;
  let calculations = 'Sum: ' + sum + ', Product: ' + multiplication;
  const finalStatus = (logicalAnd ? 'Valid Adult with Matching Numbers' : 'Regular User');

  outputArea.appendChild(displayResultCard(
    'Final Status',
    'fa-star',
    finalStatus
  ));

  outputArea.appendChild(displayResultCard(
    'Strings',
    'fa-font',
    userInfo + '\n' + calculations + '\n' + finalStatus
  ));

  console.log('String Concatenation 1 (var):', userInfo);
  console.log('String Concatenation 2 (let):', calculations);
  console.log('String Concatenation 3 (const):', finalStatus);

  console.log(' ASSIGNMENT OPERATORS ');
  let assignExample = 10;
  console.log('Initial assignExample =', assignExample);
  assignExample += 5;
  console.log('After +=5 ->', assignExample);
  assignExample -= 2;
  console.log('After -=2 ->', assignExample);
  assignExample *= 3;
  console.log('After *=3 ->', assignExample);
  assignExample /= 4;
  console.log('After /=4 ->', assignExample);

  outputArea.appendChild(displayResultCard(
    'Assignment Demo',
    'fa-file-preserve',
    'Result: ' + assignExample
  ));

  const summaryCard = document.createElement('div');
  summaryCard.className = 'result-card main-result';
  summaryCard.innerHTML = `
    <div class="result-title">
      <i class="fa-solid fa-microchip"></i> Smart Operations Complete
    </div>
    <h2>Check Console for Details</h2>
  `;
  outputArea.appendChild(summaryCard);
}
