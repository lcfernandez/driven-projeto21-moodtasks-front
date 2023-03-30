import { Form } from "../../assets/styles/Form";
import { HeaderAuth } from "../../components/HeaderAuth";
import { Link } from "react-router-dom";

export function SignUpPage() {
  function signUp(e) {
    e.preventDefault();
  }

  return (
    <>
      <HeaderAuth />

      <Form onSubmit={signUp}>
        <input placeholder="Nome" type="text" required />
        <input placeholder="E-mail" type="email" required />
        <input placeholder="Senha" type="password" required />
        <input placeholder="Confirmar senha" type="password" required />
        
        <button>Cadastrar</button>
        
        <Link to={"/"}>
          Já tem uma conta? Entre agora!
        </Link>
      </Form>
    </>
  );
}