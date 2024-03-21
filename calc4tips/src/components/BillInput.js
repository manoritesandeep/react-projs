export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type='text'
        placeholder="Enter bill amount."
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      >
      </input>
    </div>
  );
}
