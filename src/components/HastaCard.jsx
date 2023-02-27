import { useState } from "react"

const HastaCard = ({id,text,day,bittiMi,doktor,setHastalar,hastalar}) => {
  const [bittimi, setBittimi] = useState(bittiMi)

  const handelDelete = () => {
    let filterHastalar = hastalar.filter(h => h.id !== id)
    setHastalar(filterHastalar)
  }

  return (
    <div onClick={() => setBittimi(!bittimi)} className={`flex justify-between items-center w-[90%] h-20 bg-white mx-auto my-3 rounded-lg px-3 cursor-pointer  ${bittimi ? "bg-green-400" : "bg-red-300"}`}>
      <div>
        <p>{text}</p>
        <p>{day}</p>
        <p>{doktor}</p>
      </div>
      <p>{bittimi ? 'Hasta ile ilgilenildi' : 'Hasta Beklemede'}</p>
      <button onClick={handelDelete} className="w-7 h-7 flex justify-center items-center rounded-full font-bold bg-red-500 text-white hover:text-red-500 hover:bg-white transition">
        X
      </button>
    </div>
  )
}

export default HastaCard