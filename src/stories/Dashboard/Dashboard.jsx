import './Dashboard.css';
import Header from '../Header/Header';
import { cardList } from '../../Constants/constants';
import Card from '../Card/Card';

const Dashboard = () => {
    return(
        <>           
            <Header headerStyle='food' text='Food App'/>
            <div className='card-list'>
                {
                    cardList.map(card =>(
                        <Card  {...card.info} key={card.info.id}/>
                    ))
                }
            </div>
        </>
    )
}

export default Dashboard;