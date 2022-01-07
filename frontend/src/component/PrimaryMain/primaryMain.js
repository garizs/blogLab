import PrimaryNews from '../PrimaryNews/PrimaryNews';
import PrimaryCategor from '../PrimaryCategory/PrimaryCategory';
import PrimaryCurators from '../PrimaryCurator/PrimaryCurator';
import './primaryMain.scss';

const PrimaryMain = () => (
  <div className="PrimaryMain">
    <PrimaryNews />
    <PrimaryCategor />
    <PrimaryCurators />
  </div>
);
export default PrimaryMain;
