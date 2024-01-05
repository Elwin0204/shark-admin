const dictList = [
  {
    uid: '512894685630535',
    name: '性别',
    code: 'gender',
    sort: 0,
    disabled: false,
  },
  {
    uid: '512894685630536',
    name: '学历',
    code: 'education',
    sort: 1,
    disabled: false,
  },
  {
    uid: '512894685630537',
    name: '国籍',
    code: 'nationality',
    sort: 2,
    disabled: false,
  },
]

const dictMap = {
  gender: [
    {
      uid: '512894685630535',
      name: '男',
      code: 'man',
      sort: 0,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '女',
      code: 'woman',
      sort: 1,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
  ],
  education: [
    {
      uid: '512894685630535',
      name: '高中',
      code: 'high_school',
      sort: 0,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '专科',
      code: 'junior_college_degree',
      sort: 1,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '本科',
      code: 'bachelor_degree',
      sort: 2,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '硕士',
      code: 'master_degree',
      sort: 3,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '博士',
      code: 'doctoral_degree',
      sort: 4,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
  ],
  nationality: [
    {
      uid: '512894685630535',
      name: '中国',
      code: 'china',
      sort: 0,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '美国',
      code: 'america',
      sort: 1,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '新加坡',
      code: 'singapore',
      sort: 2,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '马来西亚',
      code: 'malaysia',
      sort: 3,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
    {
      uid: '512894685630536',
      name: '土耳其',
      code: 'turkey',
      sort: 4,
      disabled: false,
      datetime: '2024-01-05 14:03:59',
    },
  ],
}
module.exports = [
  {
    url: '/dictManagement/getParentList',
    type: 'post',
    response(config) {
      const { keyWord = '' } = config.body
      let mockList = dictList.filter((item) => {
        if (keyWord && item.name.indexOf(keyWord) < 0) return false
        return true
      })

      return {
        code: 200,
        msg: 'success',
        data: mockList,
      }
    },
  },
  {
    url: '/dictManagement/getChildrenList',
    type: 'post',
    response(config) {
      const { code = '' } = config.body
      return {
        code: 200,
        msg: 'success',
        data: dictMap[code] ? dictMap[code] : [],
      }
    },
  },
  {
    url: '/dictManagement/doEdit',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟保存成功',
      }
    },
  },
  {
    url: '/dictManagement/doDelete',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟删除成功',
      }
    },
  },
]
