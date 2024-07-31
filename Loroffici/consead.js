const domain = [1, 2, 3, 4, 5];

function transform(v) {
    return v + 10;
}

const result = domain.map(v => transform(v));

console.log(result); // Output: [11, 12, 13, 14, 15]
