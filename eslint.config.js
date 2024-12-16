import eslintPluginAstro from 'eslint-plugin-astro';
export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            "astro/no-set-html-directive": "error",
            "astro/semi": "error",
            "astro/no-unused-define-vars-in-style": "error",
            "astro/jsx-a11y/alt-text": "error",
            "astro/jsx-a11y/anchor-is-valid": "error",
            "astro/jsx-a11y/aria-props": "error",
            "astro/jsx-a11y/aria-role": "error",
            "astro/jsx-a11y/aria-unsupported-elements": "error",
            "astro/jsx-a11y/heading-has-content": "error",
            "astro/jsx-a11y/iframe-has-title": "error",
            "astro/jsx-a11y/img-redundant-alt": "error",
            "astro/jsx-a11y/no-access-key": "error",
            "astro/jsx-a11y/no-distracting-elements": "error",
            "astro/jsx-a11y/no-redundant-roles": "error",
            "astro/jsx-a11y/role-has-required-aria-props": "error",
            "astro/jsx-a11y/role-supports-aria-props": "error",
            "astro/jsx-a11y/scope": "error",
            "astro/jsx-a11y/tabindex-no-positive": "error"
        }
    }
];