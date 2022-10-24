
import s from './ListManagement.module.scss';
import {Item} from "./Item/Item";
import {Nav} from "./nav/Nav";
import {StateItemsType, StateListType} from "./ListManagementContainer";

type PropsType = {
	lists: StateListType[]
	items: StateItemsType
}

export const ListManagement = (props: PropsType) => {


	return (
		<section className={s.listManagement}>
			{
				props.lists.map(list => {
					return (
						<div key={list.id} className={`${s.listManagement__list} ${s.list}`}>
							<div className={s.list__title}>
								<h3>{list.name}</h3>
							</div>
							<div className={s.list__newItem}>
								<input type='text' placeholder='new item list' />
								<div className={`${s.list__button} ${s.button}`}>
									<button>add</button>
								</div>
							</div>
							<div className={s.list__content}>
								{
									props.items[list.id].map((item, index) => {
										return (
											<div key={item.id} className={s.list__item}>
												<Item index={index} name={item.name} active={item.active} />
											</div>
										)
									})
								}
							</div>
							<Nav />
						</div>
					)
				})
			}
		</section>
	)
}
