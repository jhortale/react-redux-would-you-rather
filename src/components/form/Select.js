import React from "react";
import styled from "styled-components";

function Select(props) {
  const { placeHolder, data } = props;
  return (
    <Form {...props}>
      <InputStyle>
        <option>{placeHolder}</option>
        {/* {data.map(item => <option value={item.id}>{{item.name}}</option>)} */}

        <option>2</option>
      </InputStyle>
      <Submit></Submit>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  border-bottom-width: 1px;
  border-color: #d9d5dc;
  background-color: transparent;
  flex-direction: row;
  padding-left: 16px;
`;

const SelectYourUsername = styled.span`
  font-family: Roboto;
  font-size: 16px;
  line-height: 16px;
  padding-top: 16px;
  padding-bottom: 8px;
  color: rgba(238, 238, 238, 1);
  opacity: 0.5;
  align-self: flex-start;
`;

const InputStyle = styled.select`
  font-family: Roboto;
  color: rgba(238, 238, 238, 1);
  padding-right: 5px;
  font-size: 16px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  padding-top: 14px;
  padding-bottom: 8px;
  padding-left: 30px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default Select;
