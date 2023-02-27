import { useState } from "react";
import HastaCard from "./HastaCard";

const DoktorProfil = ({
  setDisplayHome,
  sellectedDoktor,
  setHastalar,
  hastalar,
}) => {
  const { isim, image } = sellectedDoktor;
  const [formData, setFormData] = useState({ name: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", date: "" });
    setHastalar([
      ...hastalar,
      {
        id: hastalar.length + 1,
        text: formData.name,
        day: formData.date,
        bittiMi: false,
        doktor: sellectedDoktor.isim,
      },
    ]);
  };

  return (
    <div className="text-center">
      <img
        className="w-52 h-52 object-cover object-center mx-auto mt-3  border-4 border-red-600 rounded-lg"
        src={image}
        alt={isim}
      />
      <div></div>
      <p className="my-5">{isim}</p>
      <button
        className="border border-red-500 text-black hover:text-white hover:bg-red-500 rounded-md px-3 py-1 transition-colors"
        onClick={() => setDisplayHome(true)}
      >
        Anasayfa
      </button>
      <div className="mt-16">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          <div className="col-span-2 flex flex-col m-10">
            <label className="text-left" htmlFor="name">
              Hasta İsmi
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              className="border px-2 py-1 rounded-lg"
              type="text"
              id="name"
              placeholder="isim"
              required
            />
          </div>
          <div className="col-span-2 flex flex-col m-10">
            <label className="text-left" htmlFor="date">
              Randevu Tarihi
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              value={formData.date}
              className="border px-2 py-1 rounded-lg"
              type="date"
              id="date"
              required
            />
          </div>
          <button
            className="col-span-2 md:col-start-2 md:col-end-4 mx-10 px-3 py-1 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
            type="submit"
          >
            Hasta Ekle
          </button>
        </form>
      </div>
      <div className={`bg-red-500 mt-10 container rounded-lg mx-auto py-1 text-left  ${hastalar.length === 0 && 'hidden'}`}>
        {hastalar
          .filter((h) => h.doktor === sellectedDoktor.isim)
          .map((x) => (
            <HastaCard key={x.id} {...x} hastalar={hastalar} setHastalar={setHastalar} />
          ))}
      </div>
    </div>
  );
};

export default DoktorProfil;
