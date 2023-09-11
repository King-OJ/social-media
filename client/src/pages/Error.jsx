import { Link, useRouteError } from 'react-router-dom';
import Img from "../assets/not-found.svg"

export default function Error() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className='px-4 md:px-10 h-full container mx-auto grid place-content-center space-y-8 text-center'>
        <img src={Img} alt='not found' className="max-h-[26rem]"/>
        <h6>Page not found!!!</h6>
        <p>We can't seem to find the page you're looking for</p>
        <span className='tracking-wider'>Go <Link to='/' className='text-primary500'>Back home</Link></span>
      </div>
    );
  }

  return (
    <div className='h-full container mx-auto grid place-content-center space-y-8 text-center'>
      <p>Something went wrong!</p>
      <span className='tracking-wider'>Go <Link to='/' className='text-primary500'>Back home</Link></span>
    </div>
  );
}
