import Cards from "../cards/cards";
import CardsEnd from "../cards/cardsEnd";
import CardStart from "../cards/cardsStart";
const card = [
    {
        id: 1,
        title: 'Proximos',
        description: 'Los proximos concursos son'
    },
    {
        id: 2,
        title: 'Evaluaciones',
        description: 'Estas estan descritas en la sección'
    },
    {
        id: 3,
        title: 'Evaluaciones',
        description: 'Estas estan descritas en la sección'
    },
]
export default function ContentStudent(){
    return (        
        <>
            <div className="container">
                <div className="column">
                    <div className="row flex justify-between">
                        {
                            card.map((card) => (
                                <div className="order-first" key={card.id}>
                                    <Cards title={card.title} description={card.description} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div class="column">
                    <div className="row flex justify-between">
                        {
                            card.map((card) => (
                                <div className="order-first" key={card.id}>
                                    <CardStart title={card.title} description={card.description} />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div class="column">
                    <div className="row flex justify-between">
                        {
                            card.map((card) => (
                                <div className="order-first" key={card.id}>
                                    <CardsEnd title={card.title} description={card.description} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </>
    )}

