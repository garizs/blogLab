import { useEffect } from 'react';
import PrimaryNews from '../PrimaryNews/PrimaryNews';
import PrimaryCategor from '../PrimaryCategory/PrimaryCategory';
import PrimaryCurators from '../PrimaryCurator/PrimaryCurator';
import './PrimaryMain.scss';

const PrimaryMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="primaryMain">
      <PrimaryNews />
      <PrimaryCategor />
      <PrimaryCurators />
    </div>
  );
};
export default PrimaryMain;
