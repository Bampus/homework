// Skriv en while loop
// Som varje iteration (repetition) slumpar ett heltal mellan 0 och 10
// Om talet blir 6, avsluta loopen

i = Math.floor(Math.random() * 10)
do {
  text += i + ' ';
  i = Math.floor(Math.random() * 10)
} while (i !== 6)
  text += i;
console.log(text);

// Exempel på output:
// 4
// 7
// 3
// 8
// 4
// 1
// 1
// 6
