//Takes a sentence and displays it as an animation
const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); //typing at one line, ignoring \n
  }, 0 + delay);
  delay += 50;
}
setTimeout(() => {
  process.stdout.write('\n');
}, 50 * sentence.length);

