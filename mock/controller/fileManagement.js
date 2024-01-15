const totalCount = 3
const List = [
  {
    uid: '512894685630561',
    id: 'file-0000001',
    fileName: '文件1',
    username: '小泥鳅',
    datatime: '@datetime',
  },
  {
    uid: '512894685630562',
    id: 'file-0000002',
    fileName: '文件2',
    username: '小泥鳅',
    datatime: '@datetime',
  },
  {
    uid: '512894685630563',
    id: 'file-0000003',
    fileName: '文件3',
    username: '小泥鳅',
    datatime: '@datetime',
  },
  {
    uid: '512894685630564',
    id: 'file-0000004',
    fileName: '文件4',
    username: '小泥鳅',
    datatime: '@datetime',
  },
  {
    uid: '512894685630565',
    id: 'file-0000005',
    fileName: '文件5',
    username: '小泥鳅',
    datatime: '@datetime',
  },
  {
    uid: '512894685630566',
    id: 'file-0000006',
    fileName: '文件6',
    username: '小泥鳅',
    datatime: '@datetime',
  },
]
module.exports = [
  {
    url: '/fileManagement/getList',
    type: 'post',
    response(config) {
      const { fileName = '', pageNo = 1, pageSize = 20 } = config.body
      let mockList = List.filter((item) => {
        if (fileName && item.fileName.indexOf(fileName) < 0) return false
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
    url: '/fileManagement/doEdit',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟保存成功',
      }
    },
  },
  {
    url: '/fileManagement/doDelete',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟删除成功',
      }
    },
  },
]
