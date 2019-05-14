import React, {Component} from 'react';


export default class Settings extends Component {


    render() {
        return (
            <div className="header-settings_wrapper">
                <button
                    className="header-settings_button"
                    onClick={() => console.log("settings")}
                    children={"Settings"}
                />
                <div className="header-settings_modalWindow">
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
                    <span className="modalWindow_span">Server msg</span>
                    <input type="checkbox" className="modalWindow_toggler" />
                    <input
                        type="text"
                        className="modalWindow_userBlacklist" />
                    <input type="checkbox" className="modalWindow_blacklistCheckbox" />
                </div>
            </div>
        )
    }
}

