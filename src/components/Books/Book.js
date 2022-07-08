export default function Book(props) {
  return (
    <li>Title: {props.title} by {props.author} <button type='button'>Delete</button></li>
  );
}
