import Skeleton from '@mui/material/Skeleton';

const Loader = () => {
  const arr = [1, 2, 3];
  return <div className="loader">
    {
      arr.map((ele, i) => (
        <div key = {i} >
          <Skeleton
            variant="rectangular"
            width={300} height={300}
            sx={{
              backgroundColor: '#858A85',
              margin: '10px',
            }} />
        </div>
      ))
    }
  </div>;
};

export default Loader;
