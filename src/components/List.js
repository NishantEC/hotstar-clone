import React from 'react'
import ListData from '../assets/ListData'


    
    

const List = () => {

  console.log(ListData);
  return (
    <div className="list-wrapper">
        <div className="list-innerwrapper">{
        
        ListData.map((item,index)=>(
<div className="list-component" key={index}>
    
            <img src={item.imgUrl} alt="shows-list"/>
        </div>
        ))
    }
        
      </div>  
    </div>
  )
}

export default List