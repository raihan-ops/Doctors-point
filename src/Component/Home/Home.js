import useData from '../../Hooks/useData';
import About from '../About/About';
import Ambulance from '../Ambulance/Ambulance';
import Banner from '../Banner/Banner';

import Card from './Card';

const Home = () => {
    const [doctors, setDoctors] = useData();
   
    return (
        <div className="mx-5">
            <div id="banner">
            <Banner></Banner>
            </div>
            
          
            <h2 id="services" className="mt-5">Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
               doctors.map(doctor =>
                   <Card  key={doctor.id} doc={doctor} ></Card>
               )
            }
            </div>
            
            <div id="ambulance" >
            <Ambulance ></Ambulance>
            </div>
            <div id="about">
            <About></About>
            </div>
          

        </div>
    );
};

export default Home;