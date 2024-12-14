const functionContext = {
    a: 1,
    b: 2,
    c: 3
};

for (const name in functionContext) {
    if (functionContext.hasOwnProperty(name)) {
        console.log(name); // Outputs: 'a', 'b', 'c'
        console.log(functionContext[name]); // Outputs: 1, 2, 3
    }
}
