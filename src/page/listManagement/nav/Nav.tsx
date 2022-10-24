
import s from './Nav.module.scss'

export const Nav = () => {

	return (
		<div className={s.nav}>
			<div className={s.nav__button}>
				<button>{'move all >'}</button>
			</div>
			<div className={s.nav__button}>
				<button>{'move >'}</button>
			</div>
		</div>
	)
}
