import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonPaginationNext from "../button/ButtonPaginationNext";
import ButtonPaginationPrev from "../button/ButtonPaginationPrev";
import SelectEntries from "../input/select/SelectEntries";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";


const FormUploadedFiles = ({ title, stepNumber }) => {

    const th = ["Acciones", "Descripción", "Documento", "Creador", "Destinatario", "Fecha de Creación"];
    const data = [];

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    return (
        <section className="bg-white text-gray-800 flex flex-col w-full">
            <div className="px-2 mt-2 shadow-md rounded-md">
                <div className="p-3 rounded-t-md text-center">
                    {title}
                </div>
                <div className="grid grid-cols-6 gap-6 mb-2">
                    <SelectEntries text="10" />
                    <div className="col-end-8 col-span-2 flex justify-end">
                        <label className="text-sm font-medium text-gray-900 dark:text-white mr-2">
                            Search:
                        </label>
                        <input
                            className=" border border-slate-300 w-36"
                            id="search"
                        />
                    </div>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {th.map((th, key) => (
                                    <th key={key} scope="col" className="px-6 py-3 border border-slate-300">
                                        <div className="grid grid-cols-6">
                                            <div className="flex justify-start col-span-3">
                                                {th}
                                            </div>
                                            <div className="flex justify-end col-span-3 justify-end">
                                                <FontAwesomeIcon icon={faArrowDownShortWide} />
                                            </div>
                                        </div>

                                        {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a> */}

                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="border border-slate-300">
                            {data.length
                                ? data.map((data) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border border-slate-300 text-center">
                                        <th colSpan="6">{data}</th>
                                    </tr>
                                )) :
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border border-slate-300 text-center">
                                    <th colSpan="6">No data available data</th>
                                </tr>
                            }
                        </tbody>
                        <tfoot className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {th.map((th, key) => (
                                    <th key={key + "2"} scope="col" className="px-6 py-3 border border-slate-300">
                                        <div className="flex items-center">
                                            {th}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </tfoot>
                    </table>



                    <div className="grid grid-cols-6 gap-6 mt-2 mb-5">
                        <div className="col-start-1 col-end-3 ...">Showing 0 to 0 of 0 entries</div>
                        <div className="col-end-8 col-span-2 flex justify-end">
                            <div className="inline-flex">
                                <ButtonPaginationPrev text="Previous" />
                                <ButtonPaginationNext text="Next" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default FormUploadedFiles;


