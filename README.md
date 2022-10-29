## Create your application

```
mkdir sanforddesk && cd sanforddesk
npm init
npm install --save-dev electron
```

## Configure start command

```
{
  "scripts": {
    "start": "electron ."
  }
}
```
###Run the main process

```
npm start
```

## Package and distribute your application

```
npm install --save-dev @electron-forge/cli
npx electron-forge import
npm run make
```