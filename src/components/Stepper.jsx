import { Steps } from 'antd';
import React from 'react';
const { Step } = Steps;

const Stepper = () => (
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
);

export default Stepper;
