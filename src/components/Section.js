import React from 'react'

const Section = (props) => {
  return (
    <section id={props.id}>
      {(() => {if(props.id == 'sec-03') return <div><div className="circle circle-01"></div><div className="circle circle-02"></div><div className="circle circle-03"></div><div className="circle circle-04"><div className="circle circle-05"></div></div></div> })()}
      <div className="container">
        {(() => {if(props.id == 'sec-02') return <div className="img"><div className="img-bot"></div><div className="img-top">2020<br/>Wrapped</div></div> })()}
        <div className="content">
          <h4>{props.heading}</h4>
          <h2>{props.sub}</h2>
          <h5>{props.quote}</h5>
          <button className={props.color}>{props.button}</button>
          {(() => {if(props.id == 'sec-01') return <span>Individual plan only. Only $9.99/month after. Offer not available to users who already tried Premium. <a href="#">Terms and conditions apply</a>. Offer ends Dec 31, 2020.</span> })()}
        </div>
        {(() => {if(props.id == 'sec-01') return <div className="img"><img src="./img/balloon.png" alt=""/></div> })()}
      </div>
    </section>
  )
}

export default Section
