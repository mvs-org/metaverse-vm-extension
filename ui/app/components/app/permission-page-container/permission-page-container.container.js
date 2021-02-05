import { connect } from 'react-redux'
import { getMetaverseVMIdentities } from '../../../selectors'
import PermissionPageContainer from './permission-page-container.component'

const mapStateToProps = (state, ownProps) => {
  const { selectedIdentities } = ownProps

  const allIdentities = getMetaverseVMIdentities(state)
  const allIdentitiesSelected = Object.keys(selectedIdentities).length === Object.keys(allIdentities).length && selectedIdentities.length > 1

  return {
    allIdentitiesSelected,
  }
}

export default connect(mapStateToProps)(PermissionPageContainer)
