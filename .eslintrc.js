module.exports = {
  env: {
    node: true,
  },
  extends: ["next", "prettier", "plugin:@next/next/recommended"],
  overrides: [
    {
      files: ["*.spec.tsx"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
