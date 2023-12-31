const data = [
  {
    title:
      '作者寄语：因为相信，所以看见，开源的良好氛围来自于每一个热爱技术的Cool guy，如果觉得有用，请赞助作者一杯咖啡，也欢迎一同维护',
    closable: false,
    type: 'success',
  },
  {
    title:
      '',
    closable: false,
    type: 'warning',
  },
]
module.exports = [
  {
    url: '/notice/getList',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
