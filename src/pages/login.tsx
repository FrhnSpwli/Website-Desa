import React from "react";
import {
  IonCard,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";
import { IonButton } from "@ionic/react";
import { IonCheckbox } from "@ionic/react";
import Styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={Styles.loginPages}>
      <main className={Styles.loginContainer}>
        <section className={Styles.loginLeftctn}>
          <p>Desa Digital</p>
          <p>Selamat Datang</p>
          <p>Sign in untuk lanjut ke akun anda</p>
        </section>

        <section className={Styles.loginRightctn}>
          <IonText className={Styles.Header}> Login </IonText>
          <div className={Styles.input}>
            <IonItem>
              <IonIcon src="/person.svg" slot="start" color="primary"></IonIcon>
              <IonLabel>Email :</IonLabel>
              <IonInput placeholder="Add email"></IonInput>
            </IonItem>
          </div>
          <div className={Styles.input}>
            <IonItem>
              <IonIcon src="/lock.svg" slot="start" color="primary"></IonIcon>
              <IonLabel>Password :</IonLabel>
              <IonInput placeholder="Password"></IonInput>
            </IonItem>
          </div>
          <IonCheckbox>Keep me log in </IonCheckbox>{" "}
          <IonButton color="light" shape="round" >
            Login
          </IonButton>
          <a href="#">Forgot Password ?</a>
          <IonText>
            Don't have an account ?<a href="#">Register</a>
          </IonText>
        </section>
      </main>
    </div>
  );
}

export default Login;
