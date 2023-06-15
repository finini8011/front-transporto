
const Table = ({ data }) => {

    return (
        <tbody className="border border-slate-300">
            {data.length
                ? data.map((data, key) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={key}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data.actions}
                        </th>
                        <td className="px-6 py-4">
                            {data.description}
                        </td>
                        <td className="px-6 py-4">
                            {data.document}
                        </td>
                        <td className="px-6 py-4">
                            {data.creator}
                        </td>
                        <td className="px-6 py-4">
                            {data.receiver}
                        </td>
                        <td className="px-6 py-4">
                            {data.dateCreation}
                        </td>
                    </tr>
                )) :
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border border-slate-300 text-center">
                    <th colSpan="6">No data available data</th>
                </tr>
            }
        </tbody>
    );
};

export default Table;

