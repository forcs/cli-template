import windowsConfig from '../windows'

export default {
  name: '{{projectName}}',
  title: '{{applicationName}}',
  logo: require('../assets/logo.svg'),
  version: '{{projectVersion}}',
  versionName: '{{applicationVersion}}',
  windows: windowsConfig,
  index: '/',
  modelGlobal: {
    baseUrl: ''
  },
  logger: {
    enabled: false
  },
  auth: {
    enable: true,
    loginUrl: `//${rootPath}login.html`,
    passwordUrl: `//${rootPath}password.html`,
    redirectParam: 'next',
    isLoginApi: `http://${host}:26006/auth/islogin`,
    loginApi: `http://${host}:26006/auth/`,
    logoutApi: `http://${host}:26006/auth/logout`,
    passwordApi: `http://${host}:26006/auth/password`
  },
  ucenter: {
    userApi: `http://${host}:26006/ucenter/user`,
    usersApi: `http://${host}:26006/ucenter/users`,
    roleApi: `http://${host}:26006/ucenter/role`,
    rolesApi: `http://${host}:26006/ucenter/roles`,
    permissionsApi: `http://${host}:26006/ucenter/perms`
  }
}
