import CandyItem from './CandyItem';

export default function CandiesList({ candies }) {
  return (
    <div className='candies-list'> 
      {
        candies.map((candy, i) => <CandyItem candy={candy} key={candy + i} />)
      }
    </div>
  );
}
