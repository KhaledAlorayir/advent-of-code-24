async function partOne() {
  const safeReportsCount = (await getList()).reduce((total, currentReport) => {
    if (isSafeReport(currentReport)) {
      return total += 1;
    }

    return total;
  }, 0);

  console.log(safeReportsCount);
}

async function partTwo() {
  const safeReportsCount = (await getList()).reduce((total, currentReport) => {
    if (isSafeReport(currentReport) || currentReport.map((_,index) => isSafeReport(currentReport.toSpliced(index,1))).some(Boolean)) {
      return total += 1;
    }

    return total;
  }, 0);

  console.log(safeReportsCount);
}

async function getList() {
  const input = (await Deno.readTextFile("day2/input.txt")).trim().split("\n");
  return input.map((report) => report.split(" ").map((level) => Number(level)));
}

function isSafeReport(report: number[]): boolean {
  const reportType: "INC" | "DEC" = report[0] > report[1] ? "DEC" : "INC";

  for (let i = 0; i < report.length - 1; i++) {
    const difference = Math.abs(report[i] - report[i + 1]);

    if (
      difference > 3 || difference < 1 ||
      (reportType === "INC" && (report[i] >= report[i + 1])) ||
      reportType === "DEC" && (report[i] <= report[i + 1])
    ) {
      return false;
    }
  }
  return true;
}

partOne()
partTwo();
