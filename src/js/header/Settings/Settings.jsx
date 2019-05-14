import React from 'react';
import PureComponent from "../../../base/pureComponent/PureComponent";
import './Setting.less';


export default class Settings extends PureComponent {


    render() {
        return (
            <div className="header-settings_wrapper">

                <div className="header-settings_modalWindow">
                    <div>
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
                    <div>

                    <span className="modalWindow_span">Server msg</span>
                    <input type="checkbox" className="modalWindow_toggler" />
                    </div>
                    <div>
                    <input
                        type="text"
                        className="modalWindow_userBlacklist" />
                    <input type="checkbox" className="modalWindow_blacklistCheckbox" />
                    </div>
                </div>
            </div>
        )
    }
}

