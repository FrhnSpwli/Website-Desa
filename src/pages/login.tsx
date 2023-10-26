// import React from "react";
// import {
//   IonCard,
//   IonIcon,
//   IonInput,
//   IonItem,
//   IonLabel,
//   IonList,
//   IonPage,
//   IonText,
// } from "@ionic/react";
// import { IonButton } from "@ionic/react";
// import { IonCheckbox } from "@ionic/react";
// import Styles from "../styles/Login.module.css";
// import Input from "../components/atoms/input";

// function Login() {
//   return (
//     <IonPage>
//       <div className={Styles.loginPages}>
//         <main className={Styles.loginContainer}>
//           <section className={Styles.loginLeftctn}>
//             <p>Desa Digital</p>
//             <p>Selamat Datang</p>
//             <p>Sign in untuk lanjut ke akun anda</p>
//           </section>
//           <section className={Styles.loginRightctn}>
//             <IonText className={Styles.Header}> Login </IonText>
//             <div className={Styles.input}>
//               <IonItem>
//                 <IonIcon src="/person.svg" slot="start" color="primary"></IonIcon>
//                 <IonLabel>Email :</IonLabel>
//                 <Input type='email'>Email</Input>
//               </IonItem>
//             </div>
//             <div className={Styles.input}>
//               <IonItem>
//                 <IonIcon src="/lock.svg" slot="start" color="primary"></IonIcon>
//                 <IonLabel>Password :</IonLabel>
//               </IonItem>
//             </div>
//             <IonCheckbox>Keep me log in </IonCheckbox>{" "}
//             <IonButton color="light" shape="round" >
//               Login
//             </IonButton>
//             <a href="#">Forgot Password ?</a>
//             <IonText>
//               Don't have an account ?<a href="#">Register</a>
//             </IonText>
//           </section>
//         </main>
//       </div>
//     </IonPage>
//   );
// }

// export default Login;


import React from 'react'
import { IonPage, IonIcon, IonTitle, IonCheckbox } from "@ionic/react";
import Styles from '../styles/Login.module.css'
import Button from '../components/atoms/button';
import Input from '../components/atoms/input';
import { lockClosed, person } from 'ionicons/icons'
import { Style } from '@capacitor/status-bar';


function login() {
  return (
    <IonPage>
      <div className={Styles.body}>
        <div className={Styles.container}>
          <div className={Styles.left}>
            {/* <div> */}
            <p>Selamat Datang di Desa</p>
            <h1>Fontaine</h1>
            {/* </div> */}
            {/* <div> */}
            <p>Sign in untuk lanjut ke akun Anda</p>
            {/* </div> */}
          </div>
          <div className={Styles.right}>
            <div className={Styles.content}>
              <h1>Login</h1>
              <div className={Styles.item}>
                <IonIcon icon={person} slot='start' color='primary' className={Styles.itemIcon} />
                <Input type='email'>Email</Input>
              </div>
              <div className={Styles.item}>
                <IonIcon icon={lockClosed} slot='start' color='primary' className={Styles.itemIcon} />
                <Input type='password'>Password</Input>
              </div>
              <div className={Styles.keepLogin}>
              <IonCheckbox labelPlacement="end">Keep me signed in until I sign out</IonCheckbox>
              </div>
              <div className={Styles.btn}>
                <Button shape='round' path='/home'>Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  )
}

export default login
