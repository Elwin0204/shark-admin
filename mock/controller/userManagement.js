const totalCount = 3
const List = [
  {
    uid: '512894685630535',
    id: 'sk-0000001',
    avatar: 'https://fastly.jsdelivr.net/gh/Elwin0204/sk-color-icons@master/icons/boy.svg',
    username: '管理员',
    password: 'admin',
    email: '@email',
    gender: 'MAN',
    age: '20',
    signature: '永远相信美好的事情即将发生',
    permissions: ['admin'],
    datatime: '@datetime',
    status: 'Y',
  },
  {
    uid: '512894685630536',
    id: 'sk-0000002',
    avatar: 'https://fastly.jsdelivr.net/gh/Elwin0204/sk-color-icons@master/icons/boy.svg',
    username: '权限人员1',
    password: '123',
    email: '@email',
    gender: 'WOMAN',
    age: '16',
    signature: '永远相信美好的事情即将发生',
    permissions: ['editor'],
    datatime: '@datetime',
    status: 'Y',
  },
  {
    uid: '512894685630537',
    id: 'sk-0000003',
    avatar: 'https://fastly.jsdelivr.net/gh/Elwin0204/sk-color-icons@master/icons/boy.svg',
    username: '权限人员2',
    password: '123',
    email: '@email',
    gender: 'WOMAN',
    age: '18',
    signature: '永远相信美好的事情即将发生',
    permissions: ['admin', 'editor'],
    datatime: '@datetime',
    status: 'Y',
  },
]
module.exports = [
  {
    url: '/userManagement/getList',
    type: 'post',
    response(config) {
      const { title = '', pageNo = 1, pageSize = 20 } = config.body
      let mockList = List.filter((item) => {
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })
      const pageList = mockList.filter(
        (item, index) =>
          index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      )
      return {
        code: 200,
        msg: 'success',
        totalCount,
        data: pageList,
      }
    },
  },
  {
    url: '/userManagement/doEdit',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟保存成功',
      }
    },
  },
  {
    url: '/userManagement/doDelete',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟删除成功',
      }
    },
  },
]
