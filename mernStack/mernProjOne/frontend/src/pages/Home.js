import { useEffect } from "react";
import { useWorkOutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutFrom from "../components/WorkoutForm";

const Home = () => {
  const {workouts, dispatch} = useWorkOutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    };

    fetchWorkouts();
  },[dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {console.log(workouts)}
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutFrom/>
    </div>
  );
};

export default Home;
