import React, {Component} from 'react';

export default class UserBlock extends Component {

    render() {
        const {
            users
        }
            = this.props;
        const uElems = users.map((item) => {
            return (
                <div key={item} className="sidebar__user">
                    {item}
                </div>
            );
        });
        return (
            <>
                {uElems}
            </>
        );
    }
}