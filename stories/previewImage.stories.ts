

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {PreviewImage} from "../comp/preview/PreviewImage";
import './css/ImageUploadForm.scss';

const meta = {
    title: 'image/preview',
    component: PreviewImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof PreviewImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Upload: Story = {};
