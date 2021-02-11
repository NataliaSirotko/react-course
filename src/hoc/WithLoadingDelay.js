import React, {useState, useEffect } from 'react';
import preloader from '../assets/images/preloader.gif';

const withLoadingDelay = (WrappedComponent) => {
    return props => {
        const [content, setContent] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                setContent(true)
            }, 2000);

            return () => clearTimeout(timer);
        }, []);

        return content ? <WrappedComponent {...props} />
        : <div className='card' style={{border: 'none'}} ><img style={{width: '70px', display: 'block', margin: 'auto'}} src={preloader} alt="loader"></img></div>
    }
};

export default withLoadingDelay;
