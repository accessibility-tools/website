import React from "react";
import styled from "styled-components";
import { icons } from "../../shared/icons";
import Icon from "./Icon";

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export default {
  title: "Design System|Icon",
  component: Icon,
};

export const labels = () => (
  <>
    There are {Object.keys(icons).length} icons
    <List>
      {Object.keys(icons).map((key) => (
        <Item key={key}>
          <Icon icon={key} aria-hidden />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
);

export const inline = () => (
  <>
    this is an inline <Icon icon="plus" aria-label="plus" /> icon (default)
  </>
);

export const block = () => (
  <>
    this is a block <Icon icon="plus" aria-label="plus" block /> icon
  </>
);
