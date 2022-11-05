import React from 'react';
import spinner from '../assets/spinner.gif';

function Loading() {
    return (
        <img src={spinner} alt='Loading..' style={{ width: '400px', display: 'block', margin: 'auto' }} />

    );
}
export default Loading;
