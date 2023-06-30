
const Table = ({ data }) => {

    return (
        <tbody className="border border-slate-300">
            {data.length
                ? data.map((data, key) => (
                    <tr className=" border-b border border-slate-300 bg-white dark:border-gray-700" key={key}>
                        <th scope="row" className="px-6 py-4 border border-slate-300  font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                            {data.actions}
                        </th>
                        <td className="px-6 py-4 border border-slate-300">
                            {data.description}
                        </td>
                        <td className="px-6 py-4 border border-slate-300">
                            {data.document}
                        </td>
                        <td className="px-6 py-4 border border-slate-300">
                            {data.creator}
                        </td>
                        <td className="px-6 py-4 border border-slate-300">
                            {data.receiver}
                        </td>
                        <td className="px-6 py-4 border border-slate-300">
                            {data.dateCreation}
                        </td>
                    </tr>
                )) :
                <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 border border-slate-300 text-center">
                    <th colSpan="6">No data available data</th>
                </tr>
            }
        </tbody>
    );
};

export default Table;

