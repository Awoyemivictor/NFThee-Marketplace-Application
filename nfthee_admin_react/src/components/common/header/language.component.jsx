import React from 'react';
import {
    setTranslations,
    setDefaultLanguage,
    setLanguageCookie,
    setLanguage,
    translate,
} from 'react-switch-lang';
import en from '../../../assets/i18n/en.json';
import es from '../../../assets/i18n/es.json';
import pt from '../../../assets/i18n/pt.json';
import fr from '../../../assets/i18n/fr.json';

setTranslations({ en, es, pt, fr });
setDefaultLanguage('en');
setLanguageCookie();

const Language = () =>  {
        const handleSetLanguage = (key) => {
            setLanguage(key);
        };
        return (
            <li className="onhover-dropdown">
                <a className="txt-dark" href="#javaScript">
                    <img className="align-self-center pull-right mr-2" src={require("../../../assets/images/dashboard/translate.png")} alt="header-translate" />
                </a>
                <ul className="language-dropdown onhover-show-div p-20">
                    <li onClick={() => handleSetLanguage('en')}>
                        <a href="#javaScript" data-lng="en">
                            <i className="flag-icon flag-icon-ws"></i> English
                        </a>
                    </li>
                    <li onClick={() => handleSetLanguage('es')}>
                        <a href="#javaScript" data-lng="es">
                            <i className="flag-icon flag-icon-va"></i> Spanish
                        </a>
                    </li>
                    <li onClick={() => handleSetLanguage('pt')}>
                        <a href="#javaScript" data-lng="pt">
                            <i className="flag-icon flag-icon-id"></i> Portuguese
                        </a>
                    </li>
                    <li onClick={() => handleSetLanguage('fr')}>
                        <a href="#javaScript" data-lng="fr">
                            <i className="flag-icon flag-icon-fr"></i> French
                        </a>
                    </li>
                </ul>
            </li>
        );
    }

export default translate(Language);