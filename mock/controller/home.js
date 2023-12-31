const data = [
  {
    title: '总销售额',
    value: '126560',
  }
]
module.exports = [
  {
    url: '/home/cardList',
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
