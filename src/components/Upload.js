export default function () {
  return
    var handleFileUpload = function(e) {
      console.log ('e', e);
    }
  return (
    <div>
      <input type="file" name="pic" accept="image/*"/>
      <input type="file" onChange={handleFileUpload} />
      <input type="submit" />
    </div>
  )
}