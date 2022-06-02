import React from 'react';
import NotFoundImage from '../../assets/img/404.png';
import PageTitle from '../../components/Typography/PageTitle';



const NotFound: React.FC = () => {

  
  return (
    <div className='flex flex-col justify-center items-center bg-brand-primary-white py-24 px-6'>
      <div className='max-w-xs'>
        <img src={NotFoundImage} alt="coming soon" className=' w-full'/>
      </div>
      <div className='flex flex-col justify-center items-center mt-6'>
        <PageTitle fontSize="2rem" className="text-brand-text-tableHead mb-4">
          Page not found !
        </PageTitle>
        <p className='text-brand-text-title mb-4'>This page doesn’t exist or was removed! We suggest you back to home.</p>
        <div className=' w-40'>
          {/* <Button tag={Link} to={APP_USER_ROUTES[param].DASHBOARD} text="Back to Home"/> */}
        </div>
      </div>
    </div>
  )
}

export default NotFound;