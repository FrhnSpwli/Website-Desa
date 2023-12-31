import React, { useState, ReactNode } from "react";
import { IonInput } from "@ionic/react";

interface InputProps {
  children: ReactNode;
  type: "email" | "text" | "password";
  value?: string; 
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ children, type, value, onInput }: InputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    if (type === "email") {
      validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    }
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonInput
      className={`${isValid ? "ion-valid" : ""} ${
        isValid === false ? "ion-invalid" : ""
      } ${isTouched ? "ion-touched" : ""}`}
      type={`${type}`}
      mode="ios"
      fill="solid"
      value={value}
      onInput={onInput}
      label={`${children}`}
      labelPlacement="floating"
      helperText={`Masukkan ${children}`}
      errorText="Invalid email"
      onIonInput={(event) => validate(event)}
      onIonBlur={() => markTouched()}
    ></IonInput>
  );
};
export default Input;
