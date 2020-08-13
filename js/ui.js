const expenses = document.querySelector('.expenses');
const sumArrayTot = [];
const sumArrayFood = [];
const sumArrayHouse = [];
const sumArrayTech = [];
const sumArrayHealth = [];
const sumArrayVehicle = [];
const sumArrayOther = [];
const sumArrayWhat = [];

let sumTot = 0;
let i = 0;
let sumTot1 = 0;
let sumFood = 0;
let sumHouse = 0;
let sumTech = 0;
let sumHealth = 0;
let sumVehicle = 0;
let sumOther = 0;
let sumWhat = 0;

//after dom loaded then initialises side menu's
document.addEventListener('DOMContentLoaded', function () {
  // update expense form
  const forms1 = document.querySelectorAll('.side-form1');
  M.Sidenav.init(forms1, { edge: 'left' });
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });
  // add expense form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });

});

//This renders sum totals 
const renderExpensex = (data) => {

  //this takes sum(string), converts to number & then makes an array of all sums & then iterates through to get sumTotal
  const y = parseInt(data.sum);
  sumArrayTot.push(y);
  for (i = 0, sumTot1 = 0; i < sumArrayTot.length; sumTot1 += sumArrayTot[i++]);
  //iterate through transactions to find categories to get each category sum.
  if (data.category == 'Food-🍲') {
    sumArrayFood.push(y);
    for (i = 0, sumFood = 0; i < sumArrayFood.length; sumFood += sumArrayFood[i++]);
  } else if (data.category == 'House-🏠') {
    sumArrayHouse.push(y);
    for (i = 0, sumHouse = 0; i < sumArrayHouse.length; sumHouse += sumArrayHouse[i++]);
  } else if (data.category == "Tech-💾") {
    sumArrayTech.push(y);
    for (i = 0, sumTech = 0; i < sumArrayTech.length; sumTech += sumArrayTech[i++]);
  } else if (data.category == "Vehicle-🚙") {
    sumArrayVehicle.push(y);
    for (i = 0, sumVehicle = 0; i < sumArrayVehicle.length; sumVehicle += sumArrayVehicle[i++]);
  } else if (data.category == "Health-⚕️") {
    sumArrayHealth.push(y);
    for (i = 0, sumHealth = 0; i < sumArrayHealth.length; sumHealth += sumArrayHealth[i++]);
  }
  else if (data.category == "Other-🏺") {
    sumArrayOther.push(y);
    for (i = 0, sumOther = 0; i < sumArrayOther.length; sumOther += sumArrayOther[i++]);
  } else if (data.category === "") {
    sumArrayWhat.push(y);
    for (i = 0, sumWhat = 0; i < sumArrayWhat.length; sumWhat += sumArrayWhat[i++]);
  };
  //string literal output from collected summed data above
  const htmlx = `
        <div class="card-panel expense orange lighten-4 row" >
          <div class="expense-details">
            <div >Total spent this month <strong>$${sumTot1}</strong></div>
            <div >Food-$${sumFood}/House-$${sumHouse}/Tech-$${sumTech}/Vehicle-$${sumVehicle}</br>
            /Health-$${sumHealth}/Other-$${sumOther}/???-$${sumWhat}</div>
          </div>
        </div>
      `;

  expenses.innerHTML = htmlx;
};

// render expense data
const renderExpense = (data, id) => {
  //this takes number object and converts to a string date to display.
  const x = data.date;
  const date1 = new Date(x).toLocaleDateString('en-GB');

  //Template for rendering to cards

  //// <dfn class="material-icons" data-id="${id}" data-target="side-form1">edit</dfn>  
  //// <a class="btn-floating btn-small waves-effect waves-light black"><i class="material-icons">edit</i></a>

  const html = `
    <div class="card-panel expense white row" data-id="${id}">

      <div class="expense-add">
      <dfn class="material-icons sidenav-trigger" data-target="side-form1" data-id="${id}">E</dfn>
       </div>
      
      <div class="expense-details">
        <div class="expense-sum">$${data.sum}</div>
          <div class="expense-other">${data.shop} / ${data.category} / ${data.billable}/ ${data.account}</br>
            ${data.comment}</br>
            ${date1}</br>
          </div>
            <div class="expense-delete">
             <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
       </div>
    </div>
  `;

  expenses.innerHTML += html;
  // <img src="/img/dish.png" alt="expense thumb">
};

// remove expense
const removeExpense = (id) => {
  const expense = document.querySelector(`.expense[data-id=${id}]`);
  expense.remove();

};

