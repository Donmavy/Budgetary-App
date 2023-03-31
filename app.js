const expensesForm = document.getElementById('expenseForm');
const incomeForm = document.getElementById('incomeForm');

const incomeField = document.getElementById('income');
const expenseField = document.getElementById('expense');

/* THE OL (Parent to hold the LI) */
const incomeOL = document.getElementById('income-list');
const expenseOL = document.getElementById('expense-list');

/* DATABASE TO STORE INCOMES AND EXPENSES */
let incomes =[];
let expenses = [];

/* GET INPUTs */
const getInput = (inputField) => {
    return inputField.value;
}

/* CREATING AN HTML ELEMENT */
const generateElement = (elementName) => {
    const elem = document.createElement(elementName);
    return elem;
}

/* ADD INCOME */
const addIncome = ()=>{
    const income =  getInput(incomeField);
    incomes.push(income);
    const li = generateElement('li');
    li.textContent = income;
    return li;
}
/* ADD EXPENSE */
const addExpense = ()=>{
    const expense =  getInput(expenseField);
    expenses.push(expense);
    const li = generateElement('li');
    li.textContent = expense;
    return li;
}

/* CLEAR FIELD */
const clearField = (field)=>{
    return field.value = "";
}


/* TOTAL INCOME */
    const totalIncome=()=>{
    
}
/* TOTAL EXPENDITURE */
 const totalExpenditure=()=>{
    
}

/* EVENT LISTENER FOR INCOME FORM*/
    incomeForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const li = addIncome();
    incomeOL.appendChild(li);
    clearField(incomeField)
})

/* EVENT LISTENER FOR EXPENSE FORM*/
    expensesForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const li = addExpense();
    expenseOL.appendChild(li);
    clearField(expenseField)
})
