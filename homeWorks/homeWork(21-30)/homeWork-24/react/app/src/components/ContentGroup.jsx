import Textarea from './core/Textarea';

function ContentGroup() {
  return (
    <>
      <div className="content-group_wrapper">
        <p className="content-group_header">Result:</p>
        <Textarea
          placeholder="Result must show here..."
          rows="10"
          className="content-group_field"
        ></Textarea>
      </div>
    </>
  );
}

export default ContentGroup;
