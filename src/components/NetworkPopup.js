import Popup from "./common/Popup";
import bsc from "../img/networks/bsc.svg";
import eth from "../img/networks/eth.svg";
import opera from "../img/networks/opera.svg";

export default function NetworkPopup({ popupShow, setPopupShow, }) {
    return (
        <Popup popupShow={popupShow} setPopupShow={setPopupShow} className="popup--network">
            <div className="popup__row">
                <h1 className="popup__title">Choose Network</h1>
                <button
                    className="popup__remove remove"
                    onClick={() => setPopupShow(false)}
                ></button>
            </div>
            <ul className="popup__list">
                <li className="popup__item">
                    <button className="popup__button active">
                        <span>Binance Smart Chain Mainnet</span>
                        <img src={bsc} alt="metamask" className="popup__button-icon" />
                    </button>
                </li>
                <li className="popup__item">
                    <button className="popup__button">
                        <span>Ethereum Mainnet</span>
                        <img src={eth} alt="metamask" className="popup__button-icon" />
                    </button>
                </li>
                <li className="popup__item">
                    <button className="popup__button">
                        <span>Fantom Opera</span>
                        <img src={opera} alt="metamask" className="popup__button-icon" />
                    </button>
                </li>
            </ul>
        </Popup>
    );
}
