import { Story, ComponentMeta } from '@storybook/react';
import FieldDescriptor, { FieldDescriptorProps } from '../components/FieldDescriptor';

export default {
    title: 'Components/FieldDescriptor',
    component: FieldDescriptor,
} as ComponentMeta<typeof FieldDescriptor>;

const Template: Story<FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {    
    label: 'Celular',
    children: '+55 27 91234-5678'
}
