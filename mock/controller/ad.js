const data = [
  {
    title: '如果觉得对您有帮助, 可以请一杯秋天的酱香拿铁',
    url: 'https://shark-admin.com/authorization',
  }
]
module.exports = [
  {
    url: '/ad/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    }
  }
]
