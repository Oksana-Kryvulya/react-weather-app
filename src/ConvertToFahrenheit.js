export default function ConvertToFahrenheit(props) {
  return Math.round((props.temperatura * 9) / 5 + 32);
}
