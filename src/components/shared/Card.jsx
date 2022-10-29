import PropTypes from 'prop-types';

function Card({ children }) {
    // console.log(children[0]);
    return (
        /* below snippet of code is used for conditional class, we use className, similarly we can use
         conditionals styles.
         <div className={`card ${reverse ? ' reverse' : null}`} >
             {children}
         </div >
        <div className={`card ${children[0]._owner.key % 2 !== 0 && 'reverse'}`} >
            {children}
        </div>*/
        <div className="card">
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
