import React, { useState, useEffect } from 'react';
import FileInput from '../../../../components/commons/input/file/FileInput';
import TableFlexCsv from '../../../../components/tables/TableFlexCsv';
import { useLazyGetDataStep5Query } from '../../../../api/services/steps/stepsApiSlice';
import "./SubSteps5.css";

const SubStep511 = () => {

  const [listData, setListData] = useState([]);
  const [getDataStep5] = useLazyGetDataStep5Query('5.1.1');

  useEffect(() => {

    const getData = async () => {
      const { data, isLoading: loading } = await getDataStep5('5.1.1');
      console.log(data, "datos")
      setListData(data);
    };
    getData();
  }, [])

  return (
    <div className='p-5'>
      <section className='pb-10'>
        <FileInput />
        <button className='button-save' onClick={() => console.log("si")}>
          Guardar
        </button>
      </section>
      <TableFlexCsv datos={listData} />
    </div>
  );
};

export default SubStep511;