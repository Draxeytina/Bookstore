export default function Book(title, author) {
  return (
    <li>
      Title:
      {title}
      by
      {author}
      <button type="button">Delete</button>
    </li>
  );
}
