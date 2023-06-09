import TableTitles from "../Table/TableTitles"
import TableBody from "../Table/TableBody"

const Table = ({ data, titles }) => {

    return (
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 bg-gray-50 bg-white dark:text-gray-400">
                <TableTitles data={titles} icons={true} />
            </thead>
            <TableBody data={data} />
            <tfoot className="text-xs text-gray-700 bg-gray-50 bg-white dark:text-gray-400">
                <TableTitles data={titles} />
            </tfoot>
        </table>
    );
};

export default Table;

