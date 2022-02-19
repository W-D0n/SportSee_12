import PerfCard from './PerfCard';
import { RenderPieChart as Pie } from '../graph/RenderPieChart';

const Score = () => {
  return (
    <PerfCard>
      <Pie />
    </PerfCard>
  );
}
export default Score;