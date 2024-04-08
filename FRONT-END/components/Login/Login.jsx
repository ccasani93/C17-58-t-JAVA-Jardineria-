// 'use client'
import "../../css/login.css";

const Login = () => {
  return (
    <>
      <main>
        <img src="/img/Sin título-1-Recuperado 2.png" alt="" />
        <h2>Empezá tu pasión por las plantas</h2>

        <form>
          <div id="input">
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo electrónico..."
            />
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña..."
              />
              {/* <lord-icon
                    src="https://cdn.lordicon.com/vfczflna.json"
                    trigger="click"
                    colors="primary:#121331,secondary:#000000"
                    class="eye">
                </lord-icon> */}
            </div>
          </div>
          <div id="forgotPassword">
            <a href="#">Olvidé mi contraseña</a>
          </div>
          <input type="submit" value="Ingresar" id="submit" />
          <div id="createAccount">
            <p>¿No tenés cuenta?</p>
            <a href="#">Crear cuenta</a>
          </div>
        </form>
      </main>

      <aside>
        <span></span>
        <h1>Rincón Verde</h1>
      </aside>
    </>
  );
};

export default Login;
