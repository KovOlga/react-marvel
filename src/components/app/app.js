import abyss from "../../images/abyss.jpg";
import thor from "../../images/thor.jpeg";
import mjolnir from "../../images/mjolnir.png";
import UW from "../../images/UW.png";
import XM from "../../images/x-men.png";
import avangers from "../../images/Avengers.png";
import avangersLogo from "../../images/Avengers_logo.png";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import RandomChar from "../randomChar/random-char";
import CharList from "../charList/char-list";
import CharInfo from "../charInfo/char-info";
import Skeleton from "../skeleton/skeleton";
import AppBanner from "../app-banner/app-banner";
const hr = "https://developer.marvel.com/";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      {/* <main className={styles.char}>
        <RandomChar thor={thor} mjolnir={mjolnir} />

        <div className={styles.char__content}>
          <CharList abyss={abyss} />
          <div className={styles.char__info}>
            <CharInfo thor={thor} />
            <Skeleton />
          </div>
        </div>
      </main> */}
      <main className={styles.comics}>
        <AppBanner avangers={avangers} avangersLogo={avangersLogo} />
        <div className="comics__list">
          <ul className="comics__grid">
            <li className="comics__item">
              <a href="#">
                <img src={UW} alt="ultimate war" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="#">
                <img src={XM} alt="x-men" className="comics__item-img" />
                <div className="comics__item-name">
                  X-Men: Days of Future Past
                </div>
                <div className="comics__item-price">NOT AVAILABLE</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="#">
                <img src={UW} alt="ultimate war" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="#">
                <img src={XM} alt="x-men" className="comics__item-img" />
                <div className="comics__item-name">
                  X-Men: Days of Future Past
                </div>
                <div className="comics__item-price">NOT AVAILABLE</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="#">
                <img src={UW} alt="ultimate war" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="#">
                <img src={XM} alt="x-men" className="comics__item-img" />
                <div className="comics__item-name">
                  X-Men: Days of Future Past
                </div>
                <div className="comics__item-price">NOT AVAILABLE</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="#">
                <img src={UW} alt="ultimate war" className="comics__item-img" />
                <div className="comics__item-name">
                  ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                </div>
                <div className="comics__item-price">9.99$</div>
              </a>
            </li>
            <li className="comics__item">
              <a href="#">
                <img src={XM} alt="x-men" className="comics__item-img" />
                <div className="comics__item-name">
                  X-Men: Days of Future Past
                </div>
                <div className="comics__item-price">NOT AVAILABLE</div>
              </a>
            </li>
          </ul>
          <button className="button button__main button__long">
            <div className="inner">load more</div>
          </button>
        </div>
        {/* <div className="single-comic">
                <img src={XM} alt="x-men" className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">X-Men: Days of Future Past</h2>
                    <p className="single-comic__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                    <p className="single-comic__descr">144 pages</p>
                    <p className="single-comic__descr">Language: en-us</p>
                    <div className="single-comic__price">9.99$</div>
                </div>
                <a href="#" className="single-comic__back">Back to all</a>
            </div> */}
      </main>
    </div>
  );
};

export default App;
