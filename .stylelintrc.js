module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": ["^(.[a-z][a-z0-9]*)(-[a-z0-9]+)*((__([a-z][a-z0-9]*)(-[a-z0-9]+)*)?)$"]
  }
};