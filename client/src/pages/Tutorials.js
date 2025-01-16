import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const TutorialItem = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color:#C5C6C7;
  width:100%;
  // text-align:center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #334173;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  //  text-align:center;
  &:hover {
    text-decoration: underline;
  }
`;

const Thumbnail = styled.img`
margin-top: ${(props) => props.marginTop || "10px"};
margin-bottom: ${(props) => props.marginBottom || "20px"};
width: ${(props) => props.width || "40%"};
height: ${(props) => props.height || "200px"};
padding: ${(props) => props.padding || "0"};
border-radius: ${(props) => props.borderRadius || "8px"};
box-shadow: ${(props) => props.boxShadow || "none"};
border: ${(props) => props.border || "none"};
object-fit: ${(props) => props.objectFit || "cover"}


${(props) =>
  props.imageName === "nidhi1.jpg" &&
  `
    border: 3px solid #ff5733;
    width: 40%;
    height: 200px;
    box-shadow: 0 4px 8px rgba(255, 87, 51, 0.5);
    margin-bottom: 30px;
    margin-top: 15px;
  `}

${(props) =>
  props.imageName === "nidhi2.jpg" &&
  `
    border: 3px solid #007bff;
    width: 50%;
    height: 200px;
    filter: grayscale(50%);
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
  `}

${(props) =>
  props.imageName === "nidhi3.jpg" &&
  `
    border: 3px dashed #28a745;
    width: 50%;
    height: 200px;
    transform: rotate(-5deg);
    margin-top: 20px;
  `}

${(props) =>
  props.imageName === "nidhi4.jpg" &&
  `
    border: 2px dotted #ffc107;
    width: 50%;
    height: 200px;
    margin-bottom: 40px;
    opacity: 0.9;
  `}

${(props) =>
  props.imageName === "nidhi5.jpg" &&
  `
    border: 4px solid #6f42c1;
    width: 50%;
    height: 200px;
    margin: 20px auto;
    box-shadow: 0 4px 15px rgba(111, 66, 193, 0.5);
  `}

${(props) =>
  props.imageName === "nidhi6.jpg" &&
  `
    border: 3px solid #dc3545;
    width: 50%;
    height: 200px;
    transform: scale(1.1);
    box-shadow: 0 5px 20px rgba(220, 53, 69, 0.6);
    margin-top: 25px;
  `}
`;

const Tutorials = () => {
const tutorials = [
  {
    id: 1,
    title: "Beginner Workout Plans",
    description:
      "Learn how to start your fitness journey with easy-to-follow beginner workout plans.",
    link: "https://youtu.be/t5Put_6aziE?si=hJzOjaSGNMBDwgGg",
    image: require("./nidhi1.jpg"),
  },
  {
    id: 2,
    title: "Meal Planning for Beginners",
    description:
      "Understand how to create a balanced diet that aligns with your fitness goals.",
    link: "https://youtu.be/DhAfxWYz4Zk?si=OY8dM3sbhPai3JSns",
    image: require("./nidhi2.jpg"),
  },
  {
    id: 3,
    title: "Proper Form for Squats",
    description:
      "Step-by-step guide on how to perform squats correctly to avoid injuries.",
    link: "https://youtu.be/gcNh17Ckjgg?si=5kujodelFY2-SV7H",
    image: require("./nidhi3.jpg"),
  },
  {
    id: 4,
    title: "5-Minute Stretching Routine",
    description:
      "Boost your flexibility with this quick and easy stretching routine.",
    link: "https://youtu.be/Ef6LwAaB3_E?si=t9X7p79ta_-P1OVg",
    image: require("./nidhi4.jpg"),
  },
  {
    id: 5,
    title: "Different types of chest Workouts",
    description:
      "Follow step by step to perform different types of chest workouts at Home.",
    link: "https://youtu.be/n69-eVLtevc?si=iIYLvkdFi6kEnZQV",
    image: require("./nidhi5.jpg"),
  },
  {
    id: 6,
    title: "Different types of Legs workouts",
    description: "How to perform different kinds of legs workouts.",
    link: "https://youtu.be/EZQMBYoFoRs?si=u2OrxYGWWos3pB1J",
    image: require("./nidhi6.jpg"),
  },
];

return (
  <Container>
    {tutorials.map((tutorial) => (
      <TutorialItem key={tutorial.id}>
  <Title>{tutorial.title}</Title>
  <Description>{tutorial.description}</Description>
  <Link href={tutorial.link} target="_blank" rel="noopener noreferrer">
    Watch Tutorial
  </Link>
  <Thumbnail src={tutorial.image} alt={tutorial.title} imageName={tutorial.image.split("/").pop()} />
</TutorialItem>

    ))}
  </Container>
);
};

export default Tutorials;
