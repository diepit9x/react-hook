import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postRegister } from "../../services/ApiService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = new useNavigate();

  const handleClickBtnRegister = async (event) => {
    event.preventDefault();
    try {
      const data = await postRegister(email, username, password);
      console.log(data);
      if (data) {
        if (data.EC === 0) {
          toast.success(data.EM);
          setTimeout(() => {
            navigate("/login");
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
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(event) => handleClickBtnRegister(event)}>
              Register
            </Button>
            <Form.Group>
              <Form.Text className="text-muted">
                Have an account ?{" "}
                <Link to="/login">
                  <b>Login</b>
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

export default Register;
