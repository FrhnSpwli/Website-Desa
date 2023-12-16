import { IonPage, IonIcon, IonToast } from "@ionic/react";
import Styles from "../styles/Login.module.css";
import Button from "../components/atoms/button";
import Input from "../components/atoms/input";
import { lockClosed, person } from "ionicons/icons";
import { useState } from "react";
import { signInWithEmailAndPasswordHandler } from "../../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleLogin = async () => {
    try {
      const trimmedEmail = email.trim();
      await signInWithEmailAndPasswordHandler(trimmedEmail, password);
      localStorage.setItem("auth", "true");
      window.location.href = "/admin/artikel";
    } catch (error) {
      setShowToast(true);
      console.error("Login error:", error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <IonPage>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Only For Admin!"
        duration={2000}
      />
      <div className={Styles.body}>
        <div className={Styles.container}>
          <div className={Styles.left}>
            <p>Selamat Datang di Desa</p>
            <h1>Toraja</h1>
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
                <Input type="email" value={email} onInput={handleEmailChange}>
                  Email
                </Input>
              </div>
              <div className={Styles.item}>
                <IonIcon
                  icon={lockClosed}
                  slot="start"
                  color="primary"
                  className={Styles.itemIcon}
                />
                <Input
                  type="password"
                  value={password}
                  onInput={handlePasswordChange}
                >
                  Password
                </Input>
              </div>
              <div className={Styles.btn}>
                <div
                  onClick={handleLogin}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Button shape="round">Login</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  );
}

export default Login;
