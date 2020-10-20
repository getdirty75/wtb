<h1>
  World Tour Beats&nbsp; <sup><i>a.k.a. Front Edition</i></sup><br>
</h1>

**Source Code** _for World Tour Beats_ a project to build a web application with Babel, Webpack,React, Redux, Thunk, JSX, Typescript, Sass, Material UI, React-Globe, Axios
provided by <a href="https://theasymetrics.com/">theasymetrics</a> (Knowledge Magazine).

---

This project was bootstrapped with [React Starter Kit for Firebase][rfs].

### Tech Stack

- [Create React App][cra] (★ 73k) for development and test infrastructure (see [user guide][cradocs])
- [Material UI][mui] (★ 52k) to reduce development time by integrating Google's [Material Design][material]

Also, you need to be familiar with [HTML][html], [CSS][css], [JavaScript][js] ([ES2015][es2015]) and [React](https://reactjs.org/docs/).

### Directory Layout

```bash
├── node_modules/                  # 3rd-party libraries and utilities
├── public/                        # Static files such as favicon.ico etc.
├── scripts/                       # Automation scripts (yarn update-schema etc.)
├── src/                           # Application source code
│   ├── Stage/                     # Admin section (Dashboard, User Management etc.)
│   │   ├── Component/             # GraphQL mutations
│   │   │   ├── Fade/              # GraphQL mutations
│   │   │   ├── MenuMobile/        # The top-level GraphQL query fields
│   │   │   ├── MenuTop/           # The top-level GraphQL query fields
│   │   ├── MenuTop/               # HTML templates for server-side rendering
│   │   ├── Feature/               # GraphQL mutations
│   │   │   ├── Home/              # GraphQL mutations
│   │   │   ├── Login/             # The top-level GraphQL query fields
│   │   │   ├── Profile/           # HTML templates for server-side rendering
│   │   ├── Utils/                 # HTML templates for server-side rendering
│   ├── Store/                     # Shared React components and HOCs
│   │   ├── mutations/             # GraphQL mutations
│   │   ├── queries/               # The top-level GraphQL query fields
│   │   ├── templates/             # HTML templates for server-side rendering
│   │   ├── types/                 # GraphQL types: User, UserRole, UserIdentity etc.
│   │   ├── api.js                 # GraphQL API middleware
│   │   ├── app.js                 # Express.js application
│   │   ├── config.js              # Configuration settings to be passed to the client
│   └── App.tsx                    # Overrides for Material UI default styles
│   └── index.scss                 # Overrides for Material UI default styles
│   └── index.tsx                  # Overrides for Material UI default styles
│   └── react-app-env.d.ts         # Overrides for Material UI default styles
│   └── serviceWorker.js           # Overrides for Material UI default styles
├── .README.md                     # Environment variables for the production build
├── .yarn.lock                     # Environment variables for the test build
├── tsconfig.json                  # GraphQL schema (auto-generated, used by Relay)
└── package.json                   # The list of project dependencies + NPM scripts
```

### Prerequisites

- [Node.js][nodejs] v10.15 or higher + [Yarn][yarn] v1.17 or higher &nbsp; (_HINT: On Mac install
  them via [Brew][brew]_)
- [VS Code][vc] editor (preferred) + [Project Snippets][vcsnippets], [EditorConfig][vceditconfig],
  [ESLint][vceslint], [Prettier][vcprettier], and [Babel JavaScript][vcjs] plug-ins


Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

### License

Copyright © 2020-present Theasymetrics. This source code is licensed under the WTB license.

---

Made with ♥ by Benoit Raynaud ([@asymetrics](https://theasymetrics.com), [blog](https://theasymetrics.com))
and [contributors](https://github.com/kriasoft/react-firebase-starter/graphs/contributors) :wave:
[Get in touch!](https://twitter.com/messages/compose?recipient_id=16394396)


[cra]: https://github.com/facebook/create-react-app
[cradocs]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md

[mui]: https://material-ui-next.com/
[material]: https://material.io/

[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[js]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[es2015]: http://babeljs.io/learn-es2015/
[react]: https://facebook.github.io/react/

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vcsnippets]: https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vcjs]: https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
[bc]: https://www.scootersoftware.com/
