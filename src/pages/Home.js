import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../store/i18nSlice';
import { DEFAULT_LANG } from '../utils/app.constants';

const Home = (props) => {
    const dispatch =  useDispatch();

    useEffect( () => { 
        /* load initial state */
        dispatch(changeLanguage(DEFAULT_LANG));  
    }, [dispatch]);

    return(
        <main >{ props.children }</main>
    );
}

export default Home;