import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Step2 from "./components/Step2";
// import Step2 from "./components/Step2";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [passworderror, setPassworderror] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === passwordconfirm) {
      setSubmitted(true);
      setPassworderror(false);
    } else {
      setSubmitted(false);
      setPassworderror(true);
    }
  };

  return (
    <div className="App">
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        passwordconfirm={passwordconfirm}
        setPasswordConfirm={setPasswordConfirm}
        handleSubmit={handleSubmit}
        submitted={submitted}
        setPassworderror={setPassworderror}
        passworderror={passworderror}
      />
      {submitted ? (
        <Step2
          name={name}
          email={email}
          password={password}
          setSubmitted={setSubmitted}
        />
      ) : (
        " "
      )}
      <Footer />
    </div>
  );
}

export default App;
