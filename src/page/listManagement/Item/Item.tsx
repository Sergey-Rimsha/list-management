import React, {ChangeEvent, useCallback} from "react";

import s from './Item.module.scss';

type PropsType = {
	index: number
	id: string
	name: string
	checked: boolean
	onDeleteItem: (id: string) => void
	onCheckedItem: (itemId: string, checked: boolean) => void
}

export const Item = React.memo((props: PropsType) => {

	const {index, id, name, checked, onDeleteItem, onCheckedItem} = props;

	const onClickHandlerDeleteItem = useCallback(() => {
		onDeleteItem(id)
	},[id, onDeleteItem])

	const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		onCheckedItem(id, e.currentTarget.checked)
	},[id, onCheckedItem])

	return (
		<div className={s.item}>
			<div className={s.item__wrapElement}>
				<div className={s.item__number}>{index}.</div>
				<div className={s.item__name}>{name}</div>
			</div>
			<div className={s.item__wrapElement}>
				<div className={s.item__checkbox}>
					<input onChange={onChangeChecked} type="checkbox" checked={checked}/>
				</div>
				<div className={`${s.item__button}`}>
					<button type='button' onClick={onClickHandlerDeleteItem}>delete</button>
				</div>
			</div>
		</div>
	)
});
