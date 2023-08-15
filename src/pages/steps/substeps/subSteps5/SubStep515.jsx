import React, { useState,useEffect } from 'react';
import FileInput from '../../../../components/commons/input/file/FileInput';
import TableFlexCsv from '../../../../components/tables/TableFlexCsv';
import { useLazyGetDataStep5Query } from '../../../../api/services/steps/stepsApiSlice';

import "./SubSteps5.css";

const SubStep515 = () => {

  const [listData, setListData] = useState([]);
  const [getDataStep5] = useLazyGetDataStep5Query('5.1.5');

  useEffect(() => {

    const getData = async () => {
      const { data, isLoading: loading } = await getDataStep5('5.1.5');
      console.log(data, "datos")
      setListData(data);
    };
    getData();
  }, [])


  return (
    <div className='p-5'>
      <section className='pb-10'>
      <p className='pb-4 text-[#0090FF]'>
          ¿El diagnóstico del PESV al menos contiene los requisitos definidos en el paso 5 de la Metodología del PESV?
        </p>
        <div className='flex'>
          <FileInput />
          <button className='button-save' onClick={() => console.log("si")}>
            Guardar
          </button>
        </div>
      </section>
      <TableFlexCsv datos={listData} />
    </div>
  );
};

export default SubStep515;