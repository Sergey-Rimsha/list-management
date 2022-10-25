import s from "../ListManagement.module.scss";
import {Item} from "../Item/Item";
import {Nav} from "../nav/Nav";
import {ItemType} from "../ListManagementContainer";
import React, {ChangeEvent, useCallback, useState} from "react";

type PropsType = {
	listIndex: number
	listId: string
	name: string
	items: ItemType[]
	addNewItemList: (listId: string, name: string) => void
	deleteItemList: (listId: string, itemId: string) => void
	moveAllItemsList: (listIndex: number, listId: string) => void
	checkedListItem: (listId: string, itemId: string, checked: boolean) => void
	moveListItems: (listIndex: number, listId: string) => void
}

export const List = React.memo((props: PropsType) => {

	const {
		listIndex,
		listId,
		name,
		items,
		addNewItemList,
		deleteItemList,
		moveAllItemsList,
		checkedListItem,
		moveListItems,
	} = props;

	const [newItemName, setNewItemName] = useState<string>('');

	const onChangeNewItemName = (e: ChangeEvent<HTMLInputElement>) => {
		setNewItemName(e.currentTarget.value);
	};

	const onClickHandlerAddNewItem = useCallback(() => {
		if (newItemName.length >= 1) {
			addNewItemList(listId, newItemName);
		}
		setNewItemName('');
	}, [addNewItemList, listId, newItemName]);

	const onDeleteItem = useCallback((id: string) => {
		deleteItemList(listId, id);
	},[deleteItemList, listId]);

	const onMoveAllItems = useCallback(() => {
		moveAllItemsList(listIndex, listId);
	},[listId, listIndex, moveAllItemsList]);

	const onCheckedItem = useCallback((itemId: string, checked: boolean) => {
		checkedListItem(listId, itemId, checked)
	},[checkedListItem, listId]);

	const onMoveItems = useCallback(() => {
		moveListItems(listIndex, listId);
	},[listId, listIndex, moveListItems]);

	return (
		<div className={`${s.listManagement__list} ${s.list}`}>
			<div className={s.list__title}>
				<h3>{name}</h3>
			</div>
			<div className={s.list__newItem}>
				<input type='text' value={newItemName} onChange={onChangeNewItemName}  placeholder='new item list' />
				<div className={`${s.list__button} ${s.button}`}>
					<button type='button' onClick={onClickHandlerAddNewItem}>add</button>
				</div>
			</div>
			<div className={s.list__content}>
				{
					items.map((item, index) => {
						return (
							<div key={item.id} className={s.list__item}>
								<Item
									index={index}
									id={item.id}
									name={item.name}
									checked={item.checked}
									onDeleteItem={onDeleteItem}
									onCheckedItem={onCheckedItem}
								/>
							</div>
						)
					})
				}
			</div>
			<Nav
				onMoveAllItems={onMoveAllItems}
				onMoveItems={onMoveItems}
			/>
		</div>
	)
});
