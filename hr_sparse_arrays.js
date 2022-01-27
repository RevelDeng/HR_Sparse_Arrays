function matchingStrings(strings, queries) {
    // Write your code here
    var quer_count = Array.apply(null, Array(queries.length)).map(x => 0)
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (strings[j] === queries[i]) {
                quer_count[i]++
            }
        }
    }
    return quer_count
}