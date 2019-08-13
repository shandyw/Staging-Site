import edit from './components/edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import './style.scss';
import './editor.scss';

registerBlockType( 'sassy-blocks/social-sharing', {
    title: __('SB Social Sharing'),
    icon: 'share',
    category: 'sassy-blocks',
    keywords: [
        __('social'),
        __('sharing'),
        __('sassy-blocks'),
    ],
    edit,
    save() {
        // Rendering in PHP
        return null;
    },

});