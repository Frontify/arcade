/* (c) Copyright Frontify Ltd., all rights reserved. */

module.exports = {
    extends: ['@frontify/eslint-config-react', 'plugin:jsx-a11y/recommended', 'plugin:storybook/recommended'],
    plugins: ['jsx-a11y', 'notice'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.js', '*.ts', '*.tsx'],
            rules: {
                'notice/notice': [
                    'error',
                    {
                        template: '/* (c) Copyright Frontify Ltd., all rights reserved. */\n\n',
                        messages: {
                            whenFailedToMatch: 'No Frontify copyright header set.',
                        },
                    },
                ],
            },
        },
    ],
};
