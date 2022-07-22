import Button from '../ui/button';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className='flex flex-col justify-center items-center text-center mt-4'>
        <h1 className='text-center text-2xl font-bold mb-3 md:text-3xl lg:text-3xl'>Events in {humanReadableDate}</h1>
      <div className=''>
        <Button className='bg-gray-800 text-violet-400 px-4 py-2 rounded-lg font-bold hover:bg-violet-600 hover:text-white md:px-6 ' link='/events'>Show all events</Button>
      </div>
    </section>
  );
}

export default ResultsTitle;
