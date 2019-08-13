import edit from './components/edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import './style.scss';
import './editor.scss';

registerBlockType( 'sassy-blocks/post-grid', {
    title: __('SB Post Grid'),
    icon: 'welcome-write-blog',
    category: 'sassy-blocks',
    keywords: [
        __('Post'),
        __('News'),
        __('sassy-blocks'),
    ],
    edit,
    save() {
        // Rendering in PHP
        return null;
    },
    
});