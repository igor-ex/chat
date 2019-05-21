import React, {Component} from 'react';
import './Setting.less';

export default class Settings extends Component {

    handleClick = (ev) => {
        if (ev.target !== ev.currentTarget) {
            return;
        }
        this.props.toggleSettingsModule();
    };

    render() {
        const {
            serviceMsg
        } = this.props;
        return (
            <div className="header-settings_wrapper" onClick={this.handleClick}>

                <div className="header-settings_modalWindow">
                    <div className="container-button">
                    <button
                        className="modalWindow_buttonLang"
                        onClick={() => console.log("Eng")}
                        children={"Eng"}
                    />
                    <button
                        className="modalWindow_buttonLang"
                        onClick={() => console.log("Ru")}
                        children={"Ru"}
                    />
                    </div>
                    <div className="container-toggler">
                    <label className="modalWindow_span" for="modalWindow_toggler">Server msg</label>
                    <input type="checkbox"
                           className="modalWindow_toggler"
                           checked={serviceMsg}
                           onChange={this.props.toggleServiceMsg}
                           id="modalWindow_toggler"
                    />
                    </div>
                    <div className="container-list">
                    <input
                        type="text"
                        className="modalWindow_userBlacklist" />
                    <input type="checkbox" className="modalWindow_blacklistCheckbox" />
                    </div>
                    <div className="container-button__choice">
                        <button className="modalWindow_buttonChoice"
                                onClick={this.props.toggleSettingsModule}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

