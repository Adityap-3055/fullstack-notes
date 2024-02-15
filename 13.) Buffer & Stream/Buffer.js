// Temporary storage spot for a chunk of data that is being transfered from one place to another
// Buffer class is a global class that can be accessed in an application without importing the
// buffer module.


// Someways to call buffer
var buf = new Buffer(5)

var buf = new Buffer([10, 20, 30, 40, 50])

var buf = new Buffer('Hello Everyone', 'utf-8')