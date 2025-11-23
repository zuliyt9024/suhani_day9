// question-1

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        getCount: function () {
            return count;
        }
    };
}
const counter1 = createCounter();
counter1.increment();
counter1.increment(); 

const counter2 = createCounter();
counter2.increment(); 






//question-2
function createBankAccount() {
    let balance = 0; 

    return {
        deposit: function (amount) {
            balance += amount;
            console.log("Deposited:", amount);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                console.log("Withdrawn:", amount);
            }
        },
        getBalance: function () {
            return balance;
        }
    };
}


const account = createBankAccount();
account.deposit(500); 
account.withdraw(200);
account.withdraw(400);
console.log(account.balance); 
