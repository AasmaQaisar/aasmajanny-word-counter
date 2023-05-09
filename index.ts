#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
const welCome = async () => {
    console.log(chalk.greenBright(figlet.textSync("Word Counter \n")));
};
await welCome();

async function countWords(): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: (chalk.yellowBright('Enter some text to count the number of words:'))
    }
  ]);

  let words = answers.text.split(' ');
  let wordCount = words.length;

  console.log(chalk.blueBright(`The text you entered contains ${wordCount} words.`));
}

countWords();