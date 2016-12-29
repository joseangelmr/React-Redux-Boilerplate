import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
    };

    render() {

        this.props.actions.homeAction();

        return (
            <div className="home-default-page">
                Home Page
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultPage);
