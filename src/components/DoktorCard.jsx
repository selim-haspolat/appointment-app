const DoktorCard = ({ d, setSellectedDoktor, setDisplayHome }) => {
  const handleClick = () => {
    setSellectedDoktor(d);
    setDisplayHome(false);
  };

  return (
    <div onClick={handleClick} className="mx-auto w-64 h-72 ">
      <h2 className="text-3xl font-light bg-slate-900 text-white text-center py-0.5">
        {d.isim}
      </h2>
      <img
        src={d.image}
        alt={d.isim}
        className="object-cover object-center h-64 cursor-pointer"
      />
    </div>
  );
};

export default DoktorCard;
