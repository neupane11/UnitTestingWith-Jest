const mod=require('./functions')


test('2+3 add to be 5',()=>{
    expect(mod.sum(2,3)).toBe(5)
})