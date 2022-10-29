import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, disabled, version, type }) {
    return (
        <button disabled={disabled}
            type={type}
            className={`btn btn-${version}`} >
            {children}
        </button >
    );
}

Button.defaultProps = {
    disabled: false,
    version: 'primary',
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    version: PropTypes.string,
    type: PropTypes.string.isRequired,
};

export default Button;;
