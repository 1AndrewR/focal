const raisinAlarm = function (cookie) { // Writen by Andrew
  for (const ingredient of cookie) {
    if (ingredient === "🍇") {
      return "Raisin alarm!";
    }
  }
  return "All good!";
};

const raisinAlarmArray = function (cookie) { // Writen by Dro
    return cookie.map(function(cookieArray) {
        for (let i = 0; i < cookieArray.length; i++) {
            if (cookieArray[i] === "🍇") {
                return "Raisin alarm!";
            }
        }
        return "All good!";
    })
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log(
    raisinAlarmArray([
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"],
    ])
  );