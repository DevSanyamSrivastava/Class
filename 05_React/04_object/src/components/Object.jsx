import "./object.css";
import Img1 from '../assets/hero.png'

const Object = () => {
  const students = [
    {
      id: 1,
      name: "Sanyam",
      class: "12th",
      img : Img1
    },
    {
      id: 2,
      name: "Anuj",
      class: "B Tech",
    },
    {
      id: 3,
      name: "Rohan",
      class: "10th",
    },
    {
      id: 4,
      name: "Sumit",
      class: "Bio",
    },
  ];
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {students.map((student) => (
        <>
          <div className="main-container" >
            <img src={student.img} style={{height:"70px", width:"70px", borderRadius:"50%"}}/>
            <p>{student.id}</p>
            <p>{student.name}</p>
            <p>{student.class}</p>
          </div>
        </>
      ))}
    </div>
  );
};
export default Object;
