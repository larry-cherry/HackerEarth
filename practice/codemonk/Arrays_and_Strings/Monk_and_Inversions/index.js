process.stdin.resume();
process.stdin.setEncoding("utf-8");
process.stdin.on("data", function (input) {
    stdin_input += input; // Reading input from STDIN
});
process.stdin.on("end", function () {
    //    main(stdin_input);
    if (stdin_input.split('\n').length === ) {
    }
});
function main(input) {
    process.stdout.write("Hi, " + input + ".\n"); // Writing output to STDOUT
}
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
if (require.main === module) {
    var spreetail_1 = new Spreetail();
    spreetail_1.consoleOutput = true;
    process.stdin.on('data', function (data) {
        var input = data.toString().trim();
        if (spreetail_1 !== null) {
            try {
                var _a = inputParser(input), cmd = _a.cmd, key = _a.key, member = _a.member;
                spreetail_1.commandparser(cmd, key, member);
            }
            catch (error) {
                console.log(error);
            }
        }
    });
}
