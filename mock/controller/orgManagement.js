const orgList = [
  {
    label: 'xxx公司',
    children: [
      {
        label: '研发部1',
        children: [
          {
            label: '移动开发',
          },
        ],
      },
      {
        label: '研发部2',
        children: [
          {
            label: 'web开发',
          },
          {
            label: '移动开发',
          },
        ],
      },
      {
        label: '研发部3',
        children: [
          {
            label: '后端开发',
          },
          {
            label: '测试',
          },
        ],
      },
    ],
  },
]

module.exports = [
  {
    url: '/orgManagement/getOrgList',
    type: 'post',
    response(config) {
      return {
        code: 200,
        msg: 'success',
        data: orgList,
      }
    },
  },
  {
    url: '/orgManagement/doEdit',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟保存成功',
      }
    },
  },
  {
    url: '/orgManagement/doDelete',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟删除成功',
      }
    },
  },
]
