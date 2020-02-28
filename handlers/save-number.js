function saveNumberHandler() {
  debugger;
  // read new number from user input
  let newNumber = document.getElementById('input').value;

  // read from state the data you will need for the next step
  numbers.all.push(newNumber);

  // find the new biggest and smallest values
  let newBiggest = numbers.all.reduce((a, b) => Math.max(a, b));
  let newSmallest = numbers.all.reduce((a, b) => Math.min(a, b));

  // update state: new biggest, new smallest, new current & save the last current
  numbers.biggest = newBiggest;
  numbers.smallest = newSmallest;

  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerText = newBiggest;
  document.getElementById("smallest").innerText = newSmallest;

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput: newNumber,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
