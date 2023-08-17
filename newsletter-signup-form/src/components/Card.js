import Graphic from "../assets/images/illustration-sign-up-desktop.svg";
import MobileGraphic from "../assets/images/illustration-sign-up-mobile.svg"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import MediaQuery from "react-responsive/types/Component";
import MediaQuery from 'react-responsive';


function Card(props) {

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
            //   alert(JSON.stringify(values, null, 2));
              resetForm({ values: "" });
              props.setSubmit(true);
              props.setEmail(values.email)
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
            <MediaQuery maxWidth={600}>
                <img src={MobileGraphic} alt="promotional art to display device range"/>
            </MediaQuery>
            <MediaQuery minWidth={601}>
                <img src={Graphic} alt="promotional art to display device range"/>
            </MediaQuery>
      </div>
    </div>
  );
}

export default Card;
