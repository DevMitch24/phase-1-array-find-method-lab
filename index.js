function superbowlWin(records) {
    const winningYear = records.find(record => record.result === "W");
    return winningYear ? winningYear.year : undefined;
  }