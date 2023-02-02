import React from 'react'

const ProgressBar = (props) => {
return(
  <div className={props.className}>
    <h3>{props.title}</h3>
    <div className="years">
      <span>years</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
    </div>

    <div>
      {
        props.languages.map((item) =>{
          let xpYears = 2.5;
          let progressBar = item.xp / xpYears * 100 + '%';

          return (
            <div key={item.id} className="languagesList">
              <li className={item.value}>{item.value}</li>
              <div className={"progressBar "+item.value} style={{width:progressBar}}></div>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}
export default ProgressBar
