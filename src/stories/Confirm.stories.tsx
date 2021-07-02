import { Story, ComponentMeta } from '@storybook/react';

import Confirm, { ConfirmProps } from '../components/Confirm';

export default {
  title: 'Components/Confirm',
  component: Confirm,
} as ComponentMeta<typeof Confirm>;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Deseja realmente sair?',  
};
