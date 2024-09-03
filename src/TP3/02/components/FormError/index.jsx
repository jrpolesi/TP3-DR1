import "./style.css";

export function FormError({ value }) {
  return !!value && <div className="form-error">{value}</div>;
}
