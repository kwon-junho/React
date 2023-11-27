import React, { Component } from 'react';

class User extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.user !== nextProps.user;
    }
    render() {
        // const { id, username } = this.props.user.toJS();
        const { id, username } = this.props.user;
        console.log('%s가 렌더링 되고있어요!!!', username);

        return (
            <div>
            {id}/
            {username}
            </div>
        );
    }
}

export default User;