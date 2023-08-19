import Check from "../assets/images/icon-success.svg";
function Confirmation(props) {
  return (
    <div className="confirmation">
      <img src={Check} alt="orange circle with white checkmark" />
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to <span>{props.email}</span>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={() => props.setSubmit(false)}>Dismiss message</button>
    </div>
  );
}

export default Confirmation;
