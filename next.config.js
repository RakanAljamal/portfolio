const path = require('path')
const withTM = require('next-transpile-modules')(['react-icons']); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  async headers() {
    return [{
      source: '/api/resume',
      headers: [{
        key:'Content-Type',
        value:'application/pdf'
      },{
        key:'Content-Disposition',
        value:'inline; filename="cv.pdf"'
      }]

    }]
  }
})
