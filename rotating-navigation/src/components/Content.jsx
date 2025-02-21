import "../styles/Content.css";

const Content = () => {
  return (
    <article className="content">
      <h1>Amazing Article</h1>
      <small>Small Phrase</small>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, id
        repudiandae. Ratione, at explicabo. Deleniti provident debitis, amet
        dignissimos beatae placeat molestias aliquam aliquid ex aut, quidem
        autem similique quaerat.
      </p>
      <h3>{`My Dog "Jammin'"`}</h3>
      <img
        src="https://images.unsplash.com/photo-1573433664069-c14b10184e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="doggy"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, nobis
        perferendis animi eius ab eligendi placeat sint dignissimos quae quaerat
        enim ipsam porro. Sapiente vero recusandae, cupiditate ea facilis rem?
      </p>
    </article>
  );
};

export default Content;
