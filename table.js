const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function table(number)
{
	 console.log("table of five : "+number);
	for(var i = 1;i <= 10;i++)
	{
		
		table = i * number;
		console.log(table);
	}
}
console.log("Display the table that you want ")
rl.question('Enter a number: ', (input) => {
  const number = parseInt(input);
	table(number);
	rl.close();
})
