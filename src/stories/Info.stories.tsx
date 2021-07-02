import { Story, ComponentMeta } from '@storybook/react';

import Info, { InfoProps } from '../components/Info';

export default {
  title: 'Components/Info',
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Post não encontrado',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae mollitia blanditiis iusto numquam corrupti sed accusamus. Magnam officiis autem mollitia perferendis iusto modi eum architecto neque pariatur. Eaque, praesentium?',
  
};
