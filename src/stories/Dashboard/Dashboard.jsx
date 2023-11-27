import './Dashboard.css';
import Header from '../Header/Header';
import { cardList } from '../../Constants/constants';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

const Dashboard = () => {
    return(
        <div className='dashboard'>           
            <Header headerStyle='food' text='Food App'/>
            <div className='card-list'>
                {
                    cardList.map(card =>(
                        <div  key={card.info.id}>
                        <Card  {...card.info} key={card.info.id}/>
                        </div>
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard;