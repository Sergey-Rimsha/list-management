import {List} from "./list/List";
import {StateItemsType, StateListType} from "./ListManagementContainer";

import s from './ListManagement.module.scss';
import React from "react";

type PropsType = {
	lists: StateListType[]
	items: StateItemsType
	addNewItemList: (listId: string, name: string) => void
	deleteItemList: (listId: string, itemId: string) => void
	moveAllItemsList: (ListId: string) => void
	checkedListItem: (listId: string, itemId: string, checked: boolean) => void
	moveListItems: (listId: string) => void
	renameItemList: (listId: string, itemId: string, name: string) => void
}

export const ListManagement = React.memo((props: PropsType) => {

	const {
		lists,
		items,
		addNewItemList,
		deleteItemList,
		moveAllItemsList,
		checkedListItem,
		moveListItems,
		renameItemList,
	} = props;

	return (
		<section className={s.listManagement}>
			{
				lists.map(list => {
					return (
						<List
							key={list.id}
							listId={list.id}
							name={list.name}
							items={items[list.id]}
							addNewItemList={addNewItemList}
							deleteItemList={deleteItemList}
							moveAllItemsList={moveAllItemsList}
							checkedListItem={checkedListItem}
							moveListItems={moveListItems}
							renameItemList={renameItemList}
						/>
					)
				})
			}
		</section>
	)
});
