/* eslint-disable */
import './signup.css'
import { Link } from 'react-router-dom'

function SignUp() {
	return (
		<div className="wrapper">
			<div className="container-signup">
				<div className="modal__block">
					<form className="modal__form-login">
						<a href="../">
							<div className="modal__logo">
								<img src="./img/logo_modal.png" alt="logo" />
							</div>
						</a>
						<input
							className="modal__input login"
							type="text"
							name="login"
							placeholder="Почта"
						/>
						<input
							className="modal__input password-first"
							type="password"
							name="password"
							placeholder="Пароль"
						/>
						<input
							className="modal__input password-double"
							type="password"
							name="password"
							placeholder="Повторите пароль"
						/>
						<button className="modal__btn-signup-ent">
							<Link to="/">Зарегистрироваться</Link>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp
