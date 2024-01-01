const data = [
  {
    content: '等待github上获得了第一个star',
    timestamp: '2024-01-01',
  },
  {
    content:
      '项目命名为shark-admin，本着开源精神，希望感兴趣的小伙伴加入维护，共同建造更好的开源生态',
    timestamp: '最近更新',
  },
]

module.exports = [
  {
    url: '/changeLog/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        totalCount: 999,
        data: data,
      }
    },
  },
]
