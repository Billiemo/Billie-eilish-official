// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/yrbajwpw4',
        has: [
          {
            type: 'query',
            key: 'key',
            value: 'c13dd6d2f97a5a0f967c85445d720bbb',
          },
        ],
        destination: 'https://cleopatraadulatefrench.com/some-new-path', // Change this to your desired URL
        permanent: false,
      },
    ]
  },
}
