import windowsConfig from '../windows'

const rootPath = process.env.NODE_ENV === 'production' ? '/' : '/'

const apiUrl = console.error('请先在manifest.js中设置接口地址')
const staticUrl = console.error('请先在manifest.js中设置图片资源地址前缀')

export default {
  name: '{{projectName}}',
  title: '{{applicationName}}',
  logo: require('../assets/logo.svg'),
  version: '{{projectVersion}}',
  versionName: '{{applicationVersion}}',
  windows: windowsConfig,
  index: '/',
  modelGlobal: {
    baseUrl: apiUrl
  },
  imageloader: {
    uploadUrl: `${apiUrl}/upload`,
    imageUrl: `${apiUrl}/image/:id`,
    staticPrefix: `${staticUrl}/images/`
  },
  logger: {
    enabled: false
  }{{#if supportMacawAdmin}},
  auth: {
    enable: true,
    loginUrl: `//${rootPath}login.html`,
    passwordUrl: `//${rootPath}password.html`,
    redirectParam: 'next',
    isLoginApi: `${apiUrl}/auth/islogin`,
    loginApi: `${apiUrl}/auth/`,
    logoutApi: `${apiUrl}/auth/logout`,
    passwordApi: `${apiUrl}/auth/password`
  },
  ucenter: {
    userApi: `${apiUrl}/ucenter/user`,
    usersApi: `${apiUrl}/ucenter/users`,
    roleApi: `${apiUrl}/ucenter/role`,
    rolesApi: `${apiUrl}/ucenter/roles`,
    permissionsApi: `${apiUrl}/ucenter/perms`
  }{{/if}}
}
