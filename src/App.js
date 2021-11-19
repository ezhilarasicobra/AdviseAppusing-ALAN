import React,{useEffect,useState} from 'react'
import alanBtn  from '@alan-ai/alan-sdk-web'
import './App.css';
const alankey='1b944d8df17027154a95b7b03f5ec6e82e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {
  const[advise,setAdvise]=useState("")
useEffect(()=>{
alanBtn({
  key:alankey,
  onCommand:({command,result})=>{
if(command==='getadvise'){
  setAdvise(result.slip.advice)

}
  }
})
},[])
  return (
    <div className="app">
        <div className="card">
          <h1>Try saying "GIVE ME A ADVICE"</h1>
          <h1 className="heading">{advise}</h1>
        </div>
      </div>
  );
}

export default App;
