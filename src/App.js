import { useState } from "react";
import DoktorProfil from "./components/DoktorProfil";
import Hastalar from "./components/Hastalar";
import Head from "./components/Head";
import {HastaData} from './helper/data'

function App() {
  const [displayHome, setDisplayHome] = useState(true);
  const [sellectedDoktor, setSellectedDoktor] = useState("");
  const [hastalar, setHastalar] = useState(HastaData)
  console.log(hastalar);

  return (
    <div>
      {displayHome ? (
        <>
          <Head
            setSellectedDoktor={setSellectedDoktor}
            setDisplayHome={setDisplayHome}
          />
          <Hastalar hastalar={hastalar} setHastalar={setHastalar}/>
        </>
      ) : (
        <DoktorProfil
          sellectedDoktor={sellectedDoktor}
          setDisplayHome={setDisplayHome}
          setHastalar={setHastalar}
          hastalar={hastalar}
        />
      )}
    </div>
  );
}

export default App;
