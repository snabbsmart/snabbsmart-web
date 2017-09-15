import React, { Component } from 'react';
import './App.css';
let pin = 12345;

const EnterPin = () => (
  <div className="row card dim">
    <h1 className="text-center" id="pin">PIN: {pin}</h1>
  </div>
);

export default EnterPin;
