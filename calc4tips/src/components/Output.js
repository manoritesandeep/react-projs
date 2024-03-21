export default function Output({ bill, tip }) {
  return (
    <div>
      <h3>Your total bill is: ${bill + tip} (${bill} + ${tip} tip) </h3>
    </div>
  );
}
