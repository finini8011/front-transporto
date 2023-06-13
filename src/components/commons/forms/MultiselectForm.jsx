import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../input/text/Input";
import Select from "../input/select/Select";
import Textarea from "../input/text/Textarea";
import ButtonSaveForm from "../button/ButtonSaveForm"

const arrState = ["...", "..."];

const MultiSelectForm = ({ title, stepNumber }) => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    return (
        <section className="bg-white text-gray-800 flex flex-col w-full">
            <div className="shadow-md rounded-md">
                <div className="text-white bg-blue-500 p-3 rounded-t-md text-base font-semibold">
                    {title}
                </div>
                <div className="px-2 mt-2">

                    <div className="py-2 grid grid-cols-3 gap-2">
                        <Select
                            type="text"
                            label="Cambiar estado"
                            data={arrState} //
                            {...register("changeState")}
                        />

                        <Textarea
                            label="Observaciones sobre el hallazgo o la no aplicación del requisito"
                            col="col-span-2"
                            {...register("observations")}
                        />

                    </div>
                    <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="py-2 grid grid-cols-3 gap-2">
                        <Select
                            type="text"
                            label="Estado Actual"
                            disabled="{{disabled}}"
                            data={arrState} //
                            {...register("state")}
                        />

                    </div>
                </div>
                <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
                <ButtonSaveForm text="Guardar"/>
            </div>
        </section>
    );
};

export default MultiSelectForm;


