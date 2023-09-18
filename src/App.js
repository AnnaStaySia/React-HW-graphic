import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";
import './style/App.css';

function App() {
  return (
    <div className="App">
      <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;
      <Chart
      chartType="ScatterChart"
      data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
      width="100%"
      height="400px"
      legendToggle/>
    </div>
  );
}

export default App;
