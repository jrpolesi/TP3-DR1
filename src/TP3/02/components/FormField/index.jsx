import "./style.css";

export function FormField({ children, name, field, error }) {
  const errorMsg = error?.message;

  return (
    <div className="form-field">
      <label htmlFor={name}>{field}</label>
      {children}
      {!!errorMsg && <span className="error">{errorMsg}</span>}
    </div>
  );
}
