import React, {useState, useEffect } from 'react';
import preloader from '../assets/images/preloader.gif';

const WithLoadingDelay = props => {
    const [content, setContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setContent(true)
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return content ? <div className={props.classes}>{props.children}</div>
    : <div className={props.classes} style={{border: 'none'}}>
        <img style={{width: '70px', display: 'block', margin: 'auto'}} src={preloader} alt="loader"></img>
      </div>;
};

export default WithLoadingDelay;
