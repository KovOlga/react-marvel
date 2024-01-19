import styles from "./single-comic-page.module.css";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";
import useMarvelService from "../../services/MarvelService";
import { useState, useEffect } from "react";
import Modal from "../modal/modal";
import AppBanner from "../app-banner/app-banner";
import avangers from "../../images/Avengers.png";
import avangersLogo from "../../images/Avengers_logo.png";

const SingleCharPage = () => {
  let location = useLocation();
  const { loading, error, getCharacter, clearError } = useMarvelService();
  const [char, setChar] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { charId } = useParams();

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    clearError();
    getCharacter(charId).then((char) => {
      setChar(char);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  const content = !(loading || error || !char) ? (
    <View
      char={char}
      location={location}
      showModal={showModal}
      setShowModal={setShowModal}
    />
  ) : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ char, showModal, setShowModal }) => {
  const { name, description, thumbnail } = char;

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <AppBanner avangers={avangers} avangersLogo={avangersLogo} />
      <div className={styles.comic}>
        <div className={styles.comic__cont}>
          <img
            onClick={() => setShowModal(true)}
            src={thumbnail}
            alt={name}
            className={styles.comic__img}
          />
          <div className={styles.comic__info}>
            <h2 className={styles.comic__name}>{name}</h2>
            <p className={styles.comic__descr}>{description}</p>
          </div>
        </div>
        <Link to="/">
          <button className={styles.comic__back}>Back to all</button>
        </Link>
      </div>

      {showModal && (
        <Modal onClose={onCloseModal}>
          <img src={thumbnail} alt={name} />
        </Modal>
      )}
    </>
  );
};

export default SingleCharPage;
