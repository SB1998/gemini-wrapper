### Gemini Wrapper

This is an minimum Electron Wrapper for Google Gemini

It whitelists urls starting with:
- **gemini:** https://gemini.google.com/ 
- **cookie consent:** https://consent.google.com/m?continue=https://gemini.google.com
- **login:** https://accounts.google.com/v3/signin

Steps to setup:
- install node (eg. with asdf)
- ```npm install``` or ```yarn install```
- follow with:
    - *to run (directly electron)*: ```npm run start``` or ```yarn run start```
    - *to build (AppImage for linux, find it in dist/):*: ```npm run build``` or ```yarn run build```

