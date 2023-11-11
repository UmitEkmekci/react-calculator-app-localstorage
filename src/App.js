import { useState } from "react";
import { Screen } from "./components/Screen"; // Süslü parantez içinde component'leri import et dedi.
import { Keypad } from "./components/Keypad"; // Süslü parantez içinde component'leri import et dedi.

import AppCss from "./styles/App.css"

function App() {

  const [result, setResult] = useState("");

  const [resultList, setResultList] = useState([]);

  const handleButton = (event) => {
    if (result != "Error"){
      setResult(result.concat(event.target.value))
    } else {
      setResult("")
    }

  }

  const handleClear = () => {
    setResult("");
  }


  const handleCalculate = () => {
    try {
      // "eval" fonksiyonunu kullanarak matematiksel ifadeyi değerlendir ve sonucu string olarak set et.
      setResult(eval(result).toString());
      resultList.push(eval(result).toString());
      console.log(resultList);

      localStorage.setItem('ResultArray',JSON.stringify(resultList));

    }
    catch (error) {
      // Eğer bir hata oluşursa, sonucu "Error" olarak set et.
      setResult("Error");
    }

    if (result == "Error") {
      setResult("Error") // Error ekrandayken "eşittir"'e basılırsa yine ekranda "Error" yazar.
    }
  }


  const handleBackspace = () => {
    if (result === "") {
      setResult("")
    }
    else if (result === "Error") {
      setResult("");
    } 
    else {
      setResult(result.slice(0, -1))
    }
  }

  return (
    <div className="container">
      <Screen result={result} />
      <Keypad result={result} handleButton={handleButton} handleClear={handleClear} handleBackspace={handleBackspace} handleCalculate={handleCalculate} />


    </div>
  );
}

export default App;