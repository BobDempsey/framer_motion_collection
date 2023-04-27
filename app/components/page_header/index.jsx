const PageHeader = () => {
  return (
    <section className="flex flex-col space-y-4 text-center font-semibold">
      <h1 className="text-6xl">Framer Motion Collection</h1>
      <h3 className="text-2xl">
        A collection of fun UI animations and interactions using Framer Motion
        and React
      </h3>
      <pre>
        add a layout animation using framer when the down caret is clicked to
        show the description
      </pre>
      <pre>
        add a modal, description, or footer describing this app `built with x,
        hosted on x`
      </pre>
    </section>
  );
};

export default PageHeader;
