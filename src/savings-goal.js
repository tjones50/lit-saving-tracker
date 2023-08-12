export class SavingsGoal {

    constructor(title, deadline, goal) {
        this.active = false;
        this.title = title;
        this.deadline = deadline;
        this.goal = goal;
        this.spent = 0;
        this.balance = 0;
      }

}