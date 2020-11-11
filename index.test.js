const lisper = require('./index')

test("should convert s to th", () => {
  expect(lisper("s")).toEqual("th")
})

test('should convert same to thame', () => {
  expect(lisper('same')).toEqual('thame')
})

test('should convert harass to harath', () => {
  expect(lisper('harass')).toEqual('harath') 
})
