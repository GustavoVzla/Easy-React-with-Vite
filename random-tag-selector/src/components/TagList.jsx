import "../styles/TagList.css";

const TagList = ({ tags }) => {
  return (
    <div id="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag" data-tag={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
