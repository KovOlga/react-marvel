import abyss from "../../images/abyss.jpg";
import thor from "../../images/thor.jpeg";
import mjolnir from "../../images/mjolnir.png";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import RandomChar from "../randomChar/random-char";
const hr = "https://developer.marvel.com/";

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main>
        <RandomChar thor={thor} mjolnir={mjolnir} />

        <div className="char__content">
          {/* <div className="char__list">
            <ul className="char__grid">
              <li className="char__item">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
              <li className="char__item char__item_selected">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
              <li className="char__item">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
              <li className="char__item">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
              <li className="char__item">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
              <li className="char__item">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
              <li className="char__item">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
              <li className="char__item">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
              <li className="char__item">
                <img src={abyss} alt="abyss" />
                <div className="char__name">Abyss</div>
              </li>
            </ul>
            <button className="button button__main button__long">
              <div className="inner">load more</div>
            </button>
          </div> */}

          {/* <div className="char__info">
            <div className="char__basics">
              <img src={thor} alt="abyss" />
              <div>
                <div className="char__info-name">thor</div>
                <div className="char__btns">
                  <a href="#" className="button button__main">
                    <div className="inner">homepage</div>
                  </a>
                  <a href="#" className="button button__secondary">
                    <div className="inner">Wiki</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="char__descr">
              In Norse mythology, Loki is a god or jötunn (or both). Loki is the
              son of Fárbauti and Laufey, and the brother of Helblindi and
              Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
              wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is
              the father of Nari and/or Narfi and with the stallion Svaðilfari
              as the father, Loki gave birth—in the form of a mare—to the
              eight-legged horse Sleipnir. In addition, Loki is referred to as
              the father of Váli in the Prose Edda.
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
              <li className="char__comics-item">
                All-Winners Squad: Band of Heroes (2011) #3
              </li>
              <li className="char__comics-item">Alpha Flight (1983) #50</li>
              <li className="char__comics-item">
                Amazing Spider-Man (1999) #503
              </li>
              <li className="char__comics-item">
                Amazing Spider-Man (1999) #504
              </li>
              <li className="char__comics-item">
                AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
              </li>
              <li className="char__comics-item">
                Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
              </li>
              <li className="char__comics-item">
                Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade
                Paperback)
              </li>
              <li className="char__comics-item">Vengeance (2011) #4</li>
              <li className="char__comics-item">Avengers (1963) #1</li>
              <li className="char__comics-item">Avengers (1996) #1</li>
            </ul>
            <p className="char__select">
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
            </div>
          </div> */}
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
