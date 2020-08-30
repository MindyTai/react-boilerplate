# Basic boilerplate for react projects

- eslint
- webpack
    - loader
        - [babel loader](https://github.com/babel/babel-loader)
            - @babel/preset-react
            - @babel/preset-env
        - [file loader](https://webpack.js.org/loaders/file-loader/#filename-templates)
    - plugin
        - [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/https://webpack.js.org/plugins/html-webpack-plugin/) 
        - [CleanWebpackPlugin](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder)
    - recognize `.jsx` file extension
        - babel loader
        - [resolve.extensions](https://webpack.js.org/configuration/resolve/#resolveextensions)
    - hot reload
        - webpack-dev-server
        - webpack-dev-middleware + webpack-hot-middleware
            - with an express server 
    - run [offline(PWA)](https://webpack.js.org/guides/progressive-web-application/)
        - app serves online
            - http-server
        - app can function when offline
            - Workbox
                - create service worker
                - register service worker
                - runtime catching
         

