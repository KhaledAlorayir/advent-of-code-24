function readInput() {
    return Deno.readTextFile("day3/input.txt");
}

async function partOne() {
    const regex = /mul\((\d+),\s*(\d+)\)/g;

    const input = await readInput();

    const total = [...input.matchAll(regex)].reduce((total, currentValue) => {
        return total + Number(currentValue[1]) * Number(currentValue[2]);
    }, 0);

    console.log(total);
}

async function partTwo() {
    const regex = /mul\((\d+),\s*(\d+)\)/g;

    const input = await readInput();

    const total = [...input.matchAll(regex)].reduce((total, currentValue) => {
        const before = input.slice(0, input.indexOf(currentValue[0]));

        const doIndex = before.lastIndexOf("do()")
        const dontIndex = before.lastIndexOf("don't()")

        if(doIndex > dontIndex || (doIndex === -1 && dontIndex === -1)) {
            return total + Number(currentValue[1]) * Number(currentValue[2]);
        }

        return total
    }, 0);

    console.log(total);
}

partTwo();