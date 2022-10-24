// import s from "../ListManagement.module.scss";

import s from './Item.module.scss';

type PropsType = {
	index: number
	name: string
	active: boolean
}

export const Item = (props: PropsType) => {

	return (
		<>
			<div className={s.item}>
				<div className={s.item__wrapElement}>
					<div className={s.item__number}>{props.index}.</div>
					<div className={s.item__name}>{props.name}</div>
				</div>
				<div className={s.item__wrapElement}>
					<div className={s.item__checkbox}>
						<input type="checkbox" checked={props.active}/>
					</div>
					<div className={`${s.item__button}`}>
						<button>delete</button>
					</div>
				</div>
			</div>
		</>
	)
}
