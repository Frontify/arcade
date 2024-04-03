/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type CSSPropertiesHover } from '../serializer/types';

export const defaultStyles: Record<string, Record<string, CSSPropertiesHover> | CSSPropertiesHover> = {
    heading1: {
        fontSize: '48px',
        fontWeight: 700,
        fontStyle: 'normal',
    },
    heading2: {
        fontSize: '32px',
        fontWeight: 700,
        fontStyle: 'normal',
    },
    heading3: {
        fontSize: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    heading4: {
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    custom1: {
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    custom2: {
        fontSize: '14px',
        fontWeight: 600,
        fontStyle: 'normal',
    },
    custom3: {
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'underline',
    },
    quote: {
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'italic',
    },
    'link-plugin': {
        fontSize: '14px',
        fontStyle: 'normal',
        color: 'rgb(113, 89, 215)',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
    p: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    imageTitle: {
        color: 'rgb(0, 0, 0)',
        fontFamily: 'Droid Sans',
        fontSize: '15px',
        fontStyle: '',
        fontWeight: '400',
        letterSpacing: 'normal',
        lineHeight: '1.4',
        marginBottom: '3px',
        marginTop: '0',
        textDecoration: '',
        textTransform: 'none',
    },
    imageCaption: {
        color: 'rgb(153, 153, 153)',
        fontFamily: 'Droid Sans',
        fontSize: '13.5px',
        lineHeight: '1.5',
    },
    'button-plugin': {
        buttonPrimary: {
            fontSize: '13px',
            color: 'rgb(255, 255, 255)',
            paddingTop: '10px',
            paddingRight: '20px',
            paddingBottom: '10px',
            paddingLeft: '20px',
            fontFamily: 'inherit',
            fontStyle: '',
            fontWeight: 400,
            textTransform: 'none',
            hover: {
                color: 'rgb(255, 255, 255)',
                borderColor: 'rgb(50, 0, 236)',
                backgroundColor: 'rgb(61, 7, 255)',
            },
            lineHeight: '1.3',
            borderColor: 'rgb(102, 60, 255)',
            borderWidth: '2px',
            borderRadius: '5px',
            backgroundColor: 'rgb(130, 95, 255)',
        },
        buttonSecondary: {
            fontSize: '13px',
            color: 'rgb(102, 102, 102)',
            paddingTop: '10px',
            paddingRight: '20px',
            paddingBottom: '10px',
            paddingLeft: '20px',
            fontFamily: 'inherit',
            fontStyle: '',
            fontWeight: 400,
            textTransform: 'none',
            hover: {
                color: 'rgb(76, 76, 76)',
                borderColor: 'rgb(155, 155, 155)',
                backgroundColor: 'rgb(172, 172, 172)',
            },
            lineHeight: '1.3',
            borderColor: 'rgb(207, 207, 207)',
            borderWidth: '2px',
            borderRadius: '5px',
            backgroundColor: 'rgb(230, 230, 230)',
        },
        buttonTertiary: {
            fontSize: '13px',
            color: 'rgb(102, 60, 255)',
            paddingTop: '10px',
            paddingRight: '20px',
            paddingBottom: '10px',
            paddingLeft: '20px',
            fontFamily: 'inherit',
            fontStyle: '',
            fontWeight: 400,
            textTransform: 'none',
            hover: {
                color: 'rgb(53, 0, 244)',
                borderColor: 'rgb(61, 7, 255)',
                backgroundColor: 'rgb(255, 255, 255)',
            },
            lineHeight: '1.3',
            borderColor: 'rgb(130, 95, 255)',
            borderWidth: '2px',
            borderRadius: '5px',
            backgroundColor: 'rgb(255, 255, 255)',
        },
    },
};
