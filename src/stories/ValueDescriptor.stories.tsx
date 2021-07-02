import { Story, ComponentMeta } from '@storybook/react';

import ValueDescriptor, { ValueDescriptorProps } from '../components/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ValueDescriptor>;

const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = { 
  description: 'Ganhos da semana',
  color: 'default',
  value: 560332.02,
};

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = { 
  description: 'Ganhos da semana',
  color: 'default',
  isCurrency: true,
  value: 560332.02,
};


export const Primary = Template.bind({});
Primary.args = { 
  description: 'Ganhos da semana',
  color: 'primary',
  value: 560332.02,
};

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = { 
  description: 'Ganhos da semana',
  color: 'primary',
  isCurrency: true,
  value: 560332.02,
};