import React, { useEffect, useState } from "react";
import styles from "./SubmitApp.module.css";
import Image from "next/image";
import MyFooter from "@/app/MainPage/Versions/Components/MyFooter/MyFooter";
import { send } from "emailjs-com";

const SubmitApp = () => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    number: "",
  });
  // ----------------------------------------------------------------------------
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email require");
  const [phoneError, setPhoneError] = useState("Phone require");
  const [nameError, setNameError] = useState("Name require");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
      toSend.email = e.target.value;
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re = /^\+?[1-9][0-9]{7,14}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setPhoneError("Некорректный phone");
    } else {
      setPhoneError("");
      toSend.number = e.target.value;
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    const re = /^[a-zA-Zа-яА-Я]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError("Некорректный имя");
    } else {
      setNameError("");
      toSend.name = e.target.value;
    }
  };

  useEffect(() => {
    if (emailError || nameError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError, phoneError]);

  // ----------------------------------------------------------------------------
  const [anim, setAnim] = useState(false);
  const [disconnect, setDisconnect] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      send("service_brca7no", "template_cg85h1e", toSend, "WPItYtXgeKVFnReev")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          setFormValid(false)
          setDisconnect(true)
          console.log("FAILED...", err);
        });
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.page__main_block}>
        <div className={styles.main_block_container}>
          <div className={styles.main_block_body}>
            <div className={styles.block_left}>
              <div className={styles.text}>
                Познакомтесь с новым <br /> форматом изучения <br /> иностранных
                языков
              </div>
              <div className={styles.tiket}>
                <Image src="/tiket.png" alt="result" height={96} width={187} />
              </div>
            </div>
            <div className={styles.block_right_container}>
              <form className={styles.block_right} onSubmit={onSubmit}>
                <div className={styles.inputs}>
                  <div className={styles.input_block}>
                    {nameDirty && nameError && (
                      <div className={styles.err}>{nameError}</div>
                    )}
                    <input
                      type="text"
                      className={styles.input}
                      name="name"
                      value={name}
                      onChange={(e) => nameHandler(e)}
                      placeholder="Меня зовут"
                      onBlur={(e) => blurHandler(e)}
                    />
                  </div>
                  <div className={styles.input_block}>
                    {emailDirty && emailError && (
                      <div className={styles.err}>{emailError}</div>
                    )}
                    <input
                      type="text"
                      className={styles.input}
                      name="email"
                      value={email}
                      onChange={(e) => emailHandler(e)}
                      placeholder="E-mail"
                      onBlur={(e) => blurHandler(e)}
                    />
                  </div>
                  <div className={styles.input_block}>
                    {phoneDirty && phoneError && (
                      <div className={styles.err}>{phoneError}</div>
                    )}
                    <input
                      type="text"
                      className={styles.input}
                      name="phone"
                      value={phone}
                      onChange={(e) => phoneHandler(e)}
                      placeholder="Номер телефона"
                      onBlur={(e) => blurHandler(e)}
                    />
                  </div>
                </div>
                <div className={styles.button}>
                  <button
                    disabled={!formValid}
                    className={styles.black__button}
                    type="submit"
                    onClick={(e) => {
                      formValid ? setAnim(true) : setDisconnect(true);
                    }}
                  >
                    <p className={styles.text__black_button}>Оставить заявку</p>
                    <div className={styles.circle}>
                      <Image
                        className={styles.arrow}
                        src="arrow.svg"
                        alt="Оставить заявку"
                        width={22.04}
                        height={22.04}
                      />
                    </div>
                  </button>
                </div>
              </form>
              {disconnect && <div className={styles.error}>
              <div className={styles.msg_container}>
                    <Image
                      className={styles.msg_image}
                      src="fail.svg"
                      alt="Fail"
                      width={25}
                      height={25}
                    />
                    <div className={styles.msg_text_container}>
                      <p className={styles.msg_text1}>Что-то пошло не так</p>
                      <p className={styles.msg_text2}>
                       Обновите страницу и попробуйте снова
                      </p>
                    </div>
                  </div>
              </div>}
              {anim && formValid && (
                <div className={styles.ok}>
                  <div className={styles.msg_container}>
                    <Image
                      className={styles.msg_image}
                      src="rock.svg"
                      alt="Rock"
                      width={25}
                      height={25}
                    />
                    <div className={styles.msg_text_container}>
                      <p className={styles.msg_text1}>Заявка отправлена!</p>
                      <p className={styles.msg_text2}>
                        Мы напишем Вам на почту и TG
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </main>
  );
};

export default SubmitApp;
