import "./manage.css";
import DashbordTopbar from "../../components/dashbordtopbar/DashbordTopbar";
import { Bar,Pie} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Dashbordside from "../../components/dashbordside/Dashbordside";
import { useState } from "react";



export default function Manage() {
  const myData = [
    {
      id: 1,
      content: "blogs",
      userGain: 20,
      userLost: 10,
    },
    {
      id: 2,
      content: "users",
      userGain: 5,
      userLost: 3,
    },
    {
       id:1,
      content: "comments",
      userGain: 90,
      userLost: 70,
    },
  
  ];

    const [userData,setUserData] = useState ({

        labels : myData.map((data)=>data.content),
        datasets :[{
            label:"Blog analysis",
            data : myData.map((data)=>data.userGain),
            backgroundColor :["green","brown","lightblue"],
        },],
        
    });


    const pData = [
      {
        id: 1,
        content: "good",
        userGain:50,
        userLost: 30,
      },
      {
        id: 2,
        content: "medium",
        userGain: 25,
        userLost: 15,
      },
      {
        id: 3,
        content: "bad",
        userGain: 5,
        userLost: 0,
      },
      
    ];
  
      const [useData,setUseData] = useState ({
  
          labels : pData.map((data)=>data.content),
          datasets :[{
              label:"comments",
              data : pData.map((data)=>data.userGain),
              backgroundColor :["green","brown","teal"],
          },],
          
      });
 
    
  return (
    <>
    <DashbordTopbar/>
    <side>
      <Dashbordside/>
    </side>
    <main className="maii">
      <div className="bar">
       <Bar data={userData}/>  
       </div>
       <div className="pie">
        <h4>comments analysis</h4>
       <Pie data={useData}/>
       </div>
   </main>
    </>
  );
}

