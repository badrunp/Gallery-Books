import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import Email from "../icon/Email";
import { m } from "framer-motion";
import Key from "../icon/Key";
import { Link } from "react-router-dom";
import User from "../icon/User";
import { RegisterSchema } from "../schema";
import NavbarGuest from "../components/NavbarGuest";
import { labelVariants } from "../variants/label";
import BgLabel from "../components/BgLabel";
import UserPlus from "../icon/UserPlus";
import Layout from "../components/Layout";

function Register() {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const ref = useRef();
  const handleSubmit = (values) => {
    alert("Register Success");
  };

  return (
    <Layout title="Register">
      <div className="relative screen register">
        <NavbarGuest />
        <div className="screen bg-gradient-to-l from-gray-800/80 via-gray-900 to-gray-900 grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full flex items-center justify-center">
            <m.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween" }}
              className="px-6 sm:px-0 sm:max-w-xs w-full text-gray-200"
            >
              <h3 className="text-2xl mb-3 font-semibold">
                Create your account
              </h3>
              <h3 className="text-sm mb-8 text-gray-400">
                Welcome to Demo App
              </h3>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={handleSubmit}
                innerRef={ref}
              >
                {({ errors, touched, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <m.div
                      initial={false}
                      animate={{
                        x: errors.name && touched.name ? [0, 2, -2, 2] : 0,
                      }}
                      transition={{ type: "tween", duration: 0.25 }}
                      className="relative"
                    >
                      <m.div
                        initial={false}
                        variants={labelVariants}
                        custom={nameFocus}
                        animate="visible"
                        className="absolute pointer-events-none"
                      >
                        <BgLabel active={nameFocus} />
                        <div className="flex items-center space-x-2 relative">
                          <User />
                          <p className="text-sm">Name</p>
                        </div>
                      </m.div>
                      <Field
                        type="text"
                        name="name"
                        className={`block mt-4 rounded bg-gray-800 w-full ${
                          errors.name && touched.name
                            ? "input-error"
                            : "input-success"
                        }  text-sm py-3 `}
                        onFocus={() => setNameFocus(true)}
                        onBlur={() =>
                          !ref.current?.values.name.length &&
                          setNameFocus(false)
                        }
                      />
                    </m.div>
                    {errors.name && touched.name && (
                      <span className="text-xs text-red-500 tracking-wide">
                        {errors.name}
                      </span>
                    )}
                    <m.div
                      initial={false}
                      animate={{
                        x: errors.email && touched.email ? [0, 2, -2, 2] : 0,
                      }}
                      transition={{ type: "tween", duration: 0.25 }}
                      className="relative"
                    >
                      <m.div
                        initial={false}
                        variants={labelVariants}
                        custom={emailFocus}
                        animate="visible"
                        className="absolute pointer-events-none"
                      >
                        <BgLabel active={emailFocus} />
                        <div className="absolute bg-gray-800 w-full h-1/2 bottom-0"></div>
                        <div className="flex items-center space-x-2 relative">
                          <Email />
                          <p className="text-sm">Email</p>
                        </div>
                      </m.div>
                      <Field
                        type="text"
                        name="email"
                        className={`block mt-4 rounded bg-gray-800 w-full ${
                          errors.email && touched.email
                            ? "input-error"
                            : "input-success"
                        }  text-sm py-3 `}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() =>
                          !ref.current?.values.email.length &&
                          setEmailFocus(false)
                        }
                      />
                    </m.div>
                    {errors.email && touched.email && (
                      <span className="text-xs text-red-500 tracking-wide">
                        {errors.email}
                      </span>
                    )}
                    <m.div
                      initial={false}
                      animate={{
                        x:
                          errors.password && touched.password
                            ? [0, 2, -2, 2]
                            : 0,
                      }}
                      transition={{ type: "tween", duration: 0.25 }}
                      className="relative"
                    >
                      <m.div
                        initial={false}
                        variants={labelVariants}
                        custom={passwordFocus}
                        animate="visible"
                        className="absolute pointer-events-none"
                      >
                        <BgLabel active={passwordFocus} />
                        <div className="absolute bg-gray-800 w-full h-1/2 bottom-0"></div>
                        <div className="flex items-center space-x-2 relative">
                          <Key />
                          <p className="text-sm">Password</p>
                        </div>
                      </m.div>
                      <Field
                        type="password"
                        name="password"
                        className={`block mt-4 rounded bg-gray-800 w-full ${
                          errors.password && touched.password
                            ? "input-error"
                            : "input-success"
                        }  text-sm py-3 `}
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() =>
                          !ref.current?.values.password.length &&
                          setPasswordFocus(false)
                        }
                      />
                    </m.div>
                    {errors.password && touched.password && (
                      <span className="text-xs text-red-500 tracking-wide">
                        {errors.password}
                      </span>
                    )}
                    <m.button
                      whileHover={{ scale: 1.03 }}
                      type="submit"
                      className="bg-blue-600 w-full flex text-sm items-center space-x-2 justify-center mt-4 py-3 rounded focus:outline-none"
                    >
                      <UserPlus />
                      <span className="font-semibold">Register</span>
                    </m.button>
                  </Form>
                )}
              </Formik>
              <div className="mt-8">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link to={"/login"} className="font-semibold underline">
                    Login
                  </Link>
                </p>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
