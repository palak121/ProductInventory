function Pagination({ productPerPage, totalProduct, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <input
          type="button"
          onClick={() => paginate(number)}
          href="!#"
          key={number}
          value={number}
        ></input>
      ))}
    </div>
  );
}

export default Pagination;
