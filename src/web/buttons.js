import React from 'react'
import PropTypes from 'prop-types'

function Component4(props) {
  return (
    <div>
      <button>{props.text4}</button>
    </div>
  )
}

Component4.propTypes = {
  text4: PropTypes.string
}
export default Component4
