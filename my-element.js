import { SavingsGoal } from './src/savings-goal';

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }

      .savings-goal {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        width: 300px;
        font-family: Arial, sans-serif;
    }

    .status.active {
      color: green;
    }

    .status.inactive {
      color: red;
    }
    `;
  }

  static get properties() {
    return {
      goals: {
        type: Array,
      }
    };
  }

  constructor() {
    super();
    this.goals = [];
    this.goals.push(new SavingsGoal("Basement", new Date("9/30/2023"), 8500))
  }

  render() {
    return html`
      <h1>Savings Tracker</h1>
      <div>${this.goals.map(goal => this._showGoal(goal))}</div>
    `;
  }

  _showGoal(goal) {
    return html`
    <div class="savings-goal">
      <h2>${goal.title}</h2>
      <p class="status ${goal.active ? 'active' : 'inactive'}">Status: ${goal.active ? 'Active' : 'Inactive'}</p>
      <p>Deadline: ${goal.deadline.toDateString()}</p>
      <p>Goal: $${goal.goal}</p>
      <p>Spent: $${goal.spent}</p>
      <p>Balance: $${goal.balance}</p>
    </div>
    `
  }

}

window.customElements.define('my-element', MyElement);
