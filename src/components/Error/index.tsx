import React from 'react';
import { IErrorProps } from './types/IErrorProps';

import './styles.scss';

const Error: React.FC<IErrorProps> = ({ message }) => (
  <div className="error">
    <div className="error__message">{message}</div>
  </div>
);

export default React.memo(Error);
