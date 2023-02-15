import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const MarketDiffForm = () => {
  const [token1, setToken1] = useState('');
  const [token2, setToken2] = useState('');
  const [allData,setAllData] =useState([{}]);
  const [display,setDisplay] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const url =`https://script.googleusercontent.com/macros/echo?user_content_key=HUpsAgoYA3yCxP13UOAk_1Qv2ICV8Mg49f1B3Z4swO5ITagNyvjevKDaRok9lQ6kAkZe0KuJqZCZsJ1W-hvd1PwNnSPmLu2Ym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAwvzESfjfjJtOA0fe94XWysBDamm84KJUOiXFvDW57QY8loQO0yqfVIdrXAtgs-_8UZDZ1anjVgEH9ikux9WG8aVN0i6HkeWA&lib=Mc-N59_DWmDBvu7pwVajzqpogFqLoYSAg` ;
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data.data);
    setLoading(false)
  })
  }, [])

  const getApi = async (e:React.FormEvent) => { 
    e.preventDefault()

    console.log(allData);
  }  
  if (isLoading) return <p>Loading...</p>  
  // const delData = (id:number) => {
  //     allData.splice(id,1);
  //     allData.sort((a,b) => (a.token1 > b.token1)? 1:-1 ) 
  //     setDisplay(display+1);
        
    
  // }
  return (
    <div className="w-full bg-lightbg justify-center flex flex-col cursor-default  p-5 ">
      <div className="container rounded-lg shadow-lg w-full relative bg-white  lg:p-12  sm:mx-auto p-6   ">
      <form>
        <h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">แบบทดสอบ 9Q</h3>
        <div className="flex   lg:flex-row sm:flex-col mb-5 justify-around">
        <div className="container     sm:mx-auto py-4  ">
        {allData.map((contest, idx) => (
            <div key={idx} className="py-4">
              <h3 className=" text-3xl font-bold  text-center relative">ข้อที่ {idx+1}</h3>
              <h3 className=" text-3xl font-bold  text-center relative">{contest.QUESTIONNAME}</h3>
              <div className="grid grid-cols-2 grid-rows-2 m-9 text-center">
                <div className="m-9">
                  <button className="rounded bg-darkbg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300 text-white px-12 py-4 " type="submit" value="Fetch" 
                  onClick={getApi}>{contest.ASK1}</button>
                </div>
                <div className="m-9">
                  <button className="rounded bg-darkbg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300 text-white px-12 py-4 " type="submit" value="Fetch" 
                  onClick={getApi}>{contest.ASK2}</button>
                </div>
                <div className="m-9">
                  <button className="rounded bg-darkbg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300 text-white px-12 py-4 " type="submit" value="Fetch" 
                  onClick={getApi}>{contest.ASK3}</button>
                </div>
                <div className="m-9">
                  <button className="rounded bg-darkbg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300 text-white px-12 py-4 " type="submit" value="Fetch" 
                  onClick={getApi}>{contest.ASK4}</button>
                </div>
              
              </div>
              <div className="  overflow-x-auto shadow-md rounded border-collapse border border-sky-500 relative ">
              </div> 
            </div>
            ))} 
       
      
      
     
      </div>
        </div>
        <div className="flex justify-center">
          <button className="rounded bg-darkbg text-white px-12 py-4 " type="submit" value="Fetch" 
          onClick={getApi}>ส่งคำตอบ</button>
        </div>
      </form>
      </div>
      
      
    </div>
  );
};

export default MarketDiffForm;