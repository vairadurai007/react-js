import React from "react";



function Sample(){

  const sample=[
    {
      'name':'diamond',
      'age':23,
      'sport':'cricket'
    },
    {
      'name':'diamond',
      'age':23,
      'sport':'cricket'
    },
    {
      'name':'diamond',
      'age':23,
      'sport':'cricket'
    }
  ];
  //  setObj=()=>{
    
  // }
  return(
    <div className="new-movie">
  {sample.map=(object,index)=>{
    return(
      <div>
        <Sample objectdata={object}/>
      </div>  
    )
  }}
    </div>
  )

}

export default Sample;



