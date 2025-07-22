    import i18n from 'i18next';
    import LanguageDetector from 'i18next-browser-languagedetector';
    import  { initReactI18next} from 'react-i18next';
    import Backend from "i18next-http-backend"

    i18n.use(Backend).use(LanguageDetector).use(initReactI18next) //it is related to backend and will run asynchronously
    .init({
        debug: true, //it will give all the eror 
        // lng: "en", //set default language 
        //in case if any key is missing we can use fallbackLng
        fallbackLng: "en",
        returnObjects: true,
        backend: {
            localPath: "locales/{{lng}}/translation.json"
        }
       
        // resources: {
            // en: {
                // translation: {
                //     greeting: "Hello, Friend how are you!",
                //     description: {
                //         line1: "This is how we do translation -> <1>{{text}}</1> from line 1",
                //         line2: "This is how we do translation -> <1>{{text}}</1> from line 2"
                //     },
                // },
            // },

            // fr: {
            //      translation: {
            //         greeting: "Bonjour ji mitr kya hal chal !",
            //      },
            // },

        //    hi: {
        //     translation: {
        //         greeting: "हेलो जी मित्र क्या हाल चाल",
        //         description: {
        //             line1: "हम ऐसे ट्रांसलेशन करते हैं -> <1>{{text}}</1> लाइन 1 से",
        //             line2: "हम ऐसे ट्रांसलेशन करते हैं -> लाइन 2 से टेक्स्ट"
        //         },
        //     }
        // },

    //       ar: {
    //         translation: {
    //             greeting: "مرحباً يا صديقي، كيف الحال؟",
    //             description: {
    //             line1: "هكذا نقوم بالترجمة -> النص من السطر الأول",
    //             line2: "هكذا نقوم بالترجمة -> النص من السطر الثاني"
    //             },
    //         }
    // }
        // }


        
    })