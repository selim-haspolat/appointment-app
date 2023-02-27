import HastaCard from './HastaCard'

const Hastalar = ({hastalar,setHastalar}) => {
  return (
    <div className={`bg-red-500 mt-10 container rounded-lg mx-auto py-1 ${hastalar.length === 0 && 'hidden'}`}>
      {
        hastalar.map(h => <HastaCard key={h.id} {...h} setHastalar={setHastalar} hastalar={hastalar}/>)
      }
    </div>
  );
};

export default Hastalar;
