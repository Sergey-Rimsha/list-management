import {v4 as uuidv4} from 'uuid';

import {ListManagement} from "./ListManagement";
import React, {useState} from "react";

export type StateListType = {
	id: string
	name: string
}

export type StateItemsType = {
	[id: string]: Array<ItemType>
}

export type ItemType = {
	id: string
	name: string,
	checked: boolean
}

export const ListManagementContainer = React.memo(() => {

	const [stateList, setSateList] = useState<StateListType[]>([
		{id: '1', name: 'list 1'},
		{id: '2', name: 'list 2'},
		{id: '3', name: 'list 3'},
	]);

	const [stateItems, setStateItems] = useState<StateItemsType>( {
		'1': [
			{id: uuidv4(), name: 'Item-1', checked: false},
			{id: uuidv4(), name: 'Item-2', checked: false},
			{id: uuidv4(), name: 'Item-3', checked: false},
		],
		'2': [
			{id: uuidv4(), name: 'Item-1', checked: false},
			{id: uuidv4(), name: 'Item-2', checked: false},
			{id: uuidv4(), name: 'Item-3', checked: false},
		],
		'3': [
			{id: uuidv4(), name: 'Item-1', checked: false},
			{id: uuidv4(), name: 'Item-2', checked: false},
			{id: uuidv4(), name: 'Item-3', checked: false},
		],
	});

	// create new item list
	const addNewItemList = (listId: string, name: string) => {

		const id = uuidv4();
		const newItem = {id, name, checked: false};

		setStateItems({
			...stateItems,
			[listId]: [...stateItems[listId], newItem]
		});
	};

	// delete item list
	const deleteItemList = (listId: string, itemId: string) => {

		setStateItems({
			...stateItems,
			[listId]: stateItems[listId].filter(item => item.id !== itemId)
		});
	};

	// rename item list
	const renameItemList = (listId: string, itemId: string, name: string) => {

		setStateItems({
			...stateItems,
			[listId]: stateItems[listId].map(item => item.id === itemId ? {...item, name} : item)
		});
	}

	// get next List id
	const getNextListId = (listId: string) => {
		let nextListId = '0';

		stateList.forEach((list, index) => {
			if (list.id === listId) {
				if (index + 1 === stateList.length) {
					nextListId = stateList[0].id;
				} else {
					nextListId = stateList[index + 1].id;
				}
			}
		});

		return nextListId;
	}

	//move all item to next list
	const moveAllItemsList = (listId: string) => {

		const nextListId = getNextListId(listId);

		setStateItems({
			...stateItems,
			[nextListId]: [...stateItems[nextListId], ...stateItems[listId]],
			[listId]: []
		});
	}

	// checkbox checked item
	const checkedListItem = (listId: string, itemId: string, checked: boolean) => {

		setStateItems({
			...stateItems,
			[listId]:
				stateItems[listId].map(item => {
					if (item.id === itemId) {
						return {...item, checked}
					} else {
						return item
					}
				})
		});
	};

	//move items to next List only checked = true
	const moveListItems = (listId: string) => {

		const nextListId = getNextListId(listId);

		// copy items checked = true
		let itemsChecked = [...stateItems[listId].filter(item => item.checked)];

		// replace items checked = false
		itemsChecked = itemsChecked.map(item => ({...item, checked: false}))

		if (itemsChecked.length >= 1) {
			setStateItems({
				...stateItems,
				[nextListId]: [...stateItems[nextListId], ...itemsChecked],
				[listId]: stateItems[listId].filter(item => !item.checked)
			})
		}
	};


	return (
		<>
			<ListManagement
				lists={stateList}
				items={stateItems}
				addNewItemList={addNewItemList}
				deleteItemList={deleteItemList}
				moveAllItemsList={moveAllItemsList}
				checkedListItem={checkedListItem}
				moveListItems={moveListItems}
				renameItemList={renameItemList}
			/>
		</>
	)
});
