module.exports = {
    extends: [
        "plugin:vue/vue3-recommended",
        "prettier",
        "prettier/vue"
    ],
    rules: {
        "vue/no-unused-vars": "errors",
        "vue/no-multiple-template-root": "off",
        "no-unused-expressions": "off"
    }
}