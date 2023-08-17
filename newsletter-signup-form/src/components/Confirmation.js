function Confirmation(props) {
    return (
        <div className="confirmation">
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to {props.email}. Please open it and click the button inside to confirm your subscription</p>
            <button>Dismiss message</button>
        </div>
    )
}

export default Confirmation;