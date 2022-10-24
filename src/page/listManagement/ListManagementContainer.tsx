import {ListManagement} from "./ListManagement";
import {useState} from "react";

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
	active: boolean
}

export const ListManagementContainer = () => {

	const [stateList, setSateList] = useState<StateListType[]>([
		{id: '1', name: 'list 1'},
		{id: '2', name: 'list 2'},
		{id: '3', name: 'list 3'},
	]);

	const [stateItems, setStateItems] = useState<StateItemsType>( {
		'1': [
			{id: '1', name: 'Item-1', active: false},
			{id: '2', name: 'Item-2', active: false},
			{id: '3', name: 'Item-3', active: false},
		],
		'2': [
			{id: '1', name: 'Item-1', active: false},
			{id: '2', name: 'Item-2', active: false},
			{id: '3', name: 'Item-3', active: false},
		],
		'3': [
			{id: '1', name: 'Item-1', active: false},
			{id: '2', name: 'Item-2', active: false},
			{id: '3', name: 'Item-3', active: false},
		],
	});

	const addNewItemList = (listId: string, name: string) => {

		const id = '4';

		const newItem = {id, name, active: false};
		setStateItems({...stateItems, [listId]: [...stateItems[listId], newItem]})
	}

	return (
		<>
			<ListManagement lists={stateList} items={stateItems}/>
		</>
	)
}
