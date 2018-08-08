export default function autobind() {
  for(let arg of arguments) {
    this[arg.name] = arg.bind(this);
  }
}