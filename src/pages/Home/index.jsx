import { Header } from '../../components/Header/index'
import { Button } from '../../components/Button/index.jsx'
import './index.css'
export const Home = () => {
  return (
      <div className='home'>
        <Header />

          <section>
              <h1>Top 5 GitHub Users</h1>
              <span>Tap the username to see more information</span>
              <div className='users'>
                  <Button username='GrahamCampbell' />
                  <Button username='fabpot' />
                  <Button username='weierophinney' />
                  <Button username='rkh' />
                  <Button username='josh' />
              </div>
          </section>
      </div>
  )
}
