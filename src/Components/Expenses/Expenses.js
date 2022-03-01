import React,{ useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
    

    const [filterYear,setFilterYear] =  useState('2020'); 
    const filterChangeHandler = (selectedYear) =>{
        setFilterYear(selectedYear);
    }
    
    const filterExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filterYear;
    });

         
    return(
            
        <div className='expenses'>
            <ExpensesFilter selected ={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses = {filterExpenses}/>
            <ExpensesList expenses={filterExpenses}/>
        </div>
        

    );

}
export default Expenses; 