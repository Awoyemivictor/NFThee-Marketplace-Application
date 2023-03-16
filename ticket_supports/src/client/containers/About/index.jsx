import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { showModal, hideModal } from 'actions/common'

import helpers from 'lib/helpers'

class AboutContainer extends React.Component {
  componentDidMount () {
    helpers.setupScrollers()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    helpers.resizeAll()
  }

  render () {
    return (
      <div className='nopadding page-content'>
        <div className='uk-grid full-height scrollable' style={{ padding: '0 15px' }}>
          <div className='uk-width-1-2 uk-position-relative' style={{ padding: '25px 0 0 0' }}>
            
          </div>
        </div>
      </div>
    )
  }
}

AboutContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  viewdata: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  viewdata: state.common.viewdata
})

export default connect(mapStateToProps, { showModal, hideModal })(AboutContainer)
