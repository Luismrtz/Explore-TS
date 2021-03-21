const Theme = {
    colors: {
        main: 'ghostwhite',
        font: '#000',
        dark: '#000',
        // secondary: 'rgba(196,48,107,1)',
        // secondary: '#2c6770',
        // secondary: 'rgba(38,142,228)',
        secondary: '#2C3E50',
        tertiary: "#f7797d",
        filterLine:"#6b6b6b",
        modalWrapper: 'rgba(0,0,0,0.8)',
        boxShadow: 'rgba(0,0,0, 0.2)',
        alert: 'red',
        inputBorder: '#50a4e9',
        inputShadow:'rgba(38,142,228,0.5)'
         /* background: #2C3E50;  
background: -webkit-linear-gradient(to bottom, #4CA1AF, #2C3E50); 
background: linear-gradient(to bottom, #4CA1AF, #2C3E50);  */
    },
    fonts: {
        xxs: '1.2rem',
        xs: '1.5rem',
        s: '1.7rem',
        m: '2rem',
        l: '2.5rem',
        xl: '4rem',
        xxl: '5rem',
        xxxl: '7.5rem',
        mega: '10rem'



        //1rem,  
        //1.2rem xs
        //1.3rem xs  ==== 1.3rem xs
        //1.4rem xs
        //1.5rem s
        //1.6rem s  ==== 1.7rem s
        //1.8rem s
        //1.9rem m
        //2rem m    === 2rem m
        //2.2rem m
        //2.3rem l
        //2.5rem l   === 2.4rem l
        //2.7rem xl
        //3rem xl   ==== 3.2rem xl
        //3.5rem xxl 
        //4rem  xxl
        //6rem xxxl  ==== 5rem xxl 
        //6.5rem xxxl
        //8rem xxxl === 7.5rem xxxl
        //10rem mega  === 10rem mega
        //12rem mega


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