import React from 'react';
import FormItem from '../FormItem';
import getRandomColor from '../../utils/getRandomColor';
import StyledButton from '../StyledButton';
import StyledH1 from '../StyledH1';

const FormPage = ({items, setItems}) => {

  const addEmptyItem = () => {
    setItems([...items, {id: new Date().getTime(), title: "New item", qt:0, color:getRandomColor()}]);
  };

  const editItem = (item) => {
    let i = items.findIndex((a => a.id === item.id));
    let newItems = [...items];
    newItems[i] = item;
    setItems(newItems);
  };

  const deleteItem = (id) => {
    setItems(items.filter(el => el.id !== id));
  };

  return (
    <div>
      <StyledH1>Form</StyledH1>
      {items.map((item, i) => {
        return (
          <FormItem i={i} item={item} key={item.id} deleteItem={deleteItem} editItem={editItem} />
        )
      })}
      <StyledButton onClick={addEmptyItem} >+ Add item</StyledButton>
    </div>
  );
};

export default FormPage;
