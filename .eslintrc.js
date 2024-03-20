module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "globals": {
        "$": "readonly",
        "messages": "readonly",
        "levels": "readonly",
        "clickedCode": "readonly",
        "twttr": "readonly",
        "docs": "readonly",
        "ga": "readonly",
        "levelWin": "readonly",
    },    
    "plugins": [
    ],
    "rules": {
        "no-unused-vars": "off", // or "warn" if you want a warning instead of an error
        "no-prototype-builtins": "off",
        "no-global-assign": "off",
        "no-mixed-spaces-and-tabs": "off",
      }
      
      
}
