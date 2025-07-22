import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Language_Selector from './Components/Language_Selector'

const App = () => {

  const {t } = useTranslation()

 const {line1} =  t("description.line1", {text: "Mohd Nawaz"}); 
 const {line2} =  t("description.line1", {text: "Mohd Nawaz"}) ;

//take the key inside of it for which we want to display the value 
//  console.log(description);  if we are trying to log it will return object instead of string 
// so use returnObjects true which will protect from this 


  return (
   <div className="container">
    <Language_Selector />

     <h1>{t("greeting")}</h1>
      <span>
      <Trans 
        i18nKey="description.line1"
        values={ {
          text: "Mohd Zaif"
        }}

       components={{1: < b />}} //here we can map the component to any tag
     
     />
      </span>

      {/* <p>{line1}</p>
      <p>{line2}</p> */}


   </div>
  )
}

export default App