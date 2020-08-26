memo

install node

```bash
# ex.
git clone https://github.com/riywo/ndenv ~/.ndenv
echo 'export PATH="$HOME/.ndenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(ndenv init -)"' >> ~/.bashrc
source ~/.bashrc; git clone https://github.com/riywo/node-build.git $(ndenv root)/plugins/node-build

ndenv install v12.18.3
ndenv rehash
ndenv global v12.18.3
npm install -g yarn
```

create project and install npm packages

```bash
yarn create react-app my-app --template typescript
yarn add -D prettier prettier-eslint prettier-eslint-cli
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

install packages for react

```bash
yarn add -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn add react-router react-router-dom @types/react-router @types/react-router-dom
yarn add bootstrap @types/bootstrap
```
