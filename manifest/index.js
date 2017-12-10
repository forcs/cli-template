module.exports = {
  name: '{{projectName}}',
  version: '{{projectVersion}}',
  launcher: 'index',
  entry: {
    index: {
      title: '首页',
      name: 'index.js'
    }{{#if supportMacawAdmin}},
    login: {
      title: '登录',
      name: 'login.js'
    },
    password: {
      title: '修改密码',
      name: 'password.js'
    }{{/if}}
  }
}
