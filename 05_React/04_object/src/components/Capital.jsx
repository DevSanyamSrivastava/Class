import './capital.css'
const Capital = () => {
  const allCapitals = [
    {
      state: "U.P",
      cap: "Lucknow",
      stateCode: "54",
        population  :{
        male: "678798",
        female : "7668768"
      }
    },
    {
      state: "M.P",
      cap: "Bhopal",
      stateCode: "74",
        population  :{
        male: "678798",
        female : "7668768"
      }
    },
    {
      state: "Arunachal Pradesh",
      cap: "Itanagar",
      stateCode: "67",
      population  :{
        male: "678798",
        female : "7668768"
      }
    },
    {
      state: "Keral",
      cap: "Trivantpuram",
      stateCode: "23",
        population  :{
        male: "678798",
        female : "7668768"
      }
    },
    {
      state: "Punjab",
      cap: "Chandigarh",
      stateCode: "45",
        population  :{
        male: "678798",
        female : "7668768"
      }
    },
  ];

  return (
 
     <div className="outer">
      {allCapitals.map((allCapital) => (
        <>
         
            <div className="inner">
              <p>{allCapital.state}</p>
              <p>{allCapital.cap}</p>
              <p>{allCapital.stateCode}</p>
              <p>Male Population: {allCapital.population.male}</p>
              <p>Female Population:{allCapital.population.female}</p>
            </div>
       
        </>
      ))} 
         </div>
   
  );
};

export default Capital;
