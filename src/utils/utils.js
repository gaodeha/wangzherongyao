export function delay(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds*1000, 'done');
  });
}

export function randomChoice(choices) {
  if(!choices || choices.length <= 0) {
    return null;
  }
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
