import { Story, Meta } from '@storybook/react'
import { Main } from './Main'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
