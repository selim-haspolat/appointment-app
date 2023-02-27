import { DoktorData } from "./../helper/data";
import DoktorCard from "./DoktorCard";

const Head = ({ setSellectedDoktor, setDisplayHome }) => {
  return (
    <div>
      <h1 className="uppercase text-7xl text-red-500 text-center mt-4 mb-7">
        Hospital
      </h1>
      <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {DoktorData.map((d) => (
          <DoktorCard
            key={d.id}
            d={d}
            setSellectedDoktor={setSellectedDoktor}
            setDisplayHome={setDisplayHome}
          />
        ))}
      </div>
    </div>
  );
};

export default Head;
