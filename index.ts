#! /usr/bin/env node

// SHBANG

import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    { message : 'Enter first number',type:'number', name: 'firstName'},
    { message : 'Enter second number',type:'number', name: 'secondName'},
    {
        type: 'list',
        message: 'Select one of the operators to perform the action',
        name: 'operation',
        choices: ['Addition', 'Subtraction', 'Multiplication'],
    },
]);

if (answer.operation === 'Addition'){
    console.log(answer.firstName + answer.secondName);
} else if (answer.operation === 'Subtraction'){
    console.log(answer.firstName - answer.secondName);
} else if (answer.operation === 'Multiplication'){
    console.log(answer.firstName * answer.secondName);
} else {
    console.log('Please select a valid operator');
}
