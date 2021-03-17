const Theme = {
    colors: {
        main: 'ghostwhite',
        dark: '#000',
        rose: 'rgba(196,48,107,1)'
    },
    fonts: {
        s: '1rem',
        m: '1.6rem',
        l: '2rem'
    },
    mediaQueries: {
        // 62.5% conversion doesnt apply here
        below1500: `only screen and (max-width: 93.75rem)`,
        below1000: `only screen and (max-width: 62.5rem)`,
        below750: `only screen and (max-width: 46.875rem)`,
        below650: `only screen and (max-width: 40.625rem)`,
        below500: `only screen and (max-width: 31.25rem)`,
        below400: `only screen and (max-width: 25rem)`,
        

    }


};

export default Theme;