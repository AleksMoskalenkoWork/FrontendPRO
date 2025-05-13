class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    const template = `Ваш баланс дорівнює: ${this.balance}`;
    alert(template);
  }

  deposit(valueDeposit) {
    const result = (this.balance += valueDeposit);
    return result;
  }

  withdraw(valueWithdraw) {
    const result = (this.balance -= valueWithdraw);
    return result;
  }
}

const account1 = new BankAccount(1000);

account1.getBalance();

account1.deposit(500);

account1.getBalance();

account1.withdraw(200);

account1.getBalance();
