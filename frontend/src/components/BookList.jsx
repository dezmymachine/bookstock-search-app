import React from "react";

const BookList = ({ data }) => {
  return (
    <div>
      {data && data.length > 0 && (
        <table className="table w-full shadow-md  overflow-hidden">
          <thead className="bg-gray-50 text-gray-700 font-semibold">
            <tr>
              <th className="p-3">No.</th>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">Publish Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book, index) => (
              <tr
                key={book._id}
                className="hover:bg-gray-100 transition duration-300"
              >
                <td className="text-center p-3">{index + 1}.</td>
                <td className="text-center p-3">{book.title}</td>
                <td className="text-center p-3">{book.author}</td>
                <td className="text-center p-3">{book.publishYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookList;
