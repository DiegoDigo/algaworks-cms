import { Story, ComponentMeta } from '@storybook/react';
import Input, { InputProps } from '../components/Input';

export default {
    title: 'Components/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {    
    placeholder: 'e.g: Jon Doe'
}

export const WithLabelAndPlaceholder = Template.bind({})
WithLabelAndPlaceholder.args = {
    label: "Label",
    placeholder: 'e.g: Jon Doe'
}

export const WithLabelAndContent = Template.bind({})
WithLabelAndContent.args = {
    label: "Label",
    value: 'Jon Doe'
}

export const WithContent = Template.bind({})
WithContent.args = {   
    value: 'Jon Doe'
}