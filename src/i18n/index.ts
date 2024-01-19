import spanish from './es.json'
import catalan from './ca.json'

const LANGUAGES = {
    CATALAN: 'ca',
    SPANISH: 'es',
}

export const getI18n  = ({ currentLocale = 'es' } : { currentLocale?: string}) => {    
    if (currentLocale === LANGUAGES.CATALAN) return catalan
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    return spanish
}