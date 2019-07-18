const index = require("../js/index");
const tape = require("tape");

tape("Testing the specific number function", t => {
    let actual = [1, 2, 3, 4, 5, 6];
    let expected = [1, 2, 3];
    t.equal(
        index.specificNumber(actual, 4),
        expected,
        "Should return from one to three "
    );
    t.end();
});