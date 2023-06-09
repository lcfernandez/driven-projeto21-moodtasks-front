import { Form } from "../../assets/styles/Form";
import { HeaderAuth } from "../../components/HeaderAuth";
import { WHITE_COLOR } from "../../constants/color";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useContext, useEffect } from "react";
import axios from "axios";

export function SignUpPage() {
  const [token] = useContext(UserContext);

  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/projects");
  }, [navigate, token]);

  function signUp(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não são iguais. Tente novamente.");
    } else {
      setDisabled(true);

      const body = {
        name,
        email,
        password,
        confirmPassword
      };

      axios
        .post(`${process.env.REACT_APP_API_URI}/sign-up`, body)
        .then(() => navigate("/"))
        .catch(
          err => {
            alert(err.response.data.message || err.response.data);
            setDisabled(false);
          }
        );
    }
  }

  return (
    <>
      <HeaderAuth />

      <Form onSubmit={signUp}>
        <input
          disabled={disabled && true}
          onChange={e => setName(e.target.value)}
          placeholder="Nome"
          type="text"
          required
        />
        <input
          disabled={disabled && true}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
          required
          type="email"
        />
        <input minLength="4"
          disabled={disabled && true}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
          required
          type="password"
        />
        <input minLength="4"
          disabled={disabled && true}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirmar senha"
          required
          type="password"
        />
        
        <button disabled={disabled && true}>
          {disabled ?
            <ThreeDots
              ariaLabel="three-dots-loading"
              color={WHITE_COLOR}
              height={50}
            	width={50}
            />
          : "Cadastrar"}
        </button>
        
        <Link to={"/"}>
          Já tem uma conta? Entre agora!
        </Link>
      </Form>
    </>
  );
}
