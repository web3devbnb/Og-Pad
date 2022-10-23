import NumberFormat from "react-number-format";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import Badge from "../../common/Badge";
import More from "../../../Icons/More";
import Telegram from "./../../../Icons/Telegram";
import Twitter from "./../../../Icons/Twitter";
import discord from "./../../../Icons/discord.png";
import facebook from "./../../../Icons/facebook.webp";
import github from "./../../../Icons/github.png";
import instagram from "./../../../Icons/instagram.png";
import reddit from "./../../../Icons/reddit.jpg";
import Globe from "./../../../Icons/Globe";
import { useState } from "react";
import truncate from "../../../services/truncate";

export default function TokenCard({ item }) {
  const [flipped, setFlipped] = useState(false);

  function toggleFlip() {
    setFlipped(!flipped);
  }

  const CardFooter = () => {
    return (
      <div className="card__row card__row--footer">
        <Link
          to={`/launchpad_list/${item.id}/${item.address}`}
          className="card__button button"
        >
          View Details
        </Link>
        {!item.cancelled && item.status !== 0 && (
          <div className="card__date">
            <h6 className="card__date-title">
              {item.startDate < Date.now()
                ? "Sale ends in:"
                : "Sale starts in:"}
            </h6>
            <p className="card__date-value">
              <Countdown
                date={
                  new Date(
                    item.startDate < Date.now() ? item.endDate : item.startDate
                  )
                }
              />
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={
        "card card--token card--flip" +
        (flipped ? " flipped" : "") +
        " card--" +
        item?.level
      }
    >
      <div className="card__wrapper">
        <div className="card__face card__face--front">
          <div className="card__row">
            <img src={item?.image} alt={item?.name} className="card__image" />
            <button className="card__more" onClick={toggleFlip}>
              <More className="card__more-icon" />
            </button>
            <Badge item={item} />
          </div>
          <ul className="card__features">
            <li className="card__features-item card__features-item--likes">
              <span className="card__features-text">{item?.likes}</span>
            </li>
            <li
              className={
                "card__features-item card__features-item--audit" +
                (item?.audited ? " active" : "")
              }
            ></li>
            <li
              className={
                "card__features-item card__features-item--verify" +
                (item?.verified ? " active" : "")
              }
            ></li>
          </ul>
          <h1 className="card__title">{item?.name}</h1>
          <div className="card__price">
            1 BNB ={" "}
            <NumberFormat
              value={item?.bnbPrice}
              displayType="text"
              thousandSeparator={true}
            />{" "}
            {item?.name}
          </div>
          <p className="card__desc">{item?.desc}</p>
          <div className="card__cap">
            <h4 className="card__cap-title">Soft/Hard Cap</h4>
            <p className="card__cap-value">
              {item?.cap[0] / 10 ** 18} BNB - {item?.cap[1] / 10 ** 18} BNB
            </p>
          </div>
          <div className="progress progress--card">
            <div className="progress__header">
              <h5 className="progress__title">Progress</h5>
              <div className="progress__percentage">
                {item?.progress.toFixed(2)}%
              </div>
            </div>
            <div className="progress__bar">
              <span
                className="progress__track"
                style={{ width: item?.progress + "%" }}
              ></span>
            </div>
            <div className="progress__row">
              <span className="progress__text">0 BNB</span>
              <span className="progress__text">
                {item?.cap[1] / 10 ** 18} BNB
              </span>
            </div>
          </div>
          <ul className="card__list">
            <li className="card__item">
              <span>Liquidity %</span>
              <span>{item?.liquidity}%</span>
            </li>
            <li className="card__item">
              <span>Lockup Time</span>
              <span>{item?.lockup} days</span>
            </li>
            <li className="card__item">
              <span>Category</span>
              <span>{item?.category}</span>
            </li>
            <li className="card__item">
              <span>Smart Score</span>
              <span>{item?.score}</span>
            </li>
          </ul>
          <CardFooter item={item} />
        </div>
        <div className="card__face card__face--back">
          <div className="card__row">
            <img src={item?.image} alt={item?.name} className="card__image" />
            <h1 className="card__title card__title--2">Smart Score</h1>
            <button className="card__close" onClick={toggleFlip}></button>
          </div>
          <ul className="card__list">
            <li className="card__item">
              <span>KYC/DOXXED</span>
              <span>{`${item?.kyc}`}</span>
            </li>
            <li className="card__item">
              <span>Team Wallet Size</span>
              <span>{item?.size}</span>
            </li>
            <li className="card__item">
              <span>Team Wallet Locked</span>
              <span>{item?.locked}</span>
            </li>
            <li className="card__item">
              <span>Team Wallet Lock Period</span>
              <span>{item?.lockPeriod}</span>
            </li>
            <li className="card__item">
              <span>LP Lock Duration</span>
              <span>{item?.lockDuration && `${item?.lockDuration} days`} </span>
            </li>
            <li className="card__item">
              <span>Audit</span>
              <span>{`${item?.audit}`}</span>
            </li>
            <li className="card__item">
              <span>Website</span>
              <a target="_blank" href={item?.website} className="card__copy">
                {truncate(item?.website, 20)}
              </a>
            </li>
            <li className="card__item">
              <span>Social Media</span>
              <ul className="card__social social social--card">
                {item.website && (
                  <li className="social__item">
                    <a
                      href={
                        item.website.split(":")[0] == "https"
                          ? item.website
                          : `https://${item.website}`
                      }
                      target="_blank"
                      className="social__link"
                    >
                      <Globe className="social__icon" />
                    </a>
                  </li>
                )}

                {item.social?.tg && (
                  <li className="social__item">
                    <a href={item.social?.tg} className="social__link">
                      <Telegram className="social__icon" />
                    </a>
                  </li>
                )}
                {item.social?.twitter && (
                  <li className="social__item">
                    <a href={item.social?.twitter} className="social__link">
                      <Twitter className="social__icon" />
                    </a>
                  </li>
                )}
                {item.social?.discord && (
                  <li className="social__item">
                    <a href={item.social?.discord} className="social__link">
                      <img
                        src={discord}
                        alt="discord"
                        className="social__icon"
                      />
                    </a>
                  </li>
                )}
                {item.social?.facebook && (
                  <li className="social__item">
                    <a href={item.social?.facebook} className="social__link">
                      <img
                        src={facebook}
                        alt="facebook"
                        className="social__icon"
                      />
                    </a>
                  </li>
                )}
                {item.social?.github && (
                  <li className="social__item">
                    <a href={item.social?.github} className="social__link">
                      <img src={github} alt="github" className="social__icon" />
                    </a>
                  </li>
                )}
                {item.social?.instagram && (
                  <li className="social__item">
                    <a href={item.social?.instagram} className="social__link">
                      <img
                        src={instagram}
                        alt="instagram"
                        className="social__icon"
                      />
                    </a>
                  </li>
                )}
                {item.social?.reddit && (
                  <li className="social__item">
                    <a href={item.social?.reddit} className="social__link">
                      <img src={reddit} alt="reddit" className="social__icon" />
                    </a>
                  </li>
                )}
              </ul>
            </li>
            <li className="card__item">
              <span>Utility</span>
              <span>{item?.category}</span>
            </li>
            <li className="card__item">
              <span>Private Sale</span>
              <span>{`${item?.privateSale}`}</span>
            </li>
            {/* <li className="card__item">
              <span>Vesting</span>
              <span>{item.vesting}</span>
            </li> */}
            <li className="card__item">
              <span>LP Ratio</span>
              <span>{item?.ratio}</span>
            </li>
            <li className="card__item">
              <span>Vote Score</span>
              <span>{item?.voteScore}</span>
            </li>
          </ul>
          <CardFooter />
        </div>
      </div>
    </div>
  );
}
