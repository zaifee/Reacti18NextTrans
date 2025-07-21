import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import  { initReactI18next} from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true, //it will give all the eror 
    // lng: "en", //set default language 
    //in case if any key is missing we can use fallbackLng
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                greeting: "Hello, Friend how are you!",
                description: {
                    line1: "This is how we do translation -> {{text}} from line 1",
                    line2: "This is how we do translation -> {{text}} from line 2"
                },
            },
        },

        // fr: {
        //      translation: {
        //         greeting: "Bonjour ji mitr kya hal chal !",
        //      },
        // },

        ar : {
            translation: {
                greeting: "हेलो जी मित्र क्या हल चल",
                  description: {
                    line1: "This is how we do translation -> {{text}} from line 1",
                    line2: "This is how we do translation -> text from line 2"
                },
            }

        },

        ar: {
        translation: {
            greeting: "مرحباً يا صديقي، كيف الحال؟",
            description: {
            line1: "هكذا نقوم بالترجمة -> النص من السطر الأول",
            line2: "هكذا نقوم بالترجمة -> النص من السطر الثاني"
            },
        }
}



    }
})