import "./style.css";

export function SubmitButton({ children, isLoading }) {
  let className = "submit-button";
  if (isLoading) {
    className += " submit-button__loading";
  }

  return <button className={className}>{children}</button>;
}
