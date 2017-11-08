let response

export default {
  archives: {
    getAll: cb => cb({ data: response })
  },
  // this is a method so you can set the fake response
  // to whatever you like for your test
  __setMockResponse: res => response = res
}
