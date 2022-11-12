# README.md

## 操作手順メモ

### プロジェクトひな形を生成する

```zsh
% npx create-react-app . --template typescript
```

留意点：カレントディレクトリ内のファイルはすべて削除しておかないとエラーになります。

### ひな形から不要ファイルを削除する

削除するファイル
src/App.test.tsx  
src/index.css  
src/logo.svg  
src/reportWebVitals.ts
src/setupTests.ts

### 不要な行を削除する

※詳細は[動画](https://youtu.be/f55qeKGgB_M?t=19832)を参照  
対象ファイル:src/index.tsx, App.tsx

### react-router-domモジュールをインストール

```zsh
% npm install react-router-dom
```

### src/pages/main.tsx作成

```typescript
export const Main = () => {
  return <div>Home Page</div>
}
```

### src/pages/login.tsx作成

```typescript
export const Login = () => {
  return <div>Login Page</div>
}
```

### App.tsx編集

```typescript
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main";
import { Login } from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>);
}

export default App;

```

### src/components/navbar.tsx作成

```typescript
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
  <div>
    <Link to="/"> Home </Link>  
    <Link to="/login"> Login </Link>  
  </div>
  );
};
```

### App.tsxにNavbarを追加編集

```typescript

〜　省略　〜

import {Navbar} from "./components/navbar";// ← 行追加

〜　省略　〜

      <Router>
        <Navbar />　 {/* ← 行追加 */}
        <Routes>
〜　省略　〜
```

### firebaseのインストール

```zsh
% npm install firebase
```

### src/config/firebase.tsの作成

firebaseの[サイト](https://firebase.google.com/)で作成したプロジェクト（ここではreact-course）の「全般」タブに記載されている初期化プログラムをコピペする

```typescript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVx1PogaFYEu95lm17HlODC9kz1B1Y5Pg",
  authDomain: "react-cours-cd049.firebaseapp.com",
  projectId: "react-cours-cd049",
  storageBucket: "react-cours-cd049.appspot.com",
  messagingSenderId: "782991039854",
  appId: "1:782991039854:web:e21e1baac45060723e357f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

### firebaseをインストール

```zsh
% npm install firebase
```

### firebaseでAuthenticationを設定する

[動画のここ](https://youtu.be/f55qeKGgB_M?t=20875)を参考にし、新たなAuth（ユーザー認証）を作成する。

### src/config/firebase.ts編集（行追加）

```typescript
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; //行追加

〜中略〜

export const auth = getAuth(app);                 //行追加
export const provider = new GoogleAuthProvider(); //行追加
```

### src/pages/login.tsxを編集

```typescript
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div>
      <p>Sigh In With Google to Continue </p>
      <button onClick={signInWithGoogle}> Sign In With Google</button>
    </div>
  );
};

```

### src/components/navbar.tsx追加編集

```typescript
import { Link } from "react-router-dom";
import { auth } from "../config/firebase"; // 1行追加

export const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>

      {/* ------ 3行追加 ------- */}
      <div>
        <p>{auth.currentUser?.displayName}</p>
        <img src={auth.currentUser?.photoURL || ""} width="100" height="100" alt="ユーザー画像"/>
        {/* ↑　srcにnullは代入不可のため、||""を追加してあります */}
      </div>
    </div>
  );
};
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
