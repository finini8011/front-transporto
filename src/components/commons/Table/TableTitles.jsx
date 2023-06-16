import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";

const Table = ({ data, icons }) => {

    return (
        <tr>
            {data.map((data, key) => (
                <th key={key} scope="col" className="px-6 py-3 border border-slate-300">
                    <div className="grid grid-cols-6">
                        <div className="flex justify-start col-span-3">
                            {data}
                        </div>
                        {icons
                            ?
                            <div className="flex justify-end col-span-3 justify-end">
                                <FontAwesomeIcon icon={faArrowDownShortWide} />
                            </div>
                            :
                            ""
                        }

                    </div>
                </th>
            ))}
        </tr>
    );
};

export default Table;

