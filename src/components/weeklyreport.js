// import React, { useState } from 'react';
// import './weeklyreport.css';

// function Report() {
//   const [tasks, setTasks] = useState([
//     { id: 1, name: 'Meditation', done: false },
//     { id: 2, name: 'Reading', done: false },
//     { id: 3, name: 'Positive Affirmations', done: false },
//     { id: 4, name: 'Healthy Eating', done: false }
//   ]);

//   const handleTaskDone = (taskId) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, done: !task.done } : task
//       )
//     );
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} className={task.done ? 'done' : ''}>
//             <input
//               type="checkbox"
//               checked={task.done}
//               onChange={() => handleTaskDone(task.id)}
//             />
//             {task.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Report;

import React, { useState } from 'react';
import './weeklyreport.css';

const WeeklyTracker = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const habits = ['Drink 8 glasses of water', 'Exercise for 30 minutes', 'Meditate for 10 minutes', 'Read for 30 minutes', 'Get 8 hours of sleep'];

  const [habitsChecked, setHabitsChecked] = useState(
    {
      Sunday: [false, false, false, false, false],
      Monday: [false, false, false, false, false],
      Tuesday: [false, false, false, false, false],
      Wednesday: [false, false, false, false, false],
      Thursday: [false, false, false, false, false],
      Friday: [false, false, false, false, false],
      Saturday: [false, false, false, false, false],
    }
  );

  const handleCheckboxChange = (e) => {
    const dayOfWeek = e.target.dataset.dayOfWeek;
    const habitIndex = e.target.dataset.habitIndex;
    const isChecked = e.target.checked;
    
    setHabitsChecked(prevState => ({
      ...prevState,
      [dayOfWeek]: prevState[dayOfWeek].map((checked, index) => index === habitIndex ? isChecked : checked)
    }));
  }

  return (
    <table className="weekly-tracker">
      <thead>
        <tr>
          <th>Day</th>
          {habits.map(habit => <th key={habit}>{habit}</th>)}
        </tr>
      </thead>
      <tbody>
        {daysOfWeek.map(day => (
          <tr key={day}>
            <td>{day}</td>
            {habitsChecked[day].map((checked, index) => (
              <td key={index}>
                <label>
                  <input
                    type="checkbox"
                    data-day-of-week={day}
                    data-habit-index={index}
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                  <span></span>
                </label>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeeklyTracker;
