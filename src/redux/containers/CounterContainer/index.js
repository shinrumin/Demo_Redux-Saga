import { connect } from 'react-redux'
import Counter from '../../../conponents/Couter'
import { incrementAction, decrementAction } from '../../actions'


const mapStateToProps = ({ counter }) => ({
    count: counter.count
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, { incrementAction, decrementAction })(Counter)
