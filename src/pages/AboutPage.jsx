import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
        <b>About the developer</b>
        <div className="text-display">
          Hi,
          I am Ashutosh Satapathy, currently working as a Java Full Stack Developer. Always open to new 
          adventures and new challenges.
        </div>
        <div>
          <Link to="/">Back to Home</Link>
        </div>
    </Card>
  )
}

export default AboutPage
