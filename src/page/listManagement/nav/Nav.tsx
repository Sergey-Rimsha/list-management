
import s from './Nav.module.scss'
import React, {useCallback} from "react";

type PropsType = {
	onMoveAllItems: () => void
	onMoveItems: () => void
}

export const Nav = React.memo((props: PropsType) => {

	const {onMoveAllItems, onMoveItems} = props;

	const onClickHandlerMoveAllItems = useCallback(() => {
		onMoveAllItems()
	},[onMoveAllItems]);

	const onClickHandlerMoveItems = useCallback(() => {
		onMoveItems();
	},[onMoveItems]);

	return (
		<div className={s.nav}>
			<div className={s.nav__button}>
				<button type='button' onClick={onClickHandlerMoveAllItems}>{'move all >'}</button>
			</div>
			<div className={s.nav__button}>
				<button type='button' onClick={onClickHandlerMoveItems}>{'move >'}</button>
			</div>
		</div>
	)
});
