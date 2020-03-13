import React from 'react';
import { BarcodeOutlined } from '@ant-design/icons';
import './styles.css';

const NotFound = props => (
  <div className={props.className || 'container-fluid-sm'}>
    <div className={props.contentClassName || 'empty-view-message'}>
      <BarcodeOutlined className="rui font-icon fa" />
      {props.title && <span>{props.title}</span>}
      {props.message && <span>{props.message}</span>}
      {props.children}
    </div>
  </div>
);

export default NotFound;
