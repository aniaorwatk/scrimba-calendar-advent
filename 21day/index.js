/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!
 */



function awardBonuses() {
    for (let i = 1; i <= 100; i++) {
        const divisibleByThree = i % 3 === 0;
        const divisibleByFive = i % 5 === 0;
        const winnerJACKPOT = i + "-" + "JACKPOT! 1 Million and a Yacht!"
        const winnerVacation = i + "-" + "Vacation!";
        const winnerMoney = i + "-" + "$100,000 bonus!";
        const loser = i + "-" + ":(";
        
        if (divisibleByThree && divisibleByFive) {
            console.log(winnerJACKPOT)
        } else if (divisibleByThree) {
            console.log(winnerVacation)
        } else if (divisibleByFive) {
            console.log(winnerMoney)
        } else {
            console.log(loser)
        }
    }
}

awardBonuses();