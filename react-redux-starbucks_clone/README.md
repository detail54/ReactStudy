## dev

- react
- typescript
- redux
- emotion

## package

- yarn create react-app react-redux-starbucks_clone --template typescript
- yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
- yarn add eslint-plugin-react eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-jsx-a11y eslint-plugin-import prettier eslint-config-prettier eslint-plugin-prettier -D

## issue

- eslint 설정시 아래 에러 발생.
  [Error while loading rule 'prettier/prettier': context.getPhysicalFilename is not a function]
  : eslint-plugin-prettier@4.0.0 과 eslint@7.11.0 호환되지 않아 발생. (CRA는 7.11.0 버전)
  -> 해결 : yarn upgrade -R eslint => react-scripts의 ESLint에 대한 종속성을 업데이트
