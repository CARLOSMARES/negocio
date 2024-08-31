module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
  },
};
