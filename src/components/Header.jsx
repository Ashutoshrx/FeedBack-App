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
    innerText:'Feedback Form',
    bgColor:'midnightblue',
    textColor:'magenta'
}
export default Header
