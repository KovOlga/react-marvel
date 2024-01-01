import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import { useState } from "react";
import useMarvelService from "../../services/MarvelService";
import styles from "./char-search-form.module.css";
import { Link } from "react-router-dom";
import ErrorMessage from "../error-message/error-message";

const CharSearchForm = () => {
  const [char, setChar] = useState(null);
  const { loading, error, getCharacterByName, clearError } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const findChar = (name) => {
    clearError();
    setChar(null);

    getCharacterByName(name).then(onCharLoaded);
  };

  const errorMessage = error ? (
    <div className="char__search-critical-error">
      <ErrorMessage />
    </div>
  ) : null;
  const result = !char ? null : char.length > 0 ? (
    <div className={styles.char__searchWrapper}>
      <div className={styles.char__searchSuccess}>
        There is! Visit {char[0].name} page?
      </div>
      <Link
        to={`/characters/${char[0].id}`}
        className={`${styles.button} ${styles.button__secondary}`}
      >
        <p className={`${styles.inner} ${styles.inner__secondary}`}>To page</p>
      </Link>
    </div>
  ) : (
    <div className={styles.error}>
      The character was not found. Check the name and try again
    </div>
  );

  return (
    <div className={styles.charInfo}>
      <p className={styles.comics}>Or find a character by name:</p>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("This field is required"),
        })}
        onSubmit={({ name }) => {
          findChar(name);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.form__field}>
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Enter name"
            />
            <button
              type="submit"
              disabled={loading}
              className={`${styles.button} ${styles.button__main}`}
            >
              <span className={`${styles.inner} ${styles.inner__main}`}>
                FIND
              </span>
            </button>
          </div>
          <FormikErrorMessage
            name="name"
            component="div"
            className={styles.error}
          />
        </Form>
      </Formik>
      {result}
      {errorMessage}
    </div>
  );
};

export default CharSearchForm;
