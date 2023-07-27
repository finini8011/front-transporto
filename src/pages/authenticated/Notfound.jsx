import notFound from "../../img/notFound.png"
export default function DefaultLayout() {
  return (
    <div>
      <div>
        <img
          src={notFound}
          width={900}
          alt="icon"
          className="m-auto w-2/5"
        />
      </div>
    </div>
  );
}
