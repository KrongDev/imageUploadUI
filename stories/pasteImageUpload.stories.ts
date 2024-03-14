

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {DragAndDropImage} from "../comp/dragAndDrop/DragAndDropImage";
import './css/DragDrop.scss';
import './css/ImageUploadForm.scss';
import {PasteImageUpload} from "../comp/pasteImageUpload/PasteImageUpload";

const meta = {
    title: 'image/pasteCopy',
    component: PasteImageUpload,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof PasteImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Image: Story = {};
