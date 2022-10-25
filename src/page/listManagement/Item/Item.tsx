import React, {ChangeEvent, useCallback, useState} from "react";

import s from './Item.module.scss';

type PropsType = {
	index: number
	id: string
	name: string
	checked: boolean
	onDeleteItem: (id: string) => void
	onCheckedItem: (itemId: string, checked: boolean) => void
	onRenameItem: (itemId: string, name: string) => void
}

export const Item = React.memo((props: PropsType) => {

	const {index, id, name, checked, onDeleteItem, onCheckedItem, onRenameItem} = props;

	const [editeMode, setEditeMode] = useState<boolean>(false);

	const [renameItem, setRenameItem] = useState<string>(name);

	const onClickHandlerDeleteItem = useCallback(() => {
		onDeleteItem(id);
	},[id, onDeleteItem]);

	const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		onCheckedItem(id, e.currentTarget.checked);
	},[id, onCheckedItem]);


	const onClickHandlerEditeMode = () => {
		setEditeMode(true);
	};

	const onChangeRenameItem = (e: ChangeEvent<HTMLInputElement>) => {
		setRenameItem(e.currentTarget.value);
	};

	const onSaveRenameItem = useCallback(() => {
		if (renameItem !== name && renameItem.length >= 1 ) {
			onRenameItem(id, renameItem);
		}
		setEditeMode(false);
	},[id, name, onRenameItem, renameItem]);

	return (
		<div className={s.item}>
			<div className={s.item__wrapElement}>
				<div className={s.item__number}>{index}.</div>
				{
					!editeMode ?
						<div onDoubleClick={onClickHandlerEditeMode} className={s.item__name}>{name}</div> :
						<input type='text' onChange={onChangeRenameItem} value={renameItem}/>
				}
			</div>
			<div className={s.item__wrapElement}>
				<div className={s.item__checkbox}>
					<input onChange={onChangeChecked} type="checkbox" checked={checked}/>
				</div>
				{
					!editeMode ?
						<div className={`${s.item__button}`}>
							<button type='button' onClick={onClickHandlerEditeMode}>edite</button>
						</div> :
						<div className={`${s.item__button}`}>
							<button type='button' onClick={onSaveRenameItem}>save</button>
						</div>
				}
				<div className={`${s.item__button} ${s.item__button_delete}`}>
					<button type='button' onClick={onClickHandlerDeleteItem}>delete</button>
				</div>
			</div>
		</div>
	)
});
