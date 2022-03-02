import { useEffect } from "react";

const Dashboard = () => {
  const fetchdata = async () => {
    try {
      //const response = await fetch("/data.json");
      const response = await fetch("http://localhost:5000/");
      const data = response.json();
      console.log(data);
    } catch (err) {
      // return console.log("asdasd");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return <h1>Dashboard</h1>;
};

export default Dashboard;
