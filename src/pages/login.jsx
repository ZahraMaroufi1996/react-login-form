import { useAuth } from "contexts/Auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginAPI } from "services/api";
import Axios from "axios";

export const ERROR_MESSAGES = {
  "Cannot find user": "کاربری با این ایمیل یافت نشد!",
  "Incorrect password": "گذرواژه اشتباه می‌باشد!",
};

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(undefined);
  const { toggleAuth, user } = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const isDisabled = form.email === "" || form.password === "";
  const handleSubmit = (event) => {
    event.preventDefault();
    loginAPI(form)
      // Axios.post("http://localhost:8000/login", form)
      .then((response) => {
        // console.log(response.data);
        toggleAuth();
        history.push("/dashboard");
        setError(undefined);
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          {error && (
            <div className="alert alert-danger" role="alert">
              {ERROR_MESSAGES[error]}
            </div>
          )}
          <div className="card">
            <form className="cardbody" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label">
                    گذرواژه
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-4 "
                disabled={isDisabled}
              >
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
