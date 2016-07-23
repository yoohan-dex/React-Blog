import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

import Panel from '../../components/Panel';
import Article from '../../components/Article';
class ArticlePage extends Component {
  componentDidMount() {

  }
  render() {
    const input = "## 这是一个简历静态页面生成器。\r\n\r\n* 从`resume.js`文件中取出数据，自动填充数据并排版\r\n* 使用`React`和`Sass`制作，`Webpack`作为自动化工具\r\n* 可以一行命令部署到page服务器\r\n\r\n## A generator of static resume page \r\n* Retrieves data from `resume.js` to build an exactly beautiful Web page\r\n* Built with `React`, `Sass` and `Webpack` \r\n* Deploy to `GitHub-page` just one command line\r\n\r\n## 环境要求\r\n\r\n1. [node.js &gt;=4.4](https://nodejs.org/en/)\r\n2. [Ruby编程语言](https://www.ruby-lang.org/zh_cn/)\r\n3. 若要自动部署到page服务器得先存到自己的github上，并且开启SSH Keys\r\n\r\n## Requirements\r\n1. [node.js &gt;=4.4](https://nodejs.org/en/)\r\n2. [Ruby lang](https://www.ruby-lang.org/)\r\n3. For deploying, you should fork the repo to your GitHub and it depends on SSH Keys.  \r\n\r\n## 安装与部署\r\n\r\n1. 点击`fork`之后在自己的仓库`git clone`到本地\r\n2. 在Teminal执行`npm install`\r\n3. 再执行`npm start`可以启动热加载服务器，\r\n进入[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)可以预览内容\r\n4. 修改根目录下的`resume.js`文件\r\n5. 执行`npm run prod`生成静态文件到根目录下的`build`文件夹中\r\n6. 执行`npm run deploy`可push到当前仓库的`gh-page`的branch\r\n\r\n## Quick Start\r\n\r\n1. After `fork` go to your Github `git clone` to your workspace\r\n2. Run `npm install` on Terminal\r\n3. Use `npm start` you can setup hot-load server for page,then you can check[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) \r\n4. Modify `resume.js` found from the root directory.\r\n5. Run `npm run prod` will quickly generate a static HTML file to `build` directory\r\n6. Run `npm run deploy` will push into recent repo's `gh-page` branch\r\n\r\n## 反馈\r\n\r\n 若使用中有任何问题，欢迎反馈，可以在DEMO中找到我的联系方式\r\n\r\n## Feedback\r\n\r\n Welcome feedback if you have any problems and the demo has all my contact  \r\n";
    return (
      <Panel>
        <Article
          image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg"
          input={input}
        />
      </Panel>
    );
  }
}

ArticlePage.propTypes = {

};

export default ArticlePage;
