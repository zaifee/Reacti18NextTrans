import React, { useEffect } from 'react'
import '../App.css'
import { useTranslation } from 'react-i18next';

const languages = [
    {code: "en", lang: "English"},
    {code: "fr", lang: "French"},
    {code: "hi", lang: "Hindi"},
    {code: "ar", lang: "Arabic"}
]



const Language_Selector = () => {

    const {i18n} =  useTranslation();

    const changeLanguage = (lng) => {
     i18n.changeLanguage(lng);
    };

    useEffect(() => {
        console.log(i18n.dir());
        document.body.dir = i18n.dir(); //gives the current laguage direction
    }, [i18n, i18n.language]);


  return (
    <div className='btn-container'>
        {
            languages.map((lng, code) => (
                <button  className={lng.code === i18n.language ? "selected": ""}   key={code} onClick={() => changeLanguage(lng.code)}>{lng.lang}</button>
            ))
        }
    </div>
  )
}

export default Language_Selector