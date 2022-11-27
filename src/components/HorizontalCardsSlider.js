import React, { useRef } from 'react'
import Card from './Card'

const HorizontalCardsSlider = ({title, Data,isLive}) => {
    const scrollable = useRef(null);
    const scrollIt = (toRight) => {
        const scrollLength = 1000
        scrollable.current.scrollBy({left: scrollLength * (toRight ? 1 : -1), behavior: "smooth"});
      }
    
  return (
    <div id='HorizontalCardsSlider' className='HorizontalCardsSlider-wrapper' >
        <h3>{title}</h3>
        <div className="horzontalcards-wrapper" ref={scrollable}>
        {
            Data.map((item,index) => {return(
                <Card {...item} isLive={isLive}/>
            )})
        }
        </div>
        <div id="toLeft" class="HorizontalCardsSlider-btn" onClick={()=>scrollIt(false)}>{"<"}</div>
        <div id="toRight" class="HorizontalCardsSlider-btn" onClick={()=>scrollIt(true)}>{">"}</div>
        
    
    </div>
  )
}

export default HorizontalCardsSlider