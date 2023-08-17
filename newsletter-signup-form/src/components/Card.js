import Graphic from "../assets/images/illustration-sign-up-desktop.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function Card() {
  return (
    <div className="card">
      <div className="info">
        <div className="content">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: Yup.string().email("Valid email required").required(""),
            })}
            onSubmit={(values, { resetForm }) => {
              alert(JSON.stringify(values, null, 2));
              resetForm({ values: "" });
            }}
          >
            <Form>
              <label htmlFor="email">
                Email address
                <ErrorMessage name="email" component="div" id="errorMessage"/>
                <Field
                  type="email"
                  name="email"
                  placeholder="email@company.com"
                />
              </label>
              <button type="submit">Subscribe to monthly newsletter</button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="graphic">
        <img src={Graphic} alt="side graphic to display page details" />
      </div>
    </div>
  );
}

export default Card;
