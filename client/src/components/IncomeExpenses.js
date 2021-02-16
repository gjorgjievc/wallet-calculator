import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts.filter(t => t > 0).reduce((acc, t) => (acc += t), 0).toFixed(2);

    const expense = (
        amounts.filter(t => t < 0)
        .reduce((acc, t) => (acc += t), 0) * -1)
        .toFixed(2);

    return (
        <>
            <div className="inc-exp-container">
                <div className="item1">
                    <h4>Your Balance</h4>
                    <h1 >${total}</h1>
                </div>
                <div>
                    <div>
                        <h4>Income</h4>
                        <h2 className="money plus">${income}</h2>
                    </div>
                    <div>
                        <h4>Expenses</h4>
                        <h2 className="money minus">${expense}</h2>
                    </div>
                </div>    
            </div>
        </>
    )
}
