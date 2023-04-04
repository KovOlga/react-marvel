import abyss from "../../images/abyss.jpg";
import thor from "../../images/thor.jpeg";
import mjolnir from "../../images/mjolnir.png";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import RandomChar from "../randomChar/random-char";
import CharList from "../charList/char-list";
import CharInfo from "../charInfo/char-info";
const hr = "https://developer.marvel.com/";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className="char">
        <RandomChar thor={thor} mjolnir={mjolnir} />

        <div className={styles.char__content}>
          <CharList abyss={abyss} />
          <div className={styles.char__info}>
            <CharInfo thor={thor} />
            {/* <p className="char__select">
        Please select a character to see information
      </p>
      <div className="skeleton">
        <div className="pulse skeleton__header">
          <div className="pulse skeleton__circle"></div>
          <div className="pulse skeleton__mini"></div>
        </div>
        <div className="pulse skeleton__block"></div>
        <div className="pulse skeleton__block"></div>
        <div className="pulse skeleton__block"></div>
      </div> */}
          </div>
        </div>
      </main>
      {/* <main>
            <div class="app__banner">
                <img src="img/Avengers.png" alt="Avengers">
                <div class="app__banner-text">
                    New comics every week!<br>
                    Stay tuned!
                </div>
                <img src="img/Avengers_logo.png" alt="Avengers logo">
            </div>
            <div class="comics__list">
                <ul class="comics__grid">
                    <li class="comics__item">
                        <a href="#">
                            <img src="img/UW.png" alt="ultimate war" class="comics__item-img">
                            <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                            <div class="comics__item-price">9.99$</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src="img/x-men.png" alt="x-men" class="comics__item-img">
                            <div class="comics__item-name">X-Men: Days of Future Past</div>
                            <div class="comics__item-price">NOT AVAILABLE</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src="img/UW.png" alt="ultimate war" class="comics__item-img">
                            <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                            <div class="comics__item-price">9.99$</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src="img/x-men.png" alt="x-men" class="comics__item-img">
                            <div class="comics__item-name">X-Men: Days of Future Past</div>
                            <div class="comics__item-price">NOT AVAILABLE</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src="img/UW.png" alt="ultimate war" class="comics__item-img">
                            <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                            <div class="comics__item-price">9.99$</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src="img/x-men.png" alt="x-men" class="comics__item-img">
                            <div class="comics__item-name">X-Men: Days of Future Past</div>
                            <div class="comics__item-price">NOT AVAILABLE</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src="img/UW.png" alt="ultimate war" class="comics__item-img">
                            <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                            <div class="comics__item-price">9.99$</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src="img/x-men.png" alt="x-men" class="comics__item-img">
                            <div class="comics__item-name">X-Men: Days of Future Past</div>
                            <div class="comics__item-price">NOT AVAILABLE</div>
                        </a>
                    </li>
                </ul>
                <button class="button button__main button__long">
                    <div class="inner">load more</div>
                </button>
            </div>
        </main> */}
      {/* <main>
            <div class="app__banner">
                <img src="img/Avengers.png" alt="Avengers">
                <div class="app__banner-text">
                    New comics every week!<br>
                    Stay tuned!
                </div>
                <img src="img/Avengers_logo.png" alt="Avengers logo">
            </div>
            <div class="single-comic">
                <img src="img/x-men.png" alt="x-men" class="single-comic__img">
                <div class="single-comic__info">
                    <h2 class="single-comic__name">X-Men: Days of Future Past</h2>
                    <p class="single-comic__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                    <p class="single-comic__descr">144 pages</p>
                    <p class="single-comic__descr">Language: en-us</p>
                    <div class="single-comic__price">9.99$</div>
                </div>
                <a href="#" class="single-comic__back">Back to all</a>
            </div>
        </main> */}
    </div>
  );
};

export default App;
