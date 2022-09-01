import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import ArrowDown from "../icon/ArrowDown";
import Email from "../icon/Email";
import { m } from "framer-motion";
import Key from "../icon/Key";
import { Link } from "react-router-dom";
import NavbarGuest from "../components/NavbarGuest";
import { labelVariants } from "../variants/label";
import BgLabel from "../components/BgLabel";
import { LoginSchema } from "../schema";
import Layout from "../components/Layout";

function Login() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const ref = useRef();
  const handleSubmit = (values) => {
    alert("Login Success");
  };
  return (
    <Layout title="Login">
      <div className="relative screen login">
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
                Login your account
              </h3>
              <h3 className="text-sm mb-8 text-gray-400">
                Welcome to Demo App
              </h3>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
                innerRef={ref}
              >
                {({ errors, touched, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
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
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="cursor-pointer rounded-sm"
                        />
                        <label className="block text-sm">Remember me</label>
                      </div>
                      <a href="#" className="block text-sm hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <m.button
                      whileHover={{ scale: 1.03 }}
                      type="submit"
                      className="bg-blue-600 w-full flex text-sm items-center space-x-2 justify-center mt-4 py-3 rounded focus:outline-none"
                    >
                      <ArrowDown />
                      <span className="font-semibold">Login</span>
                    </m.button>
                  </Form>
                )}
              </Formik>
              <div className="mt-8">
                <p className="text-sm">
                  Need an account?{" "}
                  <Link to={"/register"} className="font-semibold underline">
                    Register
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

export default Login;
