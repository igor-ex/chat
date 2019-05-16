import React, {Component} from 'react';
import './Setting.less';

export default class Settings extends Component {


    render() {
        return (
            <div className="header-settings_wrapper">

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
                    <span className="modalWindow_span">Server msg</span>
                    <input type="checkbox" className="modalWindow_toggler" />
                    </div>
                    <div className="container-list">
                    <input
                        type="text"
                        className="modalWindow_userBlacklist" />
                    <input type="checkbox" className="modalWindow_blacklistCheckbox" />
                    </div>
                    <div className="container-button__choice">
                        <button
                            className="modalWindow_buttonChoice"
                        >Ok</button>
                        <button
                            className="modalWindow_buttonChoice"
                        >Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

