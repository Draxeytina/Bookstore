export default function AddBook(){
  return (
    <form>
      <label>
        Title:
        <input type="text" name="new-title" />
      </label>
      <label>
        Author:
        <input type="text" name="new-author" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}