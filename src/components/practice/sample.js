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

  const value =JSON.parse(localStorage.getItem('sample')) || [];

  localStorage.setItem('sample',JSON.stringify(sample))

  return(
    <div className="new-movie">
  {value.map=(object,index)=>{
    return(
      <div>
        <ul>
          <li>{object.name}</li>
          <li>{object.age}</li>
          <li>{object.sport}</li>
        </ul>
      </div>  
    )
  }}
    </div>
  )

}

export default Sample;



