import Button from "../components/button";

const Login = () => (
  <form action="/agenda" method="post" className="space-y-8">
    <div>
      <label htmlFor="login" className="label-large">
        Login
      </label>
      <input
        type="email"
        name="login"
        className="input-large"
        placeholder="e-mail"
        required
      />
    </div>
    <div>
      <label htmlFor="senha" className="label-large">
        Senha
      </label>
      <input
        type="password"
        name="senha"
        placeholder="senha"
        className="input-large"
        required
      />
    </div>
    <Button type="submit" color="secondary">
      Entrar
    </Button>
  </form>
);

export default Login;
