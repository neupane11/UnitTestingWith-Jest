const sum=require('./add')


test('2+3 add to be 5',()=>{
    expect(sum(2,3)).toBe(5)
})