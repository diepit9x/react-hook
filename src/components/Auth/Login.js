import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postLogin } from "../../services/ApiService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = new useNavigate();

  const handleClickBtnLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await postLogin(email, password);
      if (data) {
        if (data.EC === 0) {
          toast.success(data.EM);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.warn(data.EM);
        }
      } else {
        toast.error(data.EM || "Có lỗi xảy ra");
      }
    } catch (error) {
      toast.error(`catch error: ${error.message}`);
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div style={{ width: "300px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(event) => handleClickBtnLogin(event)}>
              Login
            </Button>
            <Form.Group>
              <Form.Text className="text-muted">
                Not a member?{" "}
                <Link to="/register">
                  <b>Register</b>
                </Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Login;
