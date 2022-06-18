function Tags({ tags }) {
  const currentTags = tags;
  console.log(currentTags);

  return (
    <div className="s1_left_tags">
      {currentTags.map((tag) => (
        <p className="tags">{tag}</p>
      ))}
    </div>
  );
}

export default Tags;
