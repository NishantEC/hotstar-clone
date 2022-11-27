import React from 'react'

const Card = ({imgUrl,isLive}) => {
  return (
<div className="card-wrapper" style={{aspectRatio:isLive?"2/1":"49/65",minWidth:isLive?"220px":"169px"}}>
<img src={imgUrl} alt="imgUrlNotFound" />
<div className="card-content-wrapper">

<div className="card-content">
    dewjkd
</div>
</div>

</div>
  )
}

export default Card