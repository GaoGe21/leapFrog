test('test common matcher', () => {
  expect( 2 + 2 ).toBe(4)
  expect( 2 + 2 ).not.toBe(5)
})

test("test to be true or false", () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
  expect(null).toBeNull()
  expect(undefined).toBeUndefined()
})

test("test number", () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test("test object", () => {
  expect({name: "gloria"}).toEqual({name: "gloria"})
})

test("this is test string", () => {
  expect("string").toMatch(/string/);
  expect('string').not.toMatch(/I/);
})