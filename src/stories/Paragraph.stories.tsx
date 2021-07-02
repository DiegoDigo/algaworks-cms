import { Story, ComponentMeta } from '@storybook/react';

import Paragraph, { ParagraphProps } from '../components/Typography/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  size:'default',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex quisquam vero excepturi incidunt voluptate error accusamus mollitia adipisci tempore, voluptas recusandae nobis vitae nulla. Ipsa magni perferendis totam itaque?',

};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex quisquam vero excepturi incidunt voluptate error accusamus mollitia adipisci tempore, voluptas recusandae nobis vitae nulla. Ipsa magni perferendis totam itaque?',

};

