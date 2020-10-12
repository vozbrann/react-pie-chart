import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
`;

const Form = styled.form`
    display: flex;
    margin-bottom: 20px;
`;

const FormGroup = styled.div`
    width: ${props => props.w};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    margin-right: 20px;
    p {
      margin-bottom: 8px;
    }
`;

const Counter = styled.p`
    display: flex;
    align-items: flex-end;
    padding: 15px 0;
    margin-right: 20px;
    white-space: nowrap;
`;

const FormItem = ({item, i, editItem, deleteItem}) => {
  const {id, title, qt} = item;
  const onChange = (e) => {
    editItem({...item, [e.target.name]: e.target.value});
  };
  const onDelete = () => {
    deleteItem(id);
  };
  const handleFocus = (event) => event.target.select();
  return (
    <Form>
      <Counter>№ {i + 1}</Counter>
      <FormGroup w="100%">
        <p>Title</p>
        <Input onFocus={handleFocus} onChange={onChange} name={'title'} type="text" value={title}/>
      </FormGroup>
      <FormGroup w="100%">
        <p>Quantity</p>
        <Input onFocus={handleFocus} onChange={onChange} name={'qt'} type="number" step="any"
               value={qt}/>
      </FormGroup>
      <FormGroup>
        <StyledButton danger onClick={onDelete}>Delete</StyledButton>
      </FormGroup>
    </Form>
  );
};

export default FormItem;
