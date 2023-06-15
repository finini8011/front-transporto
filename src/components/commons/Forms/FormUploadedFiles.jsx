import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonPaginationNext from "../button/ButtonPaginationNext";
import ButtonPaginationPrev from "../button/ButtonPaginationPrev";
import SelectEntries from "../input/select/SelectEntries";
import Table from "../Table/Table"


const FormUploadedFiles = ({ title, stepNumber, data }) => {

    const titles = ["Acciones", "Descripción", "Documento", "Creador", "Destinatario", "Fecha de Creación"];
    
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

                    <Table data={data} titles={titles} />


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

