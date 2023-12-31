const totalCount = 3
const List = [
  {
    uid: '514673110655045',
    role: '管理员',
    roleCode: 'admin',
    remark: '管理员',
    datetime: '2023-12-25 00:00:00',
  },
  {
    uid: '514673110655046',
    role: '普通用户',
    roleCode: 'user',
    remark: '普通用户',
    datetime: '2023-12-25 00:00:00',
  },
  {
    uid: '514673110655047',
    role: '游客',
    roleCode: 'guest',
    remark: '游客',
    datetime: '2023-12-25 00:00:00',
  },
]
module.exports = [
  {
    url: '/roleManagement/getList',
    type: 'post',
    response(config) {
      const { title = '', pageNo = 1, pageSize = 20 } = config.body
      let mockList = List.filter((item) => {
        return !(title && item.title.indexOf(title) < 0)
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
    url: '/roleManagement/doEdit',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟保存成功',
      }
    },
  },
  {
    url: '/roleManagement/doDelete',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟删除成功',
      }
    },
  },
]
