import css from "./TransactionHistory.module.css"
export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.thead}>
                <tr>
                    <th className={css.theadText}>Type</th>
                    <th className={css.theadText}> Amount</th>
                    <th className={css.theadText}>Currency</th>
                </tr>
            </thead>

            <tbody >
                {items.map((item) =>{
                    return(<tr key={item.id} className={css.tbodyColor}>
                        <td className={css.tbody}>{item.type}</td>
                        <td className={css.tbody}>{item.amount}</td>
                        <td className={css.tbody}>{item.currency}</td>
                    </tr>)

                })}
            </tbody>
        </table>)
};