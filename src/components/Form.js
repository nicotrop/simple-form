const Form = (props) => {
  const {
    name,
    email,
    password,
    passwordconfirm,
    handleSubmit,
    submitted,
    setEmail,
    setName,
    setPassword,
    setPasswordConfirm,
    passworderror,
  } = props;
  return (
    <div className={submitted ? "hidden" : "signup"}>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          placeholder="john doe"
          onChange={(event) => setName(event.target.value)}
          value={name}
        ></input>
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="john@gmail.com"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        ></input>
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="123john"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          id={passworderror ? "red-border" : " "}
        ></input>
        <p>Confirm your Password</p>
        <input
          type="password"
          name="passwordconfirm"
          placeholder="123john"
          onChange={(event) => setPasswordConfirm(event.target.value)}
          value={passwordconfirm}
          id={passworderror ? "red-border" : " "}
        ></input>
        {passworderror && (
          <p className={passworderror && "showred"}>
            Les mots de passe ne sont pas identiques
          </p>
        )}
        <input
          type="submit"
          value="Register"
          onClick={() => {
            <h2>[name, email, password, passwordconfirm]</h2>;
          }}
        />
      </form>
    </div>
  );
};

export default Form;
