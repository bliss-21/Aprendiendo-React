import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users= [
    {
        userName: 'midudev',
        name: 'Migel Angel Duran',
        isFollowing: false
    },
    {
        userName: 'elias',
        name: 'Elias Olate',
        isFollowing: true
    },
    {
        userName: 'sami',
        name: 'Samuel Olate',
        isFollowing: false
    },
    {
        userName: 'joel',
        name: 'Joel Olate',
        isFollowing: true
    },
    {
        userName: 'mangaku',
        name: 'Levisai Astete',
        isFollowing: false
    },
]

export function App () {
    return (

        <section className='App'>
            {
                users.map( user => {
                    
                    const {userName, name, isFollowing} = user

                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
        
    )
}