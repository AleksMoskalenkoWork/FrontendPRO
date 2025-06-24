function Task(props) {
  return (
    <>
      <div className="list-item_form">
        <span>{props.task.text}</span>
      </div>
    </>
  );
}

export default Task;
