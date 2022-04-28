const Step2 = (props) => {
  const { name, email, password, setSubmitted } = props;
  console.log(props);
  return (
    <div className="results">
      <h2>Results</h2>
      <div className="results-box">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
      <button
        onClick={() => {
          setSubmitted(false);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default Step2;
