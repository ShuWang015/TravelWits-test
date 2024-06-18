import { ReactNode } from "react";
import styles from "../App.css";
interface Movie {
  title: string;
  rating: number;
  category: string;
}

interface TableProps {
  entry: Movie[];
  title: string;
  category: string;
  ceiling: string;
  floor: string;
}

const Table = ({ entry, title, category, ceiling, floor }: TableProps) => {
  const items = ["Index", "Title", "Rating", "Category"];
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          {items.map((item) => (
            <th scope="col" key={item}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {entry
          .filter((item) => {
            return Number(ceiling) === 0.0
              ? item
              : Number(item.rating) <= Number(ceiling);
          })
          .filter((item) => {
            return Number(floor) === 0.0
              ? item
              : Number(item.rating) >= Number(floor);
          })
          .filter((item) => {
            return title.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(title.toLowerCase());
          })
          .filter((item) => {
            return category.toLowerCase() === ""
              ? item
              : item.category.toLowerCase().includes(category.toLowerCase());
          })
          .map((item, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{item.title}</td>
              <td>{item.rating}</td>
              <td>{item.category}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
