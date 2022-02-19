import PerfCard from './PerfCard';
import { RenderLineChart as LineChart } from '../graph/RenderLineChart';

const Session = () => {
  return (
    <PerfCard>
      <LineChart />
    </PerfCard>
  )
}

export default Session;