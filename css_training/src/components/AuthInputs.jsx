import { useState } from "react";
import { PrimaryButton, TextButton } from "./UI/Buttons/Button";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label>Email</label>
          <input
            type="email"
            className={
              emailNotValid ? "border-4 border-red-600 text-red-700" : undefined
            }
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={
              passwordNotValid ? "border-4 border-red-600 text-red-700" : undefined
            }
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <TextButton>Create a new account</TextButton>
        <PrimaryButton onClick={handleLogin}>Sign In</PrimaryButton>
      </div>
    </div>
  );
}
