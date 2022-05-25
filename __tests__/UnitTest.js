const index = require('../routes/index');

test('If I pass a value into the input index it should return that input', () => {
    expect(index.checkinput('test')).toBe('test');
});
test('If I pass a nullvalue into the input index it should return the default value Express', () => {
    expect(index.checkinput(null)).toBe('Express');
});
