test("Não deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(10);
    console.log('Deveria falhar se fosse .tobe(5)!')
    done();
  }, 500);
});