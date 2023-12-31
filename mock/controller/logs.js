
const data = [
  {
    id: '1',
    name: '管理员',
    account: 'admin',
    optionModule: '登录日志',
    optionFunction: '分页查询登录日志',
    requestPath: '/api/system/login-record/page',
    requestMethod: 'GET',
    time: '0.015',
    ipAddrees: '171.120.210.128',
    joinTime: '2022-02-09 15:09:34',
    status: '正常'
  },
  {
    id: '2',
    name: '用户1',
    account: 'admin',
    optionModule: '用户管理',
    optionFunction: '分页查询用户',
    requestPath: '/api/system/user/page',
    requestMethod: 'GET',
    time: '0.045',
    joinTime: '2022-02-09 15:09:34',
    status: '正常',
    ipAddrees: '124.92.199.219'
  },
  {
    id: '3',
    account: 'admin',
    name: '管理员',
    optionModule: '登录日志',
    requestMethod: 'GET',
    requestPath: '/api/system/login-record/page',
    optionFunction: '分页查询登录日志',
    time: '0.027',
    joinTime: '2022-02-09 15:09:34',
    status: '正常',
    ipAddrees: '39.155.212.237'
  },
  {
    id: '4',
    account: 'admin',
    name: '用户2',
    optionModule: '菜单管理',
    requestPath: '/api/system/menu/page',
    requestMethod: 'GET',
    optionFunction: '查询全部菜单',
    time: '2.397',
    joinTime: '2022-02-09 15:09:34',
    status: '失败',
    ipAddrees: '113.65.14.222'
  },
  {
    id: '5',
    account: 'admin',
    name: '管理员',
    optionModule: '文件上传下载',
    requestPath: '/api/file/page',
    requestMethod: 'GET',
    optionFunction: '分页查询文件',
    time: '0.016',
    joinTime: '2022-02-09 15:09:34',
    status: '正常',
    ipAddrees: '113.128.81.221'
  },
  {
    id: '6',
    account: 'admin',
    name: '管理员',
    optionModule: '文件上传下载',
    requestPath: '/api/file/page',
    requestMethod: 'GET',
    optionFunction: '分页查询文件',
    time: '0.051',
    joinTime: '2022-02-09 15:09:34',
    status: '正常',
    ipAddrees: '182.48.101.103'
  },
  {
    id: '7',
    account: 'admin',
    name: '用户1',
    optionModule: '菜单管理',
    requestPath: '/api/system/menu/page',
    requestMethod: 'GET',
    optionFunction: '查询全部菜单',
    time: '0.231',
    joinTime: '2022-02-09 15:09:34',
    status: '正常',
    ipAddrees: '171.213.58.73'
  },
  {
    id: '8',
    account: 'admin',
    name: '用户1',
    optionModule: '菜单管理',
    requestPath: '/api/system/menu/page',
    requestMethod: 'GET',
    optionFunction: '查询全部菜单',
    time: '0.47',
    joinTime: '2022-02-09 15:09:34',
    status: '正常',
    ipAddrees: '119.143.100.106'
  },
  {
    id: '9',
    account: 'admin',
    name: '管理员',
    optionModule: '登录日志',
    requestMethod: 'GET',
    requestPath: '/api/system/login-record/page',
    optionFunction: '分页查询登录日志',
    time: '0.015',
    joinTime: '2022-02-09 15:09:34',
    status: '失败',
    ipAddrees: '139.162.18.175'
  },
  {
    id: '10',
    account: 'admin',
    name: '管理员',
    optionModule: '登录日志',
    requestMethod: 'GET',
    requestPath: '/api/system/login-record/page',
    optionFunction: '分页查询登录日志',
    time: '0.015',
    joinTime: '2022-02-09 15:09:34',
    status: '正常',
    ipAddrees: '14.215.245.130'
  },
]

const loginData = [
  {
    id: '1',
    name: '管理员',
    account: 'admin',
    operatingSystem: 'Windows',
    unitType: 'Windows 10 or Windows Server 2016',
    browser: 'Chrome',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    ipAddrees: '171.120.210.128',
    operatingType: '登录成功'
  },
  {
    id: '2',
    name: '用户1',
    account: 'admin',
    operatingSystem: 'Android',
    unitType: 'Android',
    browser: 'DingTalk',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录成功',
    ipAddrees: '124.92.199.219'
  },
  {
    id: '3',
    account: 'admin',
    name: '管理员',
    operatingSystem: 'Windows',
    unitType: 'Windows 10 or Windows Server 2016',
    browser: 'Firefox',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录成功',
    ipAddrees: '39.155.212.237'
  },
  {
    id: '4',
    account: 'admin',
    name: '用户2',
    operatingSystem: 'Windows',
    unitType: 'Windows 10 or Windows Server 2016',
    browser: 'Chrome',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录失败',
    ipAddrees: '113.65.14.222'
  },
  {
    id: '5',
    account: 'admin',
    name: '管理员',
    operatingSystem: 'Android',
    unitType: 'Android',
    browser: 'Chrome',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录成功',
    ipAddrees: '113.128.81.221'
  },
  {
    id: '6',
    account: 'admin',
    name: '管理员',
    operatingSystem: 'Windows',
    unitType: 'Windows 10 or Windows Server 2016',
    browser: 'MSEdge',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录成功',
    ipAddrees: '182.48.101.103'
  },
  {
    id: '7',
    account: 'admin',
    name: '用户1',
    operatingSystem: 'Windows',
    unitType: 'Windows 10 or Windows Server 2016',
    browser: 'MSEdge',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录成功',
    ipAddrees: '171.213.58.73'
  },
  {
    id: '8',
    account: 'admin',
    name: '用户1',
    operatingSystem: 'Windows',
    unitType: 'Windows 10 or Windows Server 2016',
    browser: 'MicroMessenger',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录成功',
    ipAddrees: '119.143.100.106'
  },
  {
    id: '9',
    account: 'admin',
    name: '管理员',
    operatingSystem: 'Windows',
    unitType: 'Windows 10 or Windows Server 2016',
    browser: 'Chrome',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录失败',
    ipAddrees: '139.162.18.175'
  },
  {
    id: '10',
    account: 'admin',
    name: '管理员',
    operatingSystem: 'Windows',
    unitType: 'Windows 10 or Windows Server 2016',
    browser: 'Chrome',
    remark: '花开堪折直须折,莫待无花空折枝.',
    joinTime: '2022-02-09 15:09:34',
    operatingType: '登录成功',
    ipAddrees: '14.215.245.130'
  },
]
module.exports = [
  {
    url: '/logs/operateLogs',
    type: 'get',
    response(config) {
      console.log('config', config)
      const { account, username, pageNo = 1, pageSize = 20 } = config.query
      let mockList = data.filter((item) => {
        if (account && item.account.indexOf(account) < 0) return false
        if (username && item.name.indexOf(username) < 0) return false
        return true
      })
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      )
      return {
        code: 200,
        msg: 'success',
        totalCount: mockList.length,
        data: pageList,
      }
    },
  },
  {
    url: '/logs/loginLogs',
    type: 'get',
    response(config) {
      console.log('config', config)
      const { account, username, pageNo = 1, pageSize = 20 } = config.query
      let mockList = loginData.filter((item) => {
        if (account && item.account.indexOf(account) < 0) return false
        if (username && item.name.indexOf(username) < 0) return false
        return true
      })
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      )
      return {
        code: 200,
        msg: 'success',
        totalCount: mockList.length,
        data: pageList,
      }
    },
  },
]
