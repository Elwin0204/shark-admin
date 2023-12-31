module.exports = {
  webpackBarName: 'shark-admin',
  webpackBanner:
    ' build: shark-admin \n shark-admin.com \n https://gitee.com/elwin0204/shark-admin \n time: ',
  donationConsole() {
    const chalk = require('chalk')
    console.log(
      chalk.green(
        `> Welcome to shark-admin and hope to bring you a pleasant experience`
      )
    )
    console.log(
      chalk.green(
        `> If you have any suggestions, please contact Elwin for feedback`
      )
    )

    console.log(
      chalk.green(
        `> If you have any interesting and creative ideas, please join us`
      )
    )

    console.log(
      chalk.green(
        `> If you do not want to display the above information, you can configure shutdown in config`
      )
    )
    console.log('\n')
  },
}
