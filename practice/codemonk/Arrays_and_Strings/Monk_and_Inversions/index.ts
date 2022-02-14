process.stdin.resume();
process.stdin.setEncoding("utf-8");



process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
//    main(stdin_input);
    if(stdin_input.split('\n').length === ){

    }
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

if (require.main === module) {
  let spreetail = new Spreetail();
  spreetail.consoleOutput = true
  process.stdin.on('data', function(data: Buffer) {
    const input = data.toString().trim();
    if(spreetail !== null){
      try {
        const {cmd, key, member} = inputParser(input);
        spreetail.commandparser(cmd, key, member);
      } catch (error) {
        console.log(error);
      }
    }
  });
}