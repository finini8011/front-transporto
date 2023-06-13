import Form from "./Form";
const FormFlex = ({inputs, buttons, titleForm, step, nameStep, cols, onSubmit}) => {
    return (
    <>
      <section className="bg-white text-gray-800 flex flex-col gap-4">
        <div className="text-white bg-primary-600 p-3 rounded-t-md text-base">
          {step} {nameStep}
        </div>
        <Form title={titleForm} inputs={inputs} cols={cols}  buttons={buttons} onSubmit={onSubmit}/>
      </section>
    </>
  );
};

export default FormFlex;
