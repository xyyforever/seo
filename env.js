module.exports = {
    dev: {
      MODE: "dev",
      BASE_URL: "http://gateway-test.baijiantest.com", // 请求地址
      PC_URL: 'http://121.196.152.62', //  pc站地址
    },
    test: {
      MODE: "test",
      BASE_URL: "http://gateway-test.baijiantest.com", // 服务端请求地址
      PC_URL: 'http://121.196.152.62' //  pc站地址
    },
    prod: {
      MODE: "prod",
      BASE_URL: "http://gateway.baijiantest.com", // 服务端请求地址
      PC_URL: 'http://baijiantest.com' //  pc站地址
    }
  };


