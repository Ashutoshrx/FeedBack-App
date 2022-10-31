import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AboutPageLink() {
    return (
        <div className='about-link'>
            <Link to={'/about'}>
                <AiOutlineExclamationCircle color='red' size={'40px'} />

            </Link>

        </div>
    );
}

export default AboutPageLink;
