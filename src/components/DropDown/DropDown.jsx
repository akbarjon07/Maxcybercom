import "./dropDown.css";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../i18n";

export const DropDown = () => {
    const dropRef = useRef();
    const menuRef = useRef();
    const { i18n } = useTranslation();
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(() => {
        const storedLang = localStorage.getItem('lang');
        const defaultIndex = storedLang ? availableLanguages.indexOf(storedLang) : 1;
        return defaultIndex !== -1 ? defaultIndex : 1;
    });

    const changeLang = (lang) => {
        setIsDropDownVisible(false);
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropRef.current && !dropRef.current.contains(e.target) &&
                menuRef.current && !menuRef.current.contains(e.target)
            ) {
                setIsDropDownVisible(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className='dropdown'>
            <div className="dropdown-selection flex items-center" ref={dropRef} onClick={() => {
                setIsDropDownVisible(!isDropDownVisible);
            }}>
                {availableLanguages[selectedItemIndex]}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.22922 9.23653C6.53485 8.92116 7.03037 8.92116 7.336 9.23653L12 14.0501L16.664 9.23653C16.9696 8.92116 17.4652 8.92116 17.7708 9.23653C18.0764 9.55197 18.0764 10.0634 17.7708 10.3788L12.5534 15.7635C12.2478 16.0788 11.7522 16.0788 11.4466 15.7635L6.22922 10.3788C5.92359 10.0634 5.92359 9.55197 6.22922 9.23653Z" fill="white"/>
                </svg>
            </div>

            {isDropDownVisible && (
                <div className="items-holder" ref={menuRef}>
                    {availableLanguages.map((item, index) => (
                        <div key={index} className="dropdown-item" onClick={() => {
                            setSelectedItemIndex(index);
                            changeLang(item);
                        }}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}



// import "./dropDown.css";
// import { useState, useRef} from "react";
// import { useTranslation } from "react-i18next";
// import { availableLanguages } from "../../i18n";

// export const DropDown = () => {

//     const dropRef = useRef();
//     const menuRef = useRef();
//     const { i18n } = useTranslation();
//     const [isDropDownVisible, setIsDropDownVisible] = useState(false);
//     const [selectedItemIndex, setSelectedItemIndex] = useState(null);

//     const changeLang = (lang) => {
//         setIsDropDownVisible(false);
//         i18n.changeLanguage(lang);
//         localStorage.setItem("lang", lang);
//     };

//     window.addEventListener("click", (e) => {
//         if (e.target !== dropRef.current && e.target !== menuRef.current) {
//             setIsDropDownVisible(false)
//         }
//     })

//   return (
//     <div className='dropdown'>
//         <div className="dropdown-selection flex items-center" ref={dropRef} onClick={e => {
//             setIsDropDownVisible(!isDropDownVisible);
//         }}>
//             {selectedItemIndex !== null ? availableLanguages[selectedItemIndex] : localStorage.getItem('lang') || availableLanguages.ru}

//             <svg ref={dropRef} onClick={e => {setIsDropDownVisible(!isDropDownVisible)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M6.22922 9.23653C6.53485 8.92116 7.03037 8.92116 7.336 9.23653L12 14.0501L16.664 9.23653C16.9696 8.92116 17.4652 8.92116 17.7708 9.23653C18.0764 9.55197 18.0764 10.0634 17.7708 10.3788L12.5534 15.7635C12.2478 16.0788 11.7522 16.0788 11.4466 15.7635L6.22922 10.3788C5.92359 10.0634 5.92359 9.55197 6.22922 9.23653Z" fill="white"/>
//             </svg>
//         </div>

//         {
//             isDropDownVisible ? (
//                 <div className="items-holder" ref={menuRef}>
//                 {
//                     availableLanguages.map((item, index) => {
//                         return (
//                             <div key={index} className="dropdown-item" onClick={e =>{
//                                     setSelectedItemIndex(index)
//                                     changeLang(e.target.textContent)
//                                 }}>
//                                 {item}
//                             </div>
//                         )
//                     })
//                 }
//                 </div>
//             ) : <></>
//         }
//     </div>
//   )
//
