import { IonPage, IonIcon, IonCheckbox, IonPopover } from "@ionic/react";
import Styles from "../styles/Login.module.css";
import Button from "../components/atoms/button";
import Input from "../components/atoms/input";
import { lockClosed, person } from "ionicons/icons";

function login() {
  return (
    <IonPage>
      <div className={Styles.body}>
        <div className={Styles.container}>
          <div className={Styles.left}>
            <p>Selamat Datang di Desa</p>
            <h1>Fontaine</h1>
            <p>Sign in untuk lanjut ke akun Anda</p>
          </div>
          <div className={Styles.right}>
            <div className={Styles.content}>
              <h1>Login</h1>
              <div className={Styles.item}>
                <IonIcon
                  icon={person}
                  slot="start"
                  color="primary"
                  className={Styles.itemIcon}
                />
                <Input type="email">Email</Input>
              </div>
              <div className={Styles.item}>
                <IonIcon
                  icon={lockClosed}
                  slot="start"
                  color="primary"
                  className={Styles.itemIcon}
                />
                <Input type="password">Password</Input>
              </div>
              <div className={Styles.keepLogin}>
                <IonCheckbox labelPlacement="end">
                  Keep me signed in until I sign out
                </IonCheckbox>
                <a href="#">Forgot Password ?</a>
              </div>
              <div className={Styles.btn}>
                <Button shape="round" path="/home">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  );
}

export default login;
