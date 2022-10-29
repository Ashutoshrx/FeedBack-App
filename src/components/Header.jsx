import PropTypes from 'prop-types'

function Header({innerText,bgColor,textColor}) {

    const styles={
        backgroundColor:bgColor,
        color:textColor
    }
  return (
    <header className='header' style={styles}>
      <h1>{innerText}</h1>
    </header>
  )
}

Header.defaultProps={
    innerText:'Feedback UI',
    bgColor:'rgba(0,0,0,5)',
    textColor:'#e41650'
}
export default Header
