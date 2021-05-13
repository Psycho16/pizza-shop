import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components/index';

function Home(props) {
  const pizzas = props.items;
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['Популярности', 'Цене', 'Алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default Home;
