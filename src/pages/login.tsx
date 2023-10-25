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
import "./login.css";
import { person, lockClosed } from "ionicons/icons";
import style from "./login.module.css";

function Example() {
  return (
    <div className="login-pages">
      <main className="login-container">
        <section className="login-leftctn">
          Desa Digital
          <p>Selamat Datang</p>
          <p>Sign in untuk lanjut ke akun anda</p>
        </section>

        <section className={style.loginRightctn}>
          <IonText className={style.Header}> Login </IonText>
          <div className={style.input}><IonItem>
            <IonIcon src="/person.svg" slot="start" color="primary"></IonIcon>
            <IonLabel>Email :</IonLabel>
            <IonInput placeholder="Add email"></IonInput>
          </IonItem>
          </div>
          <div className={style.input}><IonItem>
            <IonIcon src="/lock.svg" slot="start" color="primary"></IonIcon>
            <IonLabel>Password :</IonLabel>
            <IonInput placeholder="Password"></IonInput>
          </IonItem>
          </div>
          <IonCheckbox>Keep me log in </IonCheckbox>{" "}
          <IonButton color="light" shape="round">
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

export default Example;

// import React from "react";
// import { IonItem } from "@ionic/react";
// import Styles from './login.module.css';
// import { person } from "ionicons/icons";
// import Input from "../components/atoms/input";
// import Button from "../components/atoms/button";

// function Login () {
//   return (
//     <div className={Styles.container}>
//       <div className={Styles.left}>
//       </div>
//       <div className={Styles.right}>
//         <Input type="email">Email</Input>
//         <Input type="password">Password</Input>
//         <Button>Login</Button>
//       </div>
//     </div>
//   )
// }

// export default Login;
