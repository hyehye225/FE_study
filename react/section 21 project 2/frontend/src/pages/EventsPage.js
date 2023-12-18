import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: "e1",
    data: "event 1",
  },
  {
    id: "e2",
    data: "event 2",
  },
  {
    id: "e3",
    data: "event 3",
  },
  {
    id: "e4",
    data: "event 4",
  },
];
const EventsPage = () => {
  return (
    <>
      <h1>This is events page!</h1>
      <ul>
        {DUMMY_DATA.map((eve) => {
          return (
            <li key={eve.id}>
              <Link to={eve.id}>{eve.data}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default EventsPage;
