async function partOne() {
  const { firstList, secondList } = await getSortedLists();

  let total = 0;

  for(let i=0; i<firstList.length; i++) {
    total += Math.abs(firstList[i] - secondList[i]);
  }

  console.log(total);
}

async function partTwo() {
  const { firstList, secondList } = await getSortedLists();

  const total = firstList.reduce((total,currentValue) => {
    const occurrencesInSecondList = secondList.filter((id) => id === currentValue).length;

    return total + (currentValue * occurrencesInSecondList);
  },0)

  console.log(total);
}

async function getSortedLists() {
  const input = (await Deno.readTextFile("day1/input.txt")).split("\n");
  input.pop();

  const firstList: number[] = [];
  const secondList: number[] = [];

  input.forEach((row) => {
    const [first, second] = row.split("   ");
    firstList.push(Number(first));
    secondList.push(Number(second));
  });

  return { firstList: firstList.sort(), secondList: secondList.sort() };
}

partOne();
partTwo();